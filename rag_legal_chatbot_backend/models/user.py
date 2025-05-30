from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class UserBase(BaseModel):
    username: str
    email: str
    level: int = 1
    experience: int = 0
    coins: int = 0
    streak: int = 0
    last_login: datetime = Field(default_factory=datetime.utcnow)
    unlocked_periods: List[str] = []
    completed_periods: List[str] = []
    achievements: List[str] = []
    collections: List[str] = []
    learning_progress: dict = {}
    settings: dict = {}

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[str] = None
    level: Optional[int] = None
    experience: Optional[int] = None
    coins: Optional[int] = None
    streak: Optional[int] = None
    last_login: Optional[datetime] = None
    unlocked_periods: Optional[List[str]] = None
    completed_periods: Optional[List[str]] = None
    achievements: Optional[List[str]] = None
    collections: Optional[List[str]] = None
    learning_progress: Optional[dict] = None
    settings: Optional[dict] = None

class UserInDB(UserBase):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    hashed_password: str

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class User(UserBase):
    id: str = Field(alias="_id")

    class Config:
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str} 