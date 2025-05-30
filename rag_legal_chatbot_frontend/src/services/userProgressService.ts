import { PlayerProgress, Challenge, Achievement } from '../types/historicalData';
import { api } from '../api';

interface UserStats {
  totalExperience: number;
  totalCoins: number;
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: string;
  completedEvents: string[];
  completedPeriods: string[];
  unlockedPeriods: string[];
  dailyChallenges: Challenge[];
  weeklyChallenges: Challenge[];
  achievements: Achievement[];
  level: number;
  experienceToNextLevel: number;
}

const STORAGE_KEY = 'user_progress_data';
const EXPERIENCE_PER_LEVEL = 1000;

export class UserProgressService {
  private static instance: UserProgressService;
  private userStats: UserStats;
  private listeners: ((stats: UserStats) => void)[] = [];

  private constructor() {
    this.userStats = this.loadFromStorage();
  }

  static getInstance(): UserProgressService {
    if (!UserProgressService.instance) {
      UserProgressService.instance = new UserProgressService();
    }
    return UserProgressService.instance;
  }

  private loadFromStorage(): UserStats {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }

    // Default values for new users
    return {
      totalExperience: 0,
      totalCoins: 0,
      currentStreak: 0,
      longestStreak: 0,
      lastLoginDate: new Date().toISOString().split('T')[0],
      completedEvents: [],
      completedPeriods: [],
      unlockedPeriods: ['period_1'], // First period is unlocked by default
      dailyChallenges: [
        {
          id: 'daily_1',
          title: 'Hoàn thành 3 bài học',
          description: 'Hoàn thành 3 bài học trong ngày hôm nay',
          type: 'daily',
          requirements: {
            current: 0,
            target: 3
          },
          rewards: {
            experience: 100,
            coins: 50
          },
          completed: false
        },
        {
          id: 'daily_2',
          title: 'Đạt điểm cao',
          description: 'Đạt điểm cao trong một bài kiểm tra',
          type: 'daily',
          requirements: {
            current: 0,
            target: 1
          },
          rewards: {
            experience: 150,
            coins: 75
          },
          completed: false
        }
      ],
      weeklyChallenges: [
        {
          id: 'weekly_1',
          title: 'Hoàn thành 10 bài học',
          description: 'Hoàn thành 10 bài học trong tuần này',
          type: 'weekly',
          requirements: {
            current: 0,
            target: 10
          },
          rewards: {
            experience: 500,
            coins: 250
          },
          completed: false
        },
        {
          id: 'weekly_2',
          title: 'Khám phá thời kỳ mới',
          description: 'Mở khóa một thời kỳ lịch sử mới',
          type: 'weekly',
          requirements: {
            current: 0,
            target: 1
          },
          rewards: {
            experience: 300,
            coins: 150
          },
          completed: false
        }
      ],
      achievements: [],
      level: 1,
      experienceToNextLevel: EXPERIENCE_PER_LEVEL
    };
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.userStats));
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.userStats));
  }

  // Subscribe to progress updates
  subscribe(listener: (stats: UserStats) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  // Update progress after completing an event
  async updateProgressAfterEvent(eventId: string, periodId: string, experience: number, coins: number): Promise<void> {
    try {
      // Update backend first
      await api.post('/api/learning/progress', {
        event_id: eventId,
        period_id: periodId,
        experience,
        coins
      });

      // Update local state
    this.userStats.totalExperience += experience;
    this.userStats.totalCoins += coins;

    // Update completed events
    if (!this.userStats.completedEvents.includes(eventId)) {
      this.userStats.completedEvents.push(eventId);
    }

    // Update streak
    const today = new Date().toISOString().split('T')[0];
    if (this.userStats.lastLoginDate !== today) {
      this.userStats.currentStreak += 1;
      this.userStats.lastLoginDate = today;
      if (this.userStats.currentStreak > this.userStats.longestStreak) {
        this.userStats.longestStreak = this.userStats.currentStreak;
      }
    }

    // Update level
    while (this.userStats.totalExperience >= this.userStats.experienceToNextLevel) {
      this.userStats.level += 1;
      this.userStats.experienceToNextLevel = this.userStats.level * EXPERIENCE_PER_LEVEL;
    }

    // Update period completion
    if (!this.userStats.completedPeriods.includes(periodId)) {
      this.userStats.completedPeriods.push(periodId);
      // Unlock next period if available
      const nextPeriodId = `period_${parseInt(periodId.split('_')[1]) + 1}`;
      if (!this.userStats.unlockedPeriods.includes(nextPeriodId)) {
        this.userStats.unlockedPeriods.push(nextPeriodId);
      }
    }

    // Update challenges
    this.updateChallenges();

    // Save and notify
    this.saveToStorage();
    this.notifyListeners();
    } catch (error) {
      console.error('Failed to update progress:', error);
      throw error;
    }
  }

  private updateChallenges(): void {
    // Update daily challenges
    this.userStats.dailyChallenges = this.userStats.dailyChallenges.map(challenge => {
      if (challenge.type === 'daily' && !challenge.completed) {
        const newChallenge = { ...challenge };
        newChallenge.requirements.current += 1;
        if (newChallenge.requirements.current >= newChallenge.requirements.target) {
          newChallenge.completed = true;
          // Add challenge rewards
          this.userStats.totalExperience += challenge.rewards.experience;
          this.userStats.totalCoins += challenge.rewards.coins;
        }
        return newChallenge;
      }
      return challenge;
    });

    // Update weekly challenges
    this.userStats.weeklyChallenges = this.userStats.weeklyChallenges.map(challenge => {
      if (challenge.type === 'weekly' && !challenge.completed) {
        const newChallenge = { ...challenge };
        newChallenge.requirements.current += 1;
        if (newChallenge.requirements.current >= newChallenge.requirements.target) {
          newChallenge.completed = true;
          // Add challenge rewards
          this.userStats.totalExperience += challenge.rewards.experience;
          this.userStats.totalCoins += challenge.rewards.coins;
        }
        return newChallenge;
      }
      return challenge;
    });
  }

  // Get current user stats
  getUserStats(): UserStats {
    return { ...this.userStats };
  }

  // Reset progress (for testing)
  resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.userStats = this.loadFromStorage();
    this.saveToStorage();
    this.notifyListeners();
  }
} 