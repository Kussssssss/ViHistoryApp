import sqlite3
from contextlib import contextmanager
from typing import Generator
import os

DATABASE_URL = "sqlite:///./legal_chatbot.db"

def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect('legal_chatbot.db')
    conn.row_factory = sqlite3.Row
    return conn

@contextmanager
def get_db() -> Generator[sqlite3.Connection, None, None]:
    conn = get_db_connection()
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    """Initialize the database with required tables"""
    with get_db() as conn:
        cursor = conn.cursor()

        # Users table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            hashed_password TEXT NOT NULL,
            level INTEGER DEFAULT 1,
            experience INTEGER DEFAULT 0,
            coins INTEGER DEFAULT 0,
            streak INTEGER DEFAULT 0,
            last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')

        # User progress table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            period_id INTEGER NOT NULL,
            completed_events TEXT DEFAULT '[]',
            quiz_scores TEXT DEFAULT '{}',
            total_experience INTEGER DEFAULT 0,
            total_coins INTEGER DEFAULT 0,
            last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            completed BOOLEAN DEFAULT FALSE,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
        ''')

        # Historical periods table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS historical_periods (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            start_year INTEGER NOT NULL,
            end_year INTEGER NOT NULL,
            description TEXT NOT NULL,
            difficulty TEXT NOT NULL,
            image TEXT,
            rewards TEXT DEFAULT '{"experience": 500, "coins": 250}',
            color TEXT NOT NULL,
            unlocked BOOLEAN DEFAULT FALSE,
            completed BOOLEAN DEFAULT FALSE
        )
        ''')

        # Historical events table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS historical_events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            period_id INTEGER NOT NULL,
            heading TEXT NOT NULL,
            year TEXT NOT NULL,
            type TEXT NOT NULL,
            context TEXT NOT NULL,
            description TEXT NOT NULL,
            characters TEXT DEFAULT '[]',
            locations TEXT DEFAULT '[]',
            image TEXT,
            audio_url TEXT,
            rewards TEXT DEFAULT '{"experience": 100, "coins": 50}',
            FOREIGN KEY (period_id) REFERENCES historical_periods (id)
        )
        ''')

        # Quizzes table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS quizzes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            event_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            questions TEXT NOT NULL,
            difficulty TEXT NOT NULL,
            time_limit INTEGER,
            passing_score INTEGER NOT NULL,
            FOREIGN KEY (event_id) REFERENCES historical_events (id)
        )
        ''')

        # Collectibles table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS collectibles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            image_url TEXT NOT NULL,
            period_id INTEGER NOT NULL,
            event_id INTEGER,
            rarity TEXT NOT NULL,
            description TEXT NOT NULL,
            unlocked BOOLEAN DEFAULT FALSE,
            unlocked_at TIMESTAMP,
            rewards TEXT DEFAULT '{"experience": 50, "coins": 25}',
            FOREIGN KEY (period_id) REFERENCES historical_periods (id),
            FOREIGN KEY (event_id) REFERENCES historical_events (id)
        )
        ''')

        # User collectibles table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_collectibles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            collectible_id INTEGER NOT NULL,
            unlocked BOOLEAN DEFAULT FALSE,
            unlocked_at TIMESTAMP,
            progress TEXT DEFAULT '{}',
            FOREIGN KEY (user_id) REFERENCES users (id),
            FOREIGN KEY (collectible_id) REFERENCES collectibles (id)
        )
        ''')

        # Achievements table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS achievements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            type TEXT NOT NULL,
            rarity TEXT NOT NULL,
            requirements TEXT NOT NULL,
            rewards TEXT NOT NULL,
            icon TEXT
        )
        ''')

        # User achievements table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_achievements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            achievement_id INTEGER NOT NULL,
            unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            progress TEXT DEFAULT '{}',
            FOREIGN KEY (user_id) REFERENCES users (id),
            FOREIGN KEY (achievement_id) REFERENCES achievements (id)
        )
        ''')

        # Collection sets table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS collection_sets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            collectibles TEXT NOT NULL,
            rewards TEXT DEFAULT '{"experience": 200, "coins": 100}',
            completion_bonus TEXT DEFAULT '{"experience": 500, "coins": 250}'
        )
        ''')

        # User collection sets table
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_collection_sets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            set_id INTEGER NOT NULL,
            unlocked_collectibles TEXT DEFAULT '[]',
            completed BOOLEAN DEFAULT FALSE,
            completed_at TIMESTAMP,
            rewards_claimed BOOLEAN DEFAULT FALSE,
            FOREIGN KEY (user_id) REFERENCES users (id),
            FOREIGN KEY (set_id) REFERENCES collection_sets (id)
        )
        ''')

        conn.commit()

def get_db_path():
    """Get the database file path"""
    return os.path.abspath('legal_chatbot.db') 