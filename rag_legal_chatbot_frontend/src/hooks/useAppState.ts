import { useState, useEffect } from 'react';
import { HistoricalPeriod, User, Achievement, Collection, CollectionItem, AppState } from '../types/historicalData';

export interface User {
  id: string;
  name: string;
  level: number;
  experience: number;
  achievements: Achievement[];
  collections: Collection[];
  streak: number;
  rank: string;
  unlockedPeriods: string[];
  completedPeriods: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface Collection {
  id: string;
  title: string;
  items: CollectionItem[];
  progress: number;
}

export interface CollectionItem {
  id: string;
  name: string;
  description: string;
  image: string;
  obtainedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface AppState {
  user: User;
  isDarkMode: boolean;
  activeTab: string;
  selectedPeriod: HistoricalPeriod | null;
  showChatbot: boolean;
  showContent: boolean;
  currentContent: any | null;
  loading: boolean;
}

export const useAppState = () => {
  const [state, setState] = useState<AppState>({
    user: {
      id: '1',
      name: 'Sử gia tài ba',
      level: 1,
      experience: 0,
      achievements: [],
      collections: [],
      streak: 0,
      rank: 'Mới bắt đầu',
      unlockedPeriods: ['period-40-938'],
      completedPeriods: []
    },
    isDarkMode: false,
    activeTab: 'home',
    selectedPeriod: null,
    showChatbot: false,
    showContent: false,
    currentContent: null,
    loading: false
  });

  // Update user progress
  useEffect(() => {
    const totalPeriods = 6; // Tổng số thời kỳ lịch sử
    const completedPeriods = state.user.completedPeriods.length;
    const progress = (completedPeriods / totalPeriods) * 100;
    
    // Update user level based on progress
    const newLevel = Math.floor(progress / 20) + 1;
    if (newLevel !== state.user.level) {
      setState(prev => ({
        ...prev,
        user: {
          ...prev.user,
          level: newLevel,
          experience: progress
        }
      }));
    }
  }, [state.user.completedPeriods]);

  // Apply theme styles
  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.isDarkMode);
  }, [state.isDarkMode]);

  const setActiveTab = (tab: string) => {
    setState(prev => ({ ...prev, activeTab: tab }));
  };

  const toggleDarkMode = () => {
    setState(prev => ({ ...prev, isDarkMode: !prev.isDarkMode }));
  };

  const toggleChatbot = () => {
    setState(prev => ({ ...prev, showChatbot: !prev.showChatbot }));
  };

  const selectPeriod = (period: HistoricalPeriod) => {
    setState(prev => ({ ...prev, selectedPeriod: period }));
  };

  const showContent = (show: boolean) => {
    setState(prev => ({ ...prev, showContent: show }));
  };

  const setCurrentContent = (content: any) => {
    setState(prev => ({ ...prev, currentContent: content }));
  };

  const setLoading = (loading: boolean) => {
    setState(prev => ({ ...prev, loading }));
  };

  const updateUserProgress = (updates: Partial<User>) => {
    setState(prev => ({
      ...prev,
      user: { ...prev.user, ...updates }
    }));
  };

  return {
    state,
    setActiveTab,
    toggleDarkMode,
    toggleChatbot,
    selectPeriod,
    showContent,
    setCurrentContent,
    setLoading,
    updateUserProgress
  };
}; 