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

// Challenge interface as used in HistoricalDataService
export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly'; // Limited to these based on usage
  requirements: {
    action?: string; // Added for explicitness based on example data
    target: number;
    current: number;
  };
  rewards: {
    experience: number;
    coins: number;
    items?: string[];   // Added for explicitness
    badges?: string[];  // Added for explicitness
  };
  completed: boolean;
}

// Achievement interface as used in HistoricalDataService
export interface Achievement {
  id: string;
  title: string;
  description: string;
  type?: 'progress' | 'collection'; // Added for explicitness
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  requirements?: { // Added for explicitness
    action: string;
    target: number;
    current: number;
  };
  rewards?: { // Added for explicitness
    experience: number;
    coins: number;
    items: string[];
    badges: string[];
  };
  unlocked: boolean;
  unlockedAt: string; 
}


export interface CSVRow {
  heading: string;
  context: string;
  type?: 'era' | 'period' | 'event' | 'dynasty' | 'person' | 'battle';
  year?: number;
  content?: string;
  // Added from HistoricalEvent interface for CSV parsing
  id?: string; 
  question?: string;
  answer?: string;
  period?: string; // period name from CSV
  description?: string; // description from CSV
  index?: number; // 'index' column used as year in CSV parsing logic
}

export interface HistoricalEvent {
  id: string;
  heading: string;
  context: string;
  question?: string;
  answer?: string;
  year?: number;
  period: string; // Name of the period this event belongs to
  type?: string; // E.g. 'event', 'battle', 'person' if available from data
  description?: string; // Added from service logic
} 