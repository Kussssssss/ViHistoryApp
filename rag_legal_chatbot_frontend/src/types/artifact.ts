export interface Artifact {
  id: string;
  name: string;
  description: string;
  type: 'document' | 'artifact' | 'monument' | 'artwork';
  period: string;
  location: string;
  imageUrl: string;
  model3dUrl?: string;
  audioGuide?: string;
  historicalSignificance: string;
  discovery: {
    date: string;
    location: string;
    discoverer?: string;
  };
  conservation: {
    status: 'excellent' | 'good' | 'fair' | 'poor';
    location: string;
    notes?: string;
  };
  relatedEvents: string[];
  relatedCharacters: string[];
  unlocked: boolean;
  collected: boolean;
  collectedAt?: string;
} 