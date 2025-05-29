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
  FiChevronRight,
  FiHelpCircle 
} from 'react-icons/fi';
// Removed: import { historicalPeriods, HistoricalPeriod as LocalHistoricalPeriod } from './data/historicalPeriods';
import collectionsDataSource from '/data/collectionsState.json'; 
import { useAppState } from './hooks/useAppState';
import MainLayout from './components/MainLayout';
import Explore from './components/Explore';
import Collection from './components/Collection';
import Settings from './components/Settings';
import Chatbot from './components/Chatbot';
import { HistoricalDataService } from './services/historicalDataService'; 
import { HistoricalEra, HistoricalPeriod, HistoricalEvent } from './types/historicalData'; // Added HistoricalPeriod, HistoricalEvent

interface CollectionDataSourceItem {
  obtainedItemIds: Record<string, string>;
}

const cardColorSchemes = [
  { 
    tag1Bg: 'bg-red-100 dark:bg-red-900', tag1Text: 'text-red-800 dark:text-red-200',
    tag2Bg: 'bg-orange-100 dark:bg-orange-900', tag2Text: 'text-orange-800 dark:text-orange-200',
    buttonGradient: 'from-red-500 to-orange-500',
  },
  { 
    tag1Bg: 'bg-blue-100 dark:bg-blue-900', tag1Text: 'text-blue-800 dark:text-blue-200',
    tag2Bg: 'bg-purple-100 dark:bg-purple-900', tag2Text: 'text-purple-800 dark:text-purple-200',
    buttonGradient: 'from-blue-500 to-purple-500',
  },
  { 
    tag1Bg: 'bg-green-100 dark:bg-green-900', tag1Text: 'text-green-800 dark:text-green-200',
    tag2Bg: 'bg-teal-100 dark:bg-teal-900', tag2Text: 'text-teal-800 dark:text-teal-200',
    buttonGradient: 'from-green-500 to-teal-500',
  },
  {
    tag1Bg: 'bg-indigo-100 dark:bg-indigo-900', tag1Text: 'text-indigo-800 dark:text-indigo-200',
    tag2Bg: 'bg-pink-100 dark:bg-pink-900', tag2Text: 'text-pink-800 dark:text-pink-200',
    buttonGradient: 'from-indigo-500 to-pink-500',
  },
  {
    tag1Bg: 'bg-yellow-100 dark:bg-yellow-900', tag1Text: 'text-yellow-800 dark:text-yellow-200',
    tag2Bg: 'bg-amber-100 dark:bg-amber-900', tag2Text: 'text-amber-800 dark:text-amber-200',
    buttonGradient: 'from-yellow-500 to-amber-500',
  },
  {
    tag1Bg: 'bg-cyan-100 dark:bg-cyan-900', tag1Text: 'text-cyan-800 dark:text-cyan-200',
    tag2Bg: 'bg-sky-100 dark:bg-sky-900', tag2Text: 'text-sky-800 dark:text-sky-200',
    buttonGradient: 'from-cyan-500 to-sky-500',
  }
];

