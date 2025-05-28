import React, { createContext, useContext, useState } from 'react';

interface AppState {
  unlockedPeriods: string[];
  completedPeriods: string[];
}

interface AppStateContextType {
  unlockedPeriods: string[];
  completedPeriods: string[];
  setUnlockedPeriods: (periods: string[]) => void;
  setCompletedPeriods: (periods: string[]) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [unlockedPeriods, setUnlockedPeriods] = useState<string[]>([]);
  const [completedPeriods, setCompletedPeriods] = useState<string[]>([]);

  return (
    <AppStateContext.Provider value={{
      unlockedPeriods,
      completedPeriods,
      setUnlockedPeriods,
      setCompletedPeriods
    }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}; 