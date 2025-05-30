export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'exploration' | 'collection' | 'mastery' | 'social';
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
  unlocked: boolean;
  unlockedAt?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
} 