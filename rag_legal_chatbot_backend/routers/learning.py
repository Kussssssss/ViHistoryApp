from fastapi import APIRouter, Depends, HTTPException
from typing import Optional
from pydantic import BaseModel
from services.learning_service import LearningService
from services.user_service import UserService
from auth.auth import get_current_user

router = APIRouter()
learning_service = LearningService()
user_service = UserService()

class ProgressUpdate(BaseModel):
    event_id: str
    period_id: str
    experience: int
    coins: int

@router.post("/progress")
async def update_progress(
    progress: ProgressUpdate,
    current_user = Depends(get_current_user)
):
    try:
        # Update user progress in the database
        progress_data = {
            'completed_events': [progress.event_id],
            'total_experience': progress.experience,
            'total_coins': progress.coins
        }
        
        updated_user = await user_service.update_user_progress(
            current_user.id,
            progress_data
        )
        
        if not updated_user:
            raise HTTPException(status_code=404, detail="User not found")
            
        return {
            "message": "Progress updated successfully",
            "user": updated_user
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 