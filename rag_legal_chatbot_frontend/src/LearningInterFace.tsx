import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiTrendingUp, 
  FiBook, 
  FiClock,
  FiCheck,
  FiAward,
  FiChevronRight
} from 'react-icons/fi';
import { historicalPeriods } from './data/historicalPeriods';
import collectionsDataSource from './data/collectionsState.json';
import { useAppState } from './hooks/useAppState';
import MainLayout from './components/MainLayout';
import Explore from './components/Explore';
import Collection from './components/Collection';
import Settings from './components/Settings';
import Chatbot from './components/Chatbot';
import { HistoricalDataService } from './services/historicalDataService';
import { HistoricalPeriod } from './types/historicalData';
import { ProgressService } from './services/progressService';
import { UserProgressService } from './services/userProgressService';

interface CollectionItem {
  id: string;
  unlocked: boolean;
}

const LearningInterface: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state,
    selectPeriod,
    showContent,
    setCurrentContent,
    setLoading,
    updateUserProgress,
    setActiveTab
  } = useAppState();

  // Subscribe to UserProgressService updates
  const userProgressService = UserProgressService.getInstance();
  const progressService = ProgressService.getInstance();
  const [userStats, setUserStats] = useState(userProgressService.getUserStats());

  // Calculate level info based on userStats
  const levelInfo = progressService.calculateProgressToNextLevel(userStats.totalExperience);
  const levelTitle = progressService.getLevelTitle(levelInfo.currentLevel);
  const levelColor = progressService.getLevelColor(levelInfo.currentLevel);

  // Calculate total achievements from collections
  const totalAchievements = Object.values(collectionsDataSource).reduce((total, category) => {
    return total + category.filter((item: CollectionItem) => item.unlocked).length;
  }, 0);

  useEffect(() => {
    const unsubscribe = userProgressService.subscribe((stats) => {
      setUserStats(stats);
    });
    return () => unsubscribe();
  }, [userProgressService]);

  // Handle tab navigation
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'home':
        navigate('/home');
        break;
      case 'explore':
        navigate('/explore');
        break;
      case 'collection':
        navigate('/collection');
        break;
      case 'settings':
        navigate('/settings');
        break;
      case 'chatbot':
        navigate('/chatbot');
        break;
      default:
        navigate('/home');
    }
  };

  // Update active tab based on current location
  useEffect(() => {
    const path = location.pathname;
    const newTab = path === '/home' ? 'home' :
                  path === '/explore' ? 'explore' :
                  path === '/collection' ? 'collection' :
                  path === '/settings' ? 'settings' :
                  path === '/chatbot' ? 'chatbot' : 'home';
    
    if (state.activeTab !== newTab) {
      setActiveTab(newTab);
    }
  }, [location.pathname, state.activeTab, setActiveTab]);

  // Handle start learning
  const handleStartLearning = async (period: HistoricalPeriod) => {
    if (!period.unlocked) {
      return;
    }

    setLoading(true);
    try {
      // Load period content
      const historicalDataService = HistoricalDataService.getInstance();
      const periodWithContent = await historicalDataService.getPeriodWithEvents(period.id);
      
      if (periodWithContent) {
        // Update state
        selectPeriod(periodWithContent);
        showContent(true);
        
        // Set current content
        const newContent = {
          id: period.id,
          title: period.name,
          content: period.description,
          points: period.rewards.experience,
          completed: false,
          quiz: period.quiz,
          events: periodWithContent.events || []
        };
        setCurrentContent(newContent);

        // Update user progress (this call seems redundant here if updateProgressAfterEvent in Explore handles it)
        // Consider removing this or clarifying its purpose if Explore also updates progress.
        // For now, commenting out to avoid potential double-updates or confusion.
        // updateUserProgress({
        //   type: 'START_LEARNING',
        //   payload: {
        //     periodId: period.id,
        //     timestamp: new Date().toISOString()
        //   }
        // });

        // Navigate to learning view
        navigate('/learning');
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

  // Render content based on active tab
  const renderContent = () => {
    switch (state.activeTab) {
      case 'explore':
        return (
          <Explore
            onStartLearning={handleStartLearning}
            unlockedPeriods={state.user.unlockedPeriods}
            completedPeriods={state.user.completedPeriods}
          />
        );
      case 'collection':
        return <Collection />;
      case 'settings':
        return <Settings />;
      case 'chatbot':
        return <Chatbot />;
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section with Enhanced Design */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12"
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-2xl"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4"
                  >
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                      <FiBook className="w-4 h-4 mr-2" />
                      Học lịch sử qua trải nghiệm
                    </span>
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Khám phá lịch sử Việt Nam
                  </h1>
                  <p className="text-lg text-blue-100 mb-8">
                    Hành trình khám phá lịch sử đầy thú vị đang chờ đón bạn
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                    onClick={() => handleTabChange('explore')}
                  >
                    <span>Bắt đầu ngay</span>
                    <FiChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>

            {/* Personal Stats Section with Enhanced Design */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Thông tin cá nhân
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Theo dõi tiến độ học tập của bạn
                  </p>
                </div>
              </div>

              {/* Level Progress with Enhanced Design */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${levelColor} rounded-lg flex items-center justify-center`}>
                      <FiTrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Cấp độ hiện tại</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {levelInfo.currentLevel}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {levelTitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tiến độ đến cấp {levelInfo.nextLevel}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {levelInfo.currentXP}/{levelInfo.nextLevelXP} XP
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                    animate={{ width: `${levelInfo.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${levelColor}`}
                  />
                </div>
              </div>

              {/* Stats Grid with Enhanced Design */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FiClock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Chuỗi ngày</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {state.user.streak || 0} ngày
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {state.user.streak > 0 ? 'Tiếp tục phấn đấu!' : 'Hãy cố gắng!'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <FiAward className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Thành tựu</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {totalAchievements}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {totalAchievements > 0 ? 'Tiếp tục phấn đấu!' : 'Bắt đầu ngay!'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Historical Timeline Section with Enhanced Design */}
            <section className="relative overflow-hidden rounded-xl p-8 shadow-lg">
              {/* Background Pattern */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hành trình lịch sử
                </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Các thời kỳ lịch sử Việt Nam
                    </p>
                  </div>
                </div>

                <div className="relative">
                  {/* Timeline line with gradient and glow effect */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-50" />
              </div>

                  <div className="space-y-16">
                    {historicalPeriods.map((period, index) => {
                      // Define color schemes for different periods
                      const colorSchemes = [
                        { from: 'from-red-500', to: 'to-orange-500', bg: 'bg-red-50/80', darkBg: 'dark:bg-red-900/20' },
                        { from: 'from-blue-500', to: 'to-indigo-500', bg: 'bg-blue-50/80', darkBg: 'dark:bg-blue-900/20' },
                        { from: 'from-green-500', to: 'to-emerald-500', bg: 'bg-green-50/80', darkBg: 'dark:bg-green-900/20' },
                        { from: 'from-purple-500', to: 'to-pink-500', bg: 'bg-purple-50/80', darkBg: 'dark:bg-purple-900/20' },
                        { from: 'from-yellow-500', to: 'to-amber-500', bg: 'bg-yellow-50/80', darkBg: 'dark:bg-yellow-900/20' },
                        { from: 'from-cyan-500', to: 'to-teal-500', bg: 'bg-cyan-50/80', darkBg: 'dark:bg-cyan-900/20' }
                      ];
                      const colorScheme = colorSchemes[index % colorSchemes.length];

                      return (
                    <motion.div
                      key={period.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                          {/* Timeline dot with enhanced design */}
                          <div className="absolute left-1/2 transform -translate-x-1/2">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} shadow-lg`} />
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} blur-sm opacity-50`} />
                          </div>
                          
                          {/* Content with enhanced design */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                        <motion.div
                              whileHover={{ scale: 1.02, y: -5 }}
                              className={`${colorScheme.bg} ${colorScheme.darkBg} rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50`}
                        >
                          <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                              {period.name}
                            </h3>
                                <span className={`px-3 py-1 bg-gradient-to-r ${colorScheme.from} ${colorScheme.to} text-white rounded-full text-sm font-medium shadow-sm`}>
                                {period.startYear} - {period.endYear}
                              </span>
                            </div>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {period.description}
                              </p>
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                      </div>
                </div>
              </div>
            </section>

            {/* Recent Activity Section with Enhanced Design */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Hoạt động gần đây
                </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Theo dõi các hoạt động học tập của bạn
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-2"
                  onClick={() => handleTabChange('collection')}
                >
                  <span>Xem tất cả</span>
                  <FiChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-4">
                {state.user.completedEvents && state.user.completedEvents.length > 0 ? (
                  state.user.completedEvents.slice(0, 3).map((eventId: string, index: number) => (
                  <motion.div
                      key={eventId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <FiCheck className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Đã hoàn thành</p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {eventId}
                        </p>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <FiClock className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Chưa có hoạt động nào
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => handleTabChange('explore')}
                    >
                      Bắt đầu học ngay
                    </motion.button>
                  </div>
                )}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <MainLayout onTabChange={handleTabChange} activeTab={state.activeTab}>
      {renderContent()}
    </MainLayout>
  );
};

export default LearningInterface;