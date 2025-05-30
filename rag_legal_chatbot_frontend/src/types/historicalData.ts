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
  description: string;
  startYear: number;
  endYear: number;
  image: string;
  unlocked: boolean;
  completed: boolean;
  audio?: string;
  video?: string;
  quiz?: Quiz[];
  difficulty: 'easy' | 'medium' | 'hard';
  rewards: {
    experience: number;
    coins: number;
  };
  dataFile: string;
  events?: HistoricalEvent[];
  characters?: HistoricalCharacter[];
  color: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: string;
  difficulty: string;
  requirements: {
    current: number;
    target: number;
  };
  rewards: {
    experience: number;
    coins: number;
  };
  completed: boolean;
  content: {
    type: string;
    readingContent: {
      title: string;
      content: string;
      image?: string;
      audioUrl?: string;
      hiddenImage?: string;
    };
    questions: Array<{
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  image: string;
  period: string;
  type: 'weapon' | 'document' | 'artifact' | 'clothing' | 'other';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  unlockedAt?: string;
}

export interface HistoricalCharacter {
  id: string;
  name: string;
  title: string;
  description: string;
  period: string;
  image?: string;
  audio?: string;
  video?: string;
  role: string;
  unlocked: boolean;
}

export interface MapLocation {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
  type: 'battlefield' | 'palace' | 'temple' | 'city' | 'other';
  image?: string;
  unlocked: boolean;
  events: string[];
}

export interface BattleEvent {
  id: string;
  name: string;
  description: string;
  year: number;
  location: string;
  participants: string[];
  outcome: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  year: number;
  period: string;
}

export interface MatchingItem {
  id: string;
  name: string;
  image?: string;
  description: string;
  category: string;
}

export interface HistoricalEvent {
  id: string;
  heading: string;
  context: string;
  type?: 'era' | 'period' | 'event' | 'dynasty' | 'person' | 'battle';
  name: string;
  description: string;
  year: number;
  period: string;
  image?: string;
  audioUrl?: string;
  video?: string;
  quiz?: Quiz[];
  difficulty: 'easy' | 'medium' | 'hard';
  rewards: {
    experience: number;
    coins: number;
  };
  unlocked: boolean;
  completed: boolean;
  characters?: string[];
  locations?: string[];
}

export interface HistoricalContent {
  id: string;
  title: string;
  description: string;
  periodId: string;
  type: 'event' | 'article' | 'video';
  difficulty: 'easy' | 'medium' | 'hard';
  rewards: {
    experience: number;
    coins: number;
  };
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
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
  rewards: {
    experience: number;
    coins: number;
  };
  completed: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  requirements: {
    current: number;
    target: number;
  };
  rewards: {
    experience: number;
    coins: number;
  };
  unlocked: boolean;
  unlockedAt: string;
}

export interface PlayerProgress {
  level: number;
  experience: number;
  coins: number;
  unlockedPeriods: string[];
  completedPeriods: string[];
  completedEvents: string[];
  currentStreak: number;
  lastLoginDate: string;
  inventory: {
    artifacts: string[];
    characters: string[];
    costumes: string[];
    backgrounds: string[];
  };
}

export interface CSVRow {
  heading: string;
  context: string;
  type?: 'era' | 'period' | 'event' | 'dynasty' | 'person' | 'battle';
  year?: number;
  content?: string;
} 