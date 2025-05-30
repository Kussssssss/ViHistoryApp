export interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'achievement';
  requirements: {
    type: string;
    target: number;
    current: number;
  }[];
  rewards: {
    experience: number;
    coins: number;
    items?: string[];
  };
  deadline?: string;
  completed: boolean;
  progress: number;
} 