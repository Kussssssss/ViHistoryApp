export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'puzzle' | 'timeline' | 'matching' | 'exploration';
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  period: string;
  requirements: {
    level: number;
    completedEvents?: string[];
    unlockedLocations?: string[];
  };
  content: {
    questions?: Array<{
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }>;
    puzzle?: {
      type: string;
      data: any;
      solution: any;
    };
    timeline?: Array<{
      event: string;
      date: string;
      description: string;
    }>;
    matching?: Array<{
      item1: string;
      item2: string;
    }>;
  };
  rewards: {
    experience: number;
    coins: number;
    items?: string[];
  };
  timeLimit?: number;
  attempts: number;
  completed: boolean;
  completedAt?: string;
  bestScore?: number;
} 