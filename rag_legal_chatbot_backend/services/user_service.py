import json
from datetime import datetime
from typing import Optional, Dict, List
from ..models.user import User, UserCreate, UserUpdate, UserInDB
from ..database import get_db
import bcrypt

class UserService:
    def __init__(self):
        pass

    async def get_user(self, user_id: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
            user_data = cursor.fetchone()
            
            if not user_data:
                return None
                
            return User(
                id=str(user_data['id']),
                username=user_data['username'],
                email=user_data['email'],
                level=user_data['level'],
                experience=user_data['experience'],
                coins=user_data['coins'],
                streak=user_data['streak'],
                last_login=user_data['last_login'],
                unlocked_periods=[],
                completed_periods=[],
                achievements=[],
                collections=[],
                learning_progress={},
                settings={}
            )

    async def get_user_by_email(self, email: str) -> Optional[UserInDB]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
            user_data = cursor.fetchone()
            
            if not user_data:
                return None
                
            return UserInDB(
                id=str(user_data['id']),
                username=user_data['username'],
                email=user_data['email'],
                hashed_password=user_data['hashed_password'],
                level=user_data['level'],
                experience=user_data['experience'],
                coins=user_data['coins'],
                streak=user_data['streak'],
                last_login=user_data['last_login'],
                unlocked_periods=[],
                completed_periods=[],
                achievements=[],
                collections=[],
                learning_progress={},
                settings={}
            )

    async def create_user(self, user: UserCreate) -> User:
        hashed_password = bcrypt.hashpw(user.password.encode(), bcrypt.gensalt()).decode()
        
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO users (username, email, hashed_password, level, experience, coins, streak)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (
                user.username,
                user.email,
                hashed_password,
                user.level,
                user.experience,
                user.coins,
                user.streak
            ))
            conn.commit()
            
            user_id = cursor.lastrowid
            return await self.get_user(user_id)

    async def update_user(self, user_id: int, user_update: UserUpdate) -> Optional[User]:
        update_fields = []
        values = []
        
        for field, value in user_update.dict(exclude_unset=True).items():
            if value is not None:
                update_fields.append(f"{field} = ?")
                values.append(value)
        
        if not update_fields:
            return await self.get_user(user_id)
            
        values.append(user_id)
        
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute(f"""
                UPDATE users 
                SET {', '.join(update_fields)}
                WHERE id = ?
            """, values)
            conn.commit()
            
            return await self.get_user(user_id)

    async def update_user_progress(self, user_id: int, progress_data: Dict) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE user_progress 
                SET completed_events = ?, quiz_scores = ?, total_experience = ?, total_coins = ?
                WHERE user_id = ?
            """, (
                json.dumps(progress_data.get('completed_events', [])),
                json.dumps(progress_data.get('quiz_scores', {})),
                progress_data.get('total_experience', 0),
                progress_data.get('total_coins', 0),
                user_id
            ))
            conn.commit()
            
            return await self.get_user(user_id)

    async def update_user_achievements(self, user_id: int, achievement_id: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO user_achievements (user_id, achievement_id)
                VALUES (?, ?)
            """, (user_id, achievement_id))
            conn.commit()
            
            return await self.get_user(user_id)

    async def update_user_collections(self, user_id: int, collection_id: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO user_collectibles (user_id, collectible_id)
                VALUES (?, ?)
            """, (user_id, collection_id))
            conn.commit()
            
            return await self.get_user(user_id)

    async def update_user_level(self, user_id: int, experience: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE users 
                SET experience = experience + ?, level = level + 1
                WHERE id = ? AND experience >= ?
            """, (experience, user_id, 1000 * (experience - 1)))
            conn.commit()
            
            return await self.get_user(user_id)

    async def update_user_streak(self, user_id: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE users 
                SET streak = streak + 1, last_login = CURRENT_TIMESTAMP
                WHERE id = ? AND datetime(last_login) < datetime('now', '-1 day')
            """, (user_id,))
            conn.commit()
            
            return await self.get_user(user_id)

    async def add_experience(self, user_id: int, amount: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE users 
                SET experience = experience + ?
                WHERE id = ?
            """, (amount, user_id))
            conn.commit()
            
            return await self.get_user(user_id)

    async def add_coins(self, user_id: int, amount: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE users 
                SET coins = coins + ?
                WHERE id = ?
            """, (amount, user_id))
            conn.commit()
            
            return await self.get_user(user_id)

    async def unlock_period(self, user_id: int, period_id: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO user_progress (user_id, period_id)
                VALUES (?, ?)
            """, (user_id, period_id))
            conn.commit()
            
            return await self.get_user(user_id)

    async def complete_period(self, user_id: int, period_id: int) -> Optional[User]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE user_progress 
                SET completed = TRUE
                WHERE user_id = ? AND period_id = ?
            """, (user_id, period_id))
            conn.commit()
            
            return await self.get_user(user_id) 