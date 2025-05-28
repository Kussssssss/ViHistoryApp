import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FiTrendingUp, 
  FiGift, 
  FiAward, 
  FiBook, 
  FiUsers, 
  FiCalendar, 
  FiLock,
  FiPlay,
  FiClock,
  FiStar,
  FiChevronRight
} from 'react-icons/fi';
import { historicalPeriods, HistoricalPeriod } from './data/historicalPeriods';
import { useAppState } from './hooks/useAppState';
import MainLayout from './components/MainLayout';
import Explore from './components/Explore';
import Collection from './components/Collection';
import Settings from './components/Settings';
import Chatbot from './components/Chatbot';

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
  React.useEffect(() => {
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

  // Load period content
  const loadPeriodContent = async (period: HistoricalPeriod) => {
    setLoading(true);
    try {
      const response = await fetch(`/data/${period.dataFile}`);
      const data = await response.text();
      setCurrentContent(data);
    } catch (error) {
      console.error('Error loading period content:', error);
    }
    setLoading(false);
  };

  // Handle period selection
  const handlePeriodSelect = async (period: HistoricalPeriod) => {
    if (!period.unlocked) {
      return;
    }
    selectPeriod(period);
    await loadPeriodContent(period);
  };

  // Handle start learning
  const handleStartLearning = (period: HistoricalPeriod) => {
    if (!period.unlocked) {
      return;
    }
    selectPeriod(period);
    showContent(true);
    const newContent = {
      id: period.id,
      title: period.name,
      content: period.description,
      points: period.rewards.experience,
      completed: false,
      quiz: period.quiz
    };
    setCurrentContent(newContent);
    loadPeriodContent(period);
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
            {/* Hero Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Khám phá lịch sử Việt Nam
                  </h1>
                  <p className="text-lg text-blue-100 mb-8">
                    Hành trình khám phá lịch sử đầy thú vị đang chờ đón bạn
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleStartLearning(historicalPeriods[0])}
                    className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
                  >
                    <span>Bắt đầu ngay</span>
                    <FiChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent" />
            </motion.section>

            {/* User Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <FiTrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cấp độ {state.user.level}
                    </h3>
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${state.user.experience}%` }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {state.user.experience} / 100 XP
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <FiStar className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Thành tích
                    </h3>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {state.user.achievements.length}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {state.user.achievements.length > 0 ? 'Tiếp tục phấn đấu!' : 'Bắt đầu ngay!'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <FiClock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Streak
                    </h3>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {state.user.streak} ngày
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {state.user.streak > 0 ? 'Tiếp tục phấn đấu!' : 'Hãy cố gắng!'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Featured Learning Content */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Nội dung học tập nổi bật
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Khám phá các nội dung học tập được đề xuất
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTabChange('explore')}
                  className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-2"
                >
                  <span>Xem tất cả</span>
                  <FiChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Thời kỳ Bắc thuộc */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">
                        Thời kỳ Bắc thuộc
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                        Giai đoạn 40-938
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Khởi nghĩa Hai Bà Trưng
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      Cuộc khởi nghĩa đầu tiên của nhân dân ta chống lại ách đô hộ của phong kiến phương Bắc.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <FiBook className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            3 bài học
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartLearning(historicalPeriods[0])}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm"
                      >
                        Bắt đầu học
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Thời kỳ Độc lập - Triều Ngô */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        Thời kỳ độc lập
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        Giai đoạn 938-1858
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Triều Ngô (939 - 965)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      Triều Ngô là triều đại đầu tiên của nước Việt Nam độc lập sau thời kỳ Bắc thuộc.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <FiBook className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            5 bài học
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartLearning(historicalPeriods[1])}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm"
                      >
                        Bắt đầu học
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Thời kỳ Pháp thuộc */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        Thời kỳ Pháp thuộc
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                        Giai đoạn 1858-1945
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Phong trào Cần Vương
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      Phong trào yêu nước chống Pháp dưới ngọn cờ "Cần Vương" do vua Hàm Nghi khởi xướng.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <FiBook className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            4 bài học
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartLearning(historicalPeriods[2])}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm"
                      >
                        Bắt đầu học
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Kháng chiến chống Pháp */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">
                        Kháng chiến chống Pháp
                      </span>
                      <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">
                        Giai đoạn 1945-1954
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Chiến thắng Điện Biên Phủ
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      Chiến thắng lịch sử Điện Biên Phủ đã đập tan hoàn toàn âm mưu xâm lược của thực dân Pháp.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <FiBook className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            6 bài học
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartLearning(historicalPeriods[3])}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm"
                      >
                        Bắt đầu học
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Kháng chiến chống Mỹ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                        Kháng chiến chống Mỹ
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm">
                        Giai đoạn 1954-1975
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Chiến dịch Hồ Chí Minh
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      Chiến dịch Hồ Chí Minh lịch sử đã giải phóng hoàn toàn miền Nam, thống nhất đất nước.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <FiBook className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            5 bài học
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartLearning(historicalPeriods[4])}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm"
                      >
                        Bắt đầu học
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Thời kỳ Đổi mới */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm">
                        Thời kỳ Đổi mới
                      </span>
                      <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-full text-sm">
                        Giai đoạn 1975-2000
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Đổi mới và Hội nhập
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      Công cuộc đổi mới đất nước và hội nhập quốc tế sau khi thống nhất đất nước.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <FiBook className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            4 bài học
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStartLearning(historicalPeriods[5])}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm"
                      >
                        Bắt đầu học
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Daily Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/50 dark:to-amber-900/50 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-orange-200 dark:border-orange-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Thử thách hôm nay
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Hoàn thành để nhận phần thưởng đặc biệt!
                  </p>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center"
                >
                  <FiGift className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Hoàn thành 3 bài học
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '33%' }}
                        transition={{ duration: 1 }}
                        className="h-full bg-orange-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">1/3</span>
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Đạt điểm cao trong bài kiểm tra
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '0%' }}
                        transition={{ duration: 1 }}
                        className="h-full bg-orange-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">0/1</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* User Progress */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Tiến độ của bạn
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Tổng điểm: {state.user.experience}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Achievement Stats */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center"
                    >
                      <FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Thành tích
                      </h3>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {state.user.achievements.length}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {state.user.achievements.length > 0 ? 'Tiếp tục phấn đấu!' : 'Bắt đầu ngay!'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Collection Stats */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center"
                    >
                      <FiBook className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Bộ sưu tập
                      </h3>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {state.user.collections.length}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {state.user.collections.length > 0 ? 'Tuyệt vời!' : 'Thu thập ngay!'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Streak Stats */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center"
                    >
                      <FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Streak
                      </h3>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {state.user.streak} ngày
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {state.user.streak > 0 ? 'Tiếp tục phấn đấu!' : 'Hãy cố gắng!'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Historical Journey */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Hành trình lịch sử
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Đã hoàn thành: {state.user.completedPeriods.length}/{historicalPeriods.length}
                  </span>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

                <div className="space-y-12">
                  {historicalPeriods.map((period, index) => (
                    <motion.div
                      key={period.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

                      {/* Content */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {period.name}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              period.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              period.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {period.difficulty === 'easy' ? 'Dễ' :
                               period.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {period.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <FiCalendar className="text-gray-400" />
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {period.startYear} - {period.endYear}
                              </span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handlePeriodSelect(period)}
                              disabled={!period.unlocked}
                              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                                period.unlocked
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {period.unlocked ? (
                                <>
                                  <FiPlay className="w-4 h-4" />
                                  <span>Bắt đầu học</span>
                                </>
                              ) : (
                                <>
                                  <FiLock className="w-4 h-4" />
                                  <span>Chưa mở khóa</span>
                                </>
                              )}
                            </motion.button>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recent Achievements */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Thành tích gần đây
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Xem tất cả
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.user.achievements.slice(0, 3).map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.rarity === 'common' ? 'bg-gray-100 dark:bg-gray-800' :
                        achievement.rarity === 'rare' ? 'bg-blue-100 dark:bg-blue-900' :
                        achievement.rarity === 'epic' ? 'bg-purple-100 dark:bg-purple-900' :
                        'bg-yellow-100 dark:bg-yellow-900'
                      }`}>
                        <FiAward className={`w-6 h-6 ${
                          achievement.rarity === 'common' ? 'text-gray-600 dark:text-gray-400' :
                          achievement.rarity === 'rare' ? 'text-blue-600 dark:text-blue-400' :
                          achievement.rarity === 'epic' ? 'text-purple-600 dark:text-purple-400' :
                          'text-yellow-600 dark:text-yellow-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          Đạt được: {new Date(achievement.unlockedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Learning Tips */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-emerald-200 dark:border-emerald-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Mẹo học tập
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Các mẹo hữu ích để học hiệu quả hơn
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Học theo timeline
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Học theo thứ tự thời gian để hiểu rõ sự phát triển của lịch sử
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Làm bài tập thường xuyên
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Luyện tập giúp củng cố kiến thức và ghi nhớ lâu hơn
                  </p>
                </div>
              </div>
            </motion.section>
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