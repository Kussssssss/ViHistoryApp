export interface UserProgress {
  level: number;
  experience: number;
  coins: number;
  unlockedPeriods: string[];
  completedPeriods: string[];
  completedEvents: string[];
  achievements: string[];
  lastActive: string;
  streak: number;
  totalPlayTime: number;
  currentStreak: number;
  lastLoginDate: string;
  inventory: {
    artifacts: string[];
    characters: string[];
    costumes: string[];
    backgrounds: string[];
  };
} 