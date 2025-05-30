import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppState } from './hooks/useAppState';
import LearningInterface from './LearningInterFace';
import Explore from './components/Explore';
import Collection from './components/Collection';
import Settings from './components/Settings';
import Chatbot from './components/Chatbot';
import { HistoricalPeriod } from './types/historicalData';
import { HistoricalDataService } from './services/historicalDataService';

const ExploreContainer: React.FC = () => {
  const { state, selectPeriod, showContent, setLoading } = useAppState();
  const historicalDataService = HistoricalDataService.getInstance();

  const handleStartLearning = async (period: HistoricalPeriod) => {
    setLoading(true);
    try {
      const periodWithContent = await historicalDataService.getPeriodWithEvents(period.id);
      
      if (periodWithContent) {
        selectPeriod(periodWithContent);
        showContent(true);
      } else {
        console.error('Failed to load period content for:', period.id);
        alert('Không thể tải nội dung bài học. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error starting learning session:', error);
      alert('Đã xảy ra lỗi khi bắt đầu bài học.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Explore 
      onStartLearning={handleStartLearning}
      unlockedPeriods={state.user.unlockedPeriods}
      completedPeriods={state.user.completedPeriods}
    />
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Main layout with navigation */}
      <Route path="/" element={<LearningInterface />}>
        {/* Nested routes */}
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<div>Home</div>} />
        <Route path="explore" element={<ExploreContainer />} />
        <Route path="collection" element={<Collection />} />
        <Route path="settings" element={<Settings />} />
        <Route path="chatbot" element={<Chatbot />} />
      </Route>
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes; 