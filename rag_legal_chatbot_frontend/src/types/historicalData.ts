export interface HistoricalEra {
  id: string;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  periods: HistoricalPeriod[];
  unlocked: boolean;
  completed: boolean;
  achievements?: Achievement[];
  rewards?: {
    experience: number;
    coins: number;
    items: string[];
    badges: string[];
  };
  progress?: {
    completedPeriods: number;
    totalPeriods: number;
    percentage: number;
  };
}

export interface HistoricalPeriod {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  events: HistoricalEvent[];
  difficulty: 'easy' | 'medium' | 'hard';
  unlocked: boolean;
  rewards: {
    experience: number;
    coins: number;
  };
  image?: string;
}

export interface HistoricalContent {
  id: string;
  title: string;
  description: string;
  type: 'event' | 'dynasty' | 'person' | 'battle';
  era: string;
  period: string;
  year?: number;
  keyPoints?: string[];
  relatedEvents?: string[];
  unlocked: boolean;
  completed: boolean;
  rewards?: {
    experience: number;
    coins: number;
    items: string[];
  };
  challenges?: Challenge[];
  progress?: {
    completedChallenges: number;
    totalChallenges: number;
    percentage: number;
  };
}

export interface Quiz {
  id: string;
  contentId: string;
  questions: QuizQuestion[];
  rewards: {
    experience: number;
    coins: number;
    items: string[];
    badges: string[];
  };
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit?: number;
  passingScore: number;
  attempts: number;
  bestScore?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly';
  requirements: {
    current: number;
    target: number;
  };
  completed: boolean;
  rewards: {
    experience: number;
    coins: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt: string;
}

export interface CSVRow {
  heading: string;
  context: string;
  type?: 'era' | 'period' | 'event' | 'dynasty' | 'person' | 'battle';
  year?: number;
  content?: string;
}

export interface HistoricalEvent {
  id: string;
  heading: string;
  context: string;
  question?: string;
  answer?: string;
  year?: number;
  period: string;
  type?: string;
} 