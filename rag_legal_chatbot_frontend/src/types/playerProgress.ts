import { Quest } from './quest';
import { Achievement } from './achievement';
import { MapLocation } from './map';
import { Artifact } from './artifact';
import { Challenge } from './challenge';

export interface PlayerProgress {
  level: number;
  experience: number;
  coins: number;
  streak: number;
  lastActive: string;
  totalPlayTime: number;
  completedEvents: string[];
  unlockedPeriods: string[];
  completedPeriods: string[];
  collectedArtifacts: string[];
  visitedLocations: string[];
  achievements: string[];
  quests: {
    active: string[];
    completed: string[];
  };
  challenges: {
    completed: string[];
    bestScores: Record<string, number>;
  };
  inventory: {
    items: Record<string, number>;
    artifacts: string[];
  };
  settings: {
    sound: boolean;
    music: boolean;
    notifications: boolean;
    language: string;
    theme: 'light' | 'dark' | 'system';
  };
} 