const LearningInterface: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state,
    selectPeriod, // This will receive HistoricalPeriod from the service
    showContent,
    setCurrentContent, // This will set content based on HistoricalPeriod from the service
    setLoading,
    setActiveTab
  } = useAppState();

  const [journeyEras, setJourneyEras] = React.useState<HistoricalEra[]>([]);
  const [isLoadingJourneyEras, setIsLoadingJourneyEras] = React.useState(true);
  
  // State for featured periods, fetched from the service
  const [featuredPeriods, setFeaturedPeriods] = React.useState<HistoricalPeriod[]>([]);
  const [isLoadingFeaturedPeriods, setIsLoadingFeaturedPeriods] = React.useState(true);

  const historicalDataService = HistoricalDataService.getInstance();

  React.useEffect(() => {
    const loadAllData = async () => {
      setIsLoadingJourneyEras(true);
      setIsLoadingFeaturedPeriods(true);
      try {
        await historicalDataService.loadData(); 
        
        const loadedEras = historicalDataService.getEras();
        setJourneyEras(loadedEras);

        const allPeriods = historicalDataService.getPeriods();
        // Select a few periods for the "Featured" section, e.g., first 6
        // Or implement more sophisticated logic for "featured" selection
        setFeaturedPeriods(allPeriods.slice(0, 6)); 

      } catch (error) {
        console.error("LearningInterface: Error loading data:", error);
      } finally {
        setIsLoadingJourneyEras(false);
        setIsLoadingFeaturedPeriods(false);
      }
    };
    loadAllData();
  }, []); // Effect runs once on mount


  const totalCollectedItemsCount = React.useMemo(() => {
    const typedCollectionsData = collectionsDataSource as CollectionDataSourceItem[];
    if (!Array.isArray(typedCollectionsData)) {
      return 0;
    }
    return typedCollectionsData.reduce((acc, collection) => {
      if (collection && typeof collection.obtainedItemIds === 'object' && collection.obtainedItemIds !== null) {
        return acc + Object.keys(collection.obtainedItemIds).length;
      }
      return acc;
    }, 0);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'home': navigate('/home'); break;
      case 'explore': navigate('/explore'); break;
      case 'collection': navigate('/collection'); break;
      case 'settings': navigate('/settings'); break;
      case 'chatbot': navigate('/chatbot'); break;
      default: navigate('/home');
    }
  };

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

  // handleStartLearning now takes HistoricalPeriod from the service
  const handleStartLearning = async (period: HistoricalPeriod) => {
    if (!period.unlocked) {
      // Optionally, show a message that the period is locked
      console.log(`Period "${period.name}" is locked.`);
      return;
    }
    
    setLoading(true);
    selectPeriod(period); // Pass the full period object (with events)
    showContent(true);    // This likely triggers the LearningSession component via routing or context

    // setCurrentContent can set initial data for the view before LearningSession takes over
    // Or LearningSession itself might be what's rendered when showContent is true and a period is selected.
    // For now, let's assume setCurrentContent is for a summary or overview if shown before LearningSession
    setCurrentContent({
      id: period.id,
      title: period.name,
      content: period.description, // Main description of the period
      points: period.rewards.experience, // Or some base points
      completed: false, // This should reflect actual user progress
      // quiz: [] // LearningSession will generate quizzes from period.events
    });
    
    // No need to fetch dataFile here, LearningSession will use period.events
    setLoading(false);

    // Navigation to a dedicated learning session route might happen here or be handled by AppState/Router
    navigate(`/explore`);
    // The current setup implies ExploreContainer or similar handles showing LearningSession.
  };

  const handleJourneyEraClick = (era: HistoricalEra) => {
    if (!era.unlocked) {
      console.log(`Era "${era.name}" is locked.`);
      return;
    }
    handleTabChange('explore');
  };

  // Helper function to get story and quiz counts from a period's events
  const getContentSummary = (events: HistoricalEvent[] | undefined) => {
    if (!events || events.length === 0) {
      return { storyCount: 0, quizCount: 0 };
    }
    const uniqueContexts = new Set<string>();
    let quizCount = 0;

    events.forEach(event => {
      if (event.context) {
        // A simple way to count unique stories: by unique context.
        // Could be event.heading + event.context for more granularity.
        uniqueContexts.add(event.context);
      }
      if (event.question && event.answer) {
        quizCount++;
      }
    });
    return { storyCount: uniqueContexts.size, quizCount };
  };


  const renderContent = () => {
    switch (state.activeTab) {
      case 'explore':
        return (
          <Explore
            onStartLearning={(periodToStart) => {
              // This onStartLearning is passed to Explore. Explore calls this
              // when a user clicks "Bắt đầu học" on a HistoricalPeriod card in Explore page.
              // We can reuse our handleStartLearning logic here.
              handleStartLearning(periodToStart);
            }}
            unlockedPeriods={state.user.unlockedPeriods} 
            completedPeriods={state.user.completedPeriods}
          />
        );
      case 'collection': return <Collection />;
      case 'settings': return <Settings />;
      case 'chatbot': return <Chatbot />;
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
                    onClick={() => {
                      // Start with the first available featured period if loaded
                      if (featuredPeriods.length > 0) {
                        handleStartLearning(featuredPeriods[0]);
                      } else {
                        // Fallback or indicate loading
                        console.log("Featured periods not loaded yet for hero button.");
                      }
                    }}
                    disabled={isLoadingFeaturedPeriods || featuredPeriods.length === 0}
                    className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
                  >
                    <span>Bắt đầu ngay</span>
                    <FiChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent" />
            </motion.section>

            {/* User Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center"><FiTrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" /></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cấp độ {state.user.level}</h3>
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${state.user.experience}%` }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </div><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{state.user.experience} / 100 XP</p>
                  </div></div></motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center"><FiStar className="w-6 h-6 text-green-600 dark:text-green-400" /></div>
                  <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thành tích</h3><p className="text-2xl font-bold text-green-600 dark:text-green-400">{state.user.achievements.length}</p><p className="text-sm text-gray-500 dark:text-gray-400">{state.user.achievements.length > 0 ? 'Tiếp tục phấn đấu!' : 'Bắt đầu ngay!'}</p>
                  </div></div></motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center"><FiClock className="w-6 h-6 text-purple-600 dark:text-purple-400" /></div>
                  <div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Streak</h3><p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{state.user.streak} ngày</p><p className="text-sm text-gray-500 dark:text-gray-400">{state.user.streak > 0 ? 'Tiếp tục phấn đấu!' : 'Hãy cố gắng!'}</p>
                  </div></div></motion.div>
            </section>

            {/* Featured Learning Content (Uses HistoricalPeriod from service) */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nội dung học tập nổi bật</h2><p className="text-gray-600 dark:text-gray-300 mt-1">Khám phá các nội dung học tập được đề xuất</p></div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleTabChange('explore')} className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center space-x-2"><span>Xem tất cả</span><FiChevronRight className="w-5 h-5" /></motion.button>
              </div>
              {isLoadingFeaturedPeriods ? (
                 <div className="text-center py-8"><p className="text-gray-500 dark:text-gray-400">Đang tải nội dung nổi bật...</p></div>
              ) : featuredPeriods.length === 0 ? (
                <div className="text-center py-8"><p className="text-gray-500 dark:text-gray-400">Không có nội dung nổi bật nào.</p></div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredPeriods.map((period, index) => {
                    const colorScheme = cardColorSchemes[index % cardColorSchemes.length];
                    const { storyCount, quizCount } = getContentSummary(period.events);

                    return (
                      <motion.div
                        key={period.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="p-6">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className={`px-3 py-1 ${colorScheme.tag1Bg} ${colorScheme.tag1Text} rounded-full text-sm`}>
                              {period.name.split('(')[0].trim()}
                            </span>
                            <span className={`px-3 py-1 ${colorScheme.tag2Bg} ${colorScheme.tag2Text} rounded-full text-sm`}>
                              Giai đoạn {period.startYear}-{period.endYear}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {period.name} 
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {period.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              {storyCount > 0 && (
                                <div className="flex items-center space-x-1">
                                  <FiBook className="text-gray-400 dark:text-gray-500 w-4 h-4" />
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {storyCount} bài học
                                  </span>
                                </div>
                              )}
                              {quizCount > 0 && (
                                <div className="flex items-center space-x-1">
                                  <FiHelpCircle className="text-gray-400 dark:text-gray-500 w-4 h-4" />
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {quizCount} câu hỏi
                                  </span>
                                </div>
                              )}
                              {(storyCount === 0 && quizCount === 0) && (
                                  <span className="text-sm text-gray-500 dark:text-gray-400">N/A nội dung</span>
                              )}
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleStartLearning(period)}
                              disabled={!period.unlocked}
                              className={`px-4 py-2 rounded-xl bg-gradient-to-r ${colorScheme.buttonGradient} text-white text-sm ${!period.unlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                              Bắt đầu học
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Daily Challenge */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/50 dark:to-amber-900/50 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-orange-200 dark:border-orange-700">
              <div className="flex items-center justify-between mb-6">
                <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Thử thách hôm nay</h2><p className="text-gray-600 dark:text-gray-300">Hoàn thành để nhận phần thưởng đặc biệt!</p></div>
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center"><FiGift className="w-6 h-6 text-orange-600 dark:text-orange-400" /></motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6"><h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hoàn thành 3 bài học</h3><div className="flex items-center space-x-2"><div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"><motion.div initial={{ width: 0 }} animate={{ width: '33%' }} transition={{ duration: 1 }} className="h-full bg-orange-500 rounded-full" /></div><span className="text-sm text-gray-500 dark:text-gray-400">1/3</span></div></div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6"><h3 className="font-semibold text-gray-900 dark:text-white mb-2">Đạt điểm cao trong bài kiểm tra</h3><div className="flex items-center space-x-2"><div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full"><motion.div initial={{ width: 0 }} animate={{ width: '0%' }} transition={{ duration: 1 }} className="h-full bg-orange-500 rounded-full" /></div><span className="text-sm text-gray-500 dark:text-gray-400">0/1</span></div></div>
              </div></motion.section>

            {/* User Progress */}
            <section>
              <div className="flex items-center justify-between mb-6"><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tiến độ của bạn</h2><div className="flex items-center space-x-2"><span className="text-sm text-gray-500 dark:text-gray-400">Tổng điểm: {state.user.experience}</span></div></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl p-6"><div className="flex items-center space-x-4"><motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center"><FiAward className="w-6 h-6 text-blue-600 dark:text-blue-400" /></motion.div><div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thành tích</h3><p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{state.user.achievements.length}</p><p className="text-sm text-gray-500 dark:text-gray-400">{state.user.achievements.length > 0 ? 'Tiếp tục phấn đấu!' : 'Bắt đầu ngay!'}</p></div></div></motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 rounded-xl p-6"><div className="flex items-center space-x-4"><motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center"><FiBook className="w-6 h-6 text-green-600 dark:text-green-400" /></motion.div><div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bộ sưu tập</h3><p className="text-2xl font-bold text-green-600 dark:text-green-400">{totalCollectedItemsCount}</p><p className="text-sm text-gray-500 dark:text-gray-400">{totalCollectedItemsCount > 0 ? 'Tuyệt vời!' : 'Thu thập ngay!'}</p></div></div></motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl p-6"><div className="flex items-center space-x-4"><motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center"><FiUsers className="w-6 h-6 text-purple-600 dark:text-purple-400" /></motion.div><div><h3 className="text-lg font-semibold text-gray-900 dark:text-white">Streak</h3><p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{state.user.streak} ngày</p><p className="text-sm text-gray-500 dark:text-gray-400">{state.user.streak > 0 ? 'Tiếp tục phấn đấu!' : 'Hãy cố gắng!'}</p></div></div></motion.div>
              </div></section>

            {/* Historical Journey */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hành trình lịch sử</h2>
                {!isLoadingJourneyEras && journeyEras.length > 0 && (<div className="flex items-center space-x-2"><span className="text-sm text-gray-500 dark:text-gray-400">Đã hoàn thành: {journeyEras.filter(e => e.completed).length}/{journeyEras.length} Thời Đại</span></div>)}
              </div>
              {isLoadingJourneyEras ? (<div className="flex justify-center items-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div><p className="ml-3 text-gray-600 dark:text-gray-300">Đang tải hành trình...</p></div>
              ) : journeyEras.length === 0 ? (<p className="text-center text-gray-500 dark:text-gray-400 py-4">Không có dữ liệu Thời Đại để hiển thị.</p>
              ) : (
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />
                  <div className="space-y-12">
                    {journeyEras.map((era, index) => (
                      <motion.div key={era.id} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${era.completed ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`} />
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                          <motion.div whileHover={{ scale: 1.02 }} className={`bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700 ${!era.unlocked ? 'opacity-60' : ''}`}>
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{era.name}</h3>
                              {era.difficulty && (
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                  era.difficulty === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100' :
                                  era.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100' :
                                  'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100'
                                }`}>
                                  {era.difficulty === 'easy' ? 'Dễ' : era.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                                </span>
                              )}
                              {era.completed && !era.difficulty && ( <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">Hoàn thành</span>)}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{era.description}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2"><FiCalendar className="text-gray-400" /><span className="text-sm text-gray-500 dark:text-gray-400">{era.startYear} - {era.endYear}</span></div>
                              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleJourneyEraClick(era)} disabled={!era.unlocked}
                                className={`px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium ${ era.unlocked ? (era.completed ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600') : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}>
                                {era.unlocked ? (era.completed ? (<><FiAward className="w-4 h-4" /><span>Đã chinh phục</span></>) : (<><FiPlay className="w-4 h-4" /><span>Khám phá</span></>)) : (<><FiLock className="w-4 h-4" /><span>Chưa mở khóa</span></>)}
                              </motion.button>
                            </div></motion.div></div></motion.div>))}
                  </div></div>)}</section>

            {/* Recent Achievements */}
            <section>
              <div className="flex items-center justify-between mb-6"><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Thành tích gần đây</h2><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">Xem tất cả</motion.button></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {state.user.achievements.slice(0, 3).map((achievement) => (
                  <motion.div key={achievement.id} whileHover={{ scale: 1.02 }} className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.rarity === 'common' ? 'bg-gray-100 dark:bg-gray-800' : achievement.rarity === 'rare' ? 'bg-blue-100 dark:bg-blue-900' : achievement.rarity === 'epic' ? 'bg-purple-100 dark:bg-purple-900' : 'bg-yellow-100 dark:bg-yellow-900'}`}>
                        <FiAward className={`w-6 h-6 ${achievement.rarity === 'common' ? 'text-gray-600 dark:text-gray-400' : achievement.rarity === 'rare' ? 'text-blue-600 dark:text-blue-400' : achievement.rarity === 'epic' ? 'text-purple-600 dark:text-purple-400' : 'text-yellow-600 dark:text-yellow-400'}`} /></div>
                      <div><h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p><p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Đạt được: {new Date(achievement.unlockedAt).toLocaleDateString()}</p></div></div></motion.div>))}
                 {state.user.achievements.length === 0 && (<p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-4">Chưa có thành tích nào.</p>)}
              </div></section>

            {/* Learning Tips */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center justify-between mb-6"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mẹo học tập</h2><p className="text-gray-600 dark:text-gray-300">Các mẹo hữu ích để học hiệu quả hơn</p></div></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6"><h3 className="font-semibold text-gray-900 dark:text-white mb-2">Học theo timeline</h3><p className="text-gray-600 dark:text-gray-300">Học theo thứ tự thời gian để hiểu rõ sự phát triển của lịch sử</p></div>
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6"><h3 className="font-semibold text-gray-900 dark:text-white mb-2">Làm bài tập thường xuyên</h3><p className="text-gray-600 dark:text-gray-300">Luyện tập giúp củng cố kiến thức và ghi nhớ lâu hơn</p></div>
              </div></motion.section>
          </div>);
    }
  };

  return (
    <MainLayout onTabChange={handleTabChange} activeTab={state.activeTab}>
      {renderContent()}
    </MainLayout>
  );
};

export default LearningInterface;