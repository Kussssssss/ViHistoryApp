import json
from datetime import datetime
from typing import Optional, List, Dict
from ..models.learning import (
    HistoricalPeriod,
    HistoricalEvent,
    Quiz,
    LearningProgress,
    Achievement,
    UserAchievement
)
from ..database import get_db

class LearningService:
    def __init__(self):
        pass

    async def get_period(self, period_id: int) -> Optional[HistoricalPeriod]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM historical_periods WHERE id = ?", (period_id,))
            period_data = cursor.fetchone()
            
            if not period_data:
                return None
                
            return HistoricalPeriod(
                id=str(period_data['id']),
                name=period_data['name'],
                start_year=period_data['start_year'],
                end_year=period_data['end_year'],
                description=period_data['description'],
                difficulty=period_data['difficulty'],
                events=[],
                image=period_data['image'],
                rewards=json.loads(period_data['rewards']),
                color=period_data['color'],
                unlocked=period_data['unlocked'],
                completed=period_data['completed']
            )

    async def get_all_periods(self) -> List[HistoricalPeriod]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM historical_periods")
            periods_data = cursor.fetchall()
            
            return [
                HistoricalPeriod(
                    id=str(period['id']),
                    name=period['name'],
                    start_year=period['start_year'],
                    end_year=period['end_year'],
                    description=period['description'],
                    difficulty=period['difficulty'],
                    events=[],
                    image=period['image'],
                    rewards=json.loads(period['rewards']),
                    color=period['color'],
                    unlocked=period['unlocked'],
                    completed=period['completed']
                )
                for period in periods_data
            ]

    async def get_event(self, event_id: int) -> Optional[HistoricalEvent]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM historical_events WHERE id = ?", (event_id,))
            event_data = cursor.fetchone()
            
            if not event_data:
                return None
                
            return HistoricalEvent(
                id=str(event_data['id']),
                heading=event_data['heading'],
                year=event_data['year'],
                type=event_data['type'],
                context=event_data['context'],
                description=event_data['description'],
                characters=json.loads(event_data['characters']),
                locations=json.loads(event_data['locations']),
                image=event_data['image'],
                audio_url=event_data['audio_url'],
                quiz=None,
                rewards=json.loads(event_data['rewards'])
            )

    async def get_events_by_period(self, period_id: int) -> List[HistoricalEvent]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM historical_events WHERE period_id = ?", (period_id,))
            events_data = cursor.fetchall()
            
            return [
                HistoricalEvent(
                    id=str(event['id']),
                    heading=event['heading'],
                    year=event['year'],
                    type=event['type'],
                    context=event['context'],
                    description=event['description'],
                    characters=json.loads(event['characters']),
                    locations=json.loads(event['locations']),
                    image=event['image'],
                    audio_url=event['audio_url'],
                    quiz=None,
                    rewards=json.loads(event['rewards'])
                )
                for event in events_data
            ]

    async def get_quiz(self, quiz_id: int) -> Optional[Quiz]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM quizzes WHERE id = ?", (quiz_id,))
            quiz_data = cursor.fetchone()
            
            if not quiz_data:
                return None
                
            return Quiz(
                id=str(quiz_data['id']),
                title=quiz_data['title'],
                description=quiz_data['description'],
                questions=json.loads(quiz_data['questions']),
                difficulty=quiz_data['difficulty'],
                time_limit=quiz_data['time_limit'],
                passing_score=quiz_data['passing_score']
            )

    async def get_quiz_by_event(self, event_id: int) -> Optional[Quiz]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM quizzes WHERE event_id = ?", (event_id,))
            quiz_data = cursor.fetchone()
            
            if not quiz_data:
                return None
                
            return Quiz(
                id=str(quiz_data['id']),
                title=quiz_data['title'],
                description=quiz_data['description'],
                questions=json.loads(quiz_data['questions']),
                difficulty=quiz_data['difficulty'],
                time_limit=quiz_data['time_limit'],
                passing_score=quiz_data['passing_score']
            )

    async def get_achievement(self, achievement_id: int) -> Optional[Achievement]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM achievements WHERE id = ?", (achievement_id,))
            achievement_data = cursor.fetchone()
            
            if not achievement_data:
                return None
                
            return Achievement(
                id=str(achievement_data['id']),
                title=achievement_data['title'],
                description=achievement_data['description'],
                type=achievement_data['type'],
                rarity=achievement_data['rarity'],
                requirements=json.loads(achievement_data['requirements']),
                rewards=json.loads(achievement_data['rewards']),
                icon=achievement_data['icon']
            )

    async def get_user_progress(self, user_id: int) -> Optional[LearningProgress]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM user_progress WHERE user_id = ?", (user_id,))
            progress_data = cursor.fetchone()
            
            if not progress_data:
                return None
                
            return LearningProgress(
                user_id=str(progress_data['user_id']),
                period_id=str(progress_data['period_id']),
                completed_events=json.loads(progress_data['completed_events']),
                quiz_scores=json.loads(progress_data['quiz_scores']),
                total_experience=progress_data['total_experience'],
                total_coins=progress_data['total_coins'],
                last_accessed=progress_data['last_accessed'],
                completed=progress_data['completed']
            )

    async def create_user_progress(self, user_id: int) -> LearningProgress:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO user_progress (user_id, period_id)
                VALUES (?, ?)
            """, (user_id, 1))  # Start with period 1
            conn.commit()
            
            return await self.get_user_progress(user_id)

    async def update_user_progress(
        self,
        user_id: int,
        event_id: int,
        quiz_score: Optional[int] = None
    ) -> Optional[LearningProgress]:
        with get_db() as conn:
            cursor = conn.cursor()
            
            # Get current progress
            progress = await self.get_user_progress(user_id)
            if not progress:
                progress = await self.create_user_progress(user_id)
            
            # Update completed events
            completed_events = progress.completed_events
            if str(event_id) not in completed_events:
                completed_events.append(str(event_id))
            
            # Update quiz scores
            quiz_scores = progress.quiz_scores
            if quiz_score is not None:
                quiz_scores[str(event_id)] = quiz_score
            
            # Update database
            cursor.execute("""
                UPDATE user_progress 
                SET completed_events = ?, quiz_scores = ?
                WHERE user_id = ?
            """, (
                json.dumps(completed_events),
                json.dumps(quiz_scores),
                user_id
            ))
            conn.commit()
            
            return await self.get_user_progress(user_id)

    async def add_experience_to_progress(self, user_id: int, amount: int) -> Optional[LearningProgress]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                UPDATE user_progress 
                SET total_experience = total_experience + ?
                WHERE user_id = ?
            """, (amount, user_id))
            conn.commit()
            
            return await self.get_user_progress(user_id)

    async def check_achievement_progress(
        self,
        user_id: int,
        achievement_id: int,
        progress: int
    ) -> Optional[UserAchievement]:
        with get_db() as conn:
            cursor = conn.cursor()
            
            # Get achievement requirements
            achievement = await self.get_achievement(achievement_id)
            if not achievement:
                return None
            
            # Check if user already has this achievement
            cursor.execute("""
                SELECT * FROM user_achievements 
                WHERE user_id = ? AND achievement_id = ?
            """, (user_id, achievement_id))
            existing = cursor.fetchone()
            
            if existing:
                # Update progress
                current_progress = json.loads(existing['progress'])
                current_progress['current'] = progress
                
                cursor.execute("""
                    UPDATE user_achievements 
                    SET progress = ?
                    WHERE user_id = ? AND achievement_id = ?
                """, (
                    json.dumps(current_progress),
                    user_id,
                    achievement_id
                ))
                conn.commit()
                
                return UserAchievement(
                    user_id=str(existing['user_id']),
                    achievement_id=str(existing['achievement_id']),
                    unlocked_at=existing['unlocked_at'],
                    progress=current_progress
                )
            
            # Create new achievement progress
            cursor.execute("""
                INSERT INTO user_achievements (user_id, achievement_id, progress)
                VALUES (?, ?, ?)
            """, (
                user_id,
                achievement_id,
                json.dumps({'current': progress})
            ))
            conn.commit()
            
            return UserAchievement(
                user_id=str(user_id),
                achievement_id=str(achievement_id),
                unlocked_at=datetime.utcnow(),
                progress={'current': progress}
            )

    async def get_user_achievements(self, user_id: int) -> List[UserAchievement]:
        with get_db() as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT * FROM user_achievements 
                WHERE user_id = ?
            """, (user_id,))
            achievements_data = cursor.fetchall()
            
            return [
                UserAchievement(
                    user_id=str(achievement['user_id']),
                    achievement_id=str(achievement['achievement_id']),
                    unlocked_at=achievement['unlocked_at'],
                    progress=json.loads(achievement['progress'])
                )
                for achievement in achievements_data
            ]

    async def calculate_quiz_score(
        self,
        quiz_id: int,
        answers: Dict[str, str]
    ) -> Optional[int]:
        quiz = await self.get_quiz(quiz_id)
        if not quiz:
            return None
        
        correct_answers = 0
        total_questions = len(quiz.questions)
        
        for question in quiz.questions:
            if str(question['correct_answer']) == answers.get(str(question['id'])):
                correct_answers += 1
        
        return int((correct_answers / total_questions) * 100)

    async def get_period_completion_status(
        self,
        user_id: int,
        period_id: int
    ) -> Dict[str, bool]:
        with get_db() as conn:
            cursor = conn.cursor()
            
            # Get all events in period
            cursor.execute("""
                SELECT id FROM historical_events 
                WHERE period_id = ?
            """, (period_id,))
            period_events = [str(event['id']) for event in cursor.fetchall()]
            
            # Get user's completed events
            cursor.execute("""
                SELECT completed_events FROM user_progress 
                WHERE user_id = ? AND period_id = ?
            """, (user_id, period_id))
            progress_data = cursor.fetchone()
            
            if not progress_data:
                return {'completed': False}
            
            completed_events = json.loads(progress_data['completed_events'])
            
            # Check if all events are completed
            all_events_completed = all(
                event_id in completed_events
                for event_id in period_events
            )
            
            return {'completed': all_events_completed} 