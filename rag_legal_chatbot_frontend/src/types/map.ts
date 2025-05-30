export interface MapLocation {
  id: string;
  name: string;
  description: string;
  coordinates: {
    x: number;
    y: number;
  };
  type: 'historical' | 'cultural' | 'natural' | 'modern';
  period: string;
  events: string[];
  characters: string[];
  artifacts: string[];
  unlocked: boolean;
  visited: boolean;
  imageUrl?: string;
  audioGuide?: string;
  quiz?: {
    questions: Array<{
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
} 