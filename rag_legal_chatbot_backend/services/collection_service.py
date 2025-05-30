from typing import Optional, List, Dict
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient
from ..models.collection import (
    Collectible,
    CollectionProgress,
    CollectionStats,
    CollectionSet,
    UserCollectionSet
)

class CollectionService:
    def __init__(self, db: AsyncIOMotorClient):
        self.db = db
        self.collectibles_collection = db.collectibles
        self.progress_collection = db.collection_progress
        self.sets_collection = db.collection_sets

    async def get_collectible(self, collectible_id: str) -> Optional[Collectible]:
        collectible = await self.collectibles_collection.find_one({"_id": ObjectId(collectible_id)})
        if collectible:
            return Collectible(**collectible)
        return None

    async def get_collectibles_by_period(self, period_id: str) -> List[Collectible]:
        collectibles = await self.collectibles_collection.find({"period_id": period_id}).to_list(length=None)
        return [Collectible(**collectible) for collectible in collectibles]

    async def get_collectibles_by_event(self, event_id: str) -> List[Collectible]:
        collectibles = await self.collectibles_collection.find({"event_id": event_id}).to_list(length=None)
        return [Collectible(**collectible) for collectible in collectibles]

    async def get_user_progress(self, user_id: str) -> Optional[CollectionProgress]:
        progress = await self.progress_collection.find_one({"user_id": user_id})
        if progress:
            return CollectionProgress(**progress)
        return None

    async def create_user_progress(self, user_id: str) -> CollectionProgress:
        progress = CollectionProgress(
            user_id=user_id,
            unlocked_collectibles=[],
            total_experience=0,
            total_coins=0
        )
        result = await self.progress_collection.insert_one(progress.dict())
        created_progress = await self.progress_collection.find_one({"_id": result.inserted_id})
        return CollectionProgress(**created_progress)

    async def unlock_collectible(
        self,
        user_id: str,
        collectible_id: str
    ) -> Optional[CollectionProgress]:
        collectible = await self.get_collectible(collectible_id)
        if not collectible:
            return None

        result = await self.progress_collection.update_one(
            {"user_id": user_id},
            {
                "$addToSet": {"unlocked_collectibles": collectible_id},
                "$inc": {
                    "total_experience": collectible.rewards.experience,
                    "total_coins": collectible.rewards.coins
                }
            }
        )
        if result.modified_count:
            updated_progress = await self.progress_collection.find_one({"user_id": user_id})
            return CollectionProgress(**updated_progress)
        return None

    async def get_collection_stats(self, user_id: str) -> CollectionStats:
        progress = await self.get_user_progress(user_id)
        if not progress:
            return CollectionStats(
                total_collectibles=0,
                unlocked_count=0,
                locked_count=0,
                completion_percentage=0,
                rarity_breakdown={},
                total_experience=0,
                total_coins=0
            )

        total_collectibles = await self.collectibles_collection.count_documents({})
        unlocked_count = len(progress.unlocked_collectibles)
        locked_count = total_collectibles - unlocked_count
        completion_percentage = (unlocked_count / total_collectibles * 100) if total_collectibles > 0 else 0

        # Calculate rarity breakdown
        rarity_breakdown = {}
        for collectible_id in progress.unlocked_collectibles:
            collectible = await self.get_collectible(collectible_id)
            if collectible:
                rarity = collectible.rarity
                rarity_breakdown[rarity] = rarity_breakdown.get(rarity, 0) + 1

        return CollectionStats(
            total_collectibles=total_collectibles,
            unlocked_count=unlocked_count,
            locked_count=locked_count,
            completion_percentage=completion_percentage,
            rarity_breakdown=rarity_breakdown,
            total_experience=progress.total_experience,
            total_coins=progress.total_coins
        )

    async def get_collection_set(self, set_id: str) -> Optional[CollectionSet]:
        collection_set = await self.sets_collection.find_one({"_id": ObjectId(set_id)})
        if collection_set:
            return CollectionSet(**collection_set)
        return None

    async def get_user_collection_sets(self, user_id: str) -> List[UserCollectionSet]:
        progress = await self.get_user_progress(user_id)
        if not progress:
            return []

        sets = await self.sets_collection.find().to_list(length=None)
        user_sets = []

        for set_data in sets:
            collection_set = CollectionSet(**set_data)
            unlocked_collectibles = [
                collectible_id for collectible_id in collection_set.collectible_ids
                if collectible_id in progress.unlocked_collectibles
            ]
            
            is_completed = len(unlocked_collectibles) == len(collection_set.collectible_ids)
            
            user_set = UserCollectionSet(
                user_id=user_id,
                set_id=str(collection_set.id),
                unlocked_collectibles=unlocked_collectibles,
                is_completed=is_completed,
                rewards_claimed=False
            )
            user_sets.append(user_set)

        return user_sets

    async def claim_set_rewards(
        self,
        user_id: str,
        set_id: str
    ) -> Optional[UserCollectionSet]:
        user_set = await self.get_user_collection_sets(user_id)
        target_set = next((s for s in user_set if s.set_id == set_id), None)
        
        if not target_set or not target_set.is_completed or target_set.rewards_claimed:
            return None

        collection_set = await self.get_collection_set(set_id)
        if not collection_set:
            return None

        # Update user progress with rewards
        result = await self.progress_collection.update_one(
            {"user_id": user_id},
            {
                "$inc": {
                    "total_experience": collection_set.rewards.experience,
                    "total_coins": collection_set.rewards.coins
                }
            }
        )

        if result.modified_count:
            # Mark rewards as claimed
            target_set.rewards_claimed = True
            return target_set
        return None

    async def get_collectibles_by_rarity(self, rarity: str) -> List[Collectible]:
        collectibles = await self.collectibles_collection.find({"rarity": rarity}).to_list(length=None)
        return [Collectible(**collectible) for collectible in collectibles]

    async def get_collectibles_by_type(self, type: str) -> List[Collectible]:
        collectibles = await self.collectibles_collection.find({"type": type}).to_list(length=None)
        return [Collectible(**collectible) for collectible in collectibles]

    async def search_collectibles(
        self,
        query: str,
        filters: Optional[Dict] = None
    ) -> List[Collectible]:
        search_query = {"$text": {"$search": query}} if query else {}
        
        if filters:
            search_query.update(filters)

        collectibles = await self.collectibles_collection.find(search_query).to_list(length=None)
        return [Collectible(**collectible) for collectible in collectibles] 