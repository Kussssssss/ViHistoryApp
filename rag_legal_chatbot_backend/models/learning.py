from datetime import datetime
from typing import List, Optional, Dict
from pydantic import BaseModel, Field
from bson import ObjectId
from .user import PyObjectId

class QuizQuestion(BaseModel):
    question: str
    options: List[str]
    correct_answer: int
    explanation: Optional[str] = None

class Quiz(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str
    description: str
    questions: List[QuizQuestion]
    difficulty: str
    time_limit: Optional[int] = None
    passing_score: int

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class HistoricalEvent(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    heading: str
    year: str
    type: str
    context: str
    description: str
    characters: Optional[List[str]] = None
    locations: Optional[List[str]] = None
    image: Optional[str] = None
    audio_url: Optional[str] = None
    quiz: Optional[Quiz] = None
    rewards: Dict[str, int] = {
        "experience": 100,
        "coins": 50
    }

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class HistoricalPeriod(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str
    start_year: int
    end_year: int
    description: str
    difficulty: str
    events: List[HistoricalEvent] = []
    image: Optional[str] = None
    rewards: Dict[str, int] = {
        "experience": 500,
        "coins": 250
    }
    color: str
    unlocked: bool = False
    completed: bool = False

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class LearningProgress(BaseModel):
    user_id: PyObjectId
    period_id: PyObjectId
    completed_events: List[str] = []
    quiz_scores: Dict[str, int] = {}
    total_experience: int = 0
    total_coins: int = 0
    last_accessed: datetime = Field(default_factory=datetime.utcnow)
    completed: bool = False

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class Achievement(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str
    description: str
    type: str
    rarity: str
    requirements: Dict[str, int]
    rewards: Dict[str, int]
    icon: Optional[str] = None

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class UserAchievement(BaseModel):
    user_id: PyObjectId
    achievement_id: PyObjectId
    unlocked_at: datetime = Field(default_factory=datetime.utcnow)
    progress: Dict[str, int] = {}

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str} 