from datetime import datetime
from typing import List, Optional, Dict
from pydantic import BaseModel, Field
from bson import ObjectId
from .user import PyObjectId

class Collectible(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    type: str  # 'event', 'character', 'location', 'artifact'
    image_url: str
    period: str
    event_id: Optional[str] = None
    rarity: str  # 'common', 'rare', 'legendary', 'event'
    description: str
    unlocked: bool = False
    unlocked_at: Optional[datetime] = None
    rewards: Dict[str, int] = {
        "experience": 50,
        "coins": 25
    }

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class CollectionProgress(BaseModel):
    user_id: PyObjectId
    collectible_id: PyObjectId
    unlocked: bool = False
    unlocked_at: Optional[datetime] = None
    progress: Dict[str, int] = {}
    total_experience: int = 0
    total_coins: int = 0

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class CollectionStats(BaseModel):
    total: int = 0
    unlocked: int = 0
    locked: int = 0
    completion_percentage: float = 0.0
    by_rarity: Dict[str, int] = {
        "common": 0,
        "rare": 0,
        "legendary": 0,
        "event": 0
    }
    total_experience: int = 0
    total_coins: int = 0

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class CollectionSet(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    description: str
    collectibles: List[PyObjectId]
    rewards: Dict[str, int] = {
        "experience": 200,
        "coins": 100
    }
    completion_bonus: Dict[str, int] = {
        "experience": 500,
        "coins": 250
    }

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class UserCollectionSet(BaseModel):
    user_id: PyObjectId
    set_id: PyObjectId
    unlocked_collectibles: List[PyObjectId] = []
    completed: bool = False
    completed_at: Optional[datetime] = None
    rewards_claimed: bool = False

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str} 