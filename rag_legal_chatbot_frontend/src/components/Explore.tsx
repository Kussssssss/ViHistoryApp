import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBook, 
  FiAward, 
  FiStar, 
  FiClock, 
  FiUsers,
  FiLock,
  FiPlay,
  FiCheck,
  FiGift,
  FiChevronRight,
  FiChevronDown,
  FiSearch,
  FiFilter,
  FiCalendar,
  FiMap,
  FiFlag,
  FiHome,
  FiList,
  FiHelpCircle,
  FiBarChart2,
  FiCompass,
  FiChevronUp,
  FiUnlock,
  FiArrowLeft,
  FiGrid,
  FiLayout,
  FiClock as FiTime,
  FiTarget,
  FiZap,
  FiShield,
  FiTrendingUp, // Added for Era icon
} from 'react-icons/fi';
import { HistoricalDataService } from '../services/historicalDataService';
import { HistoricalPeriod, HistoricalEvent, Challenge, HistoricalEra } from '../types/historicalData';
import LearningSession from './LearningSession';

interface ExploreProps {
  onStartLearning: (period: HistoricalPeriod) => void;
  unlockedPeriods: string[]; // This might become unlockedEras or handled within era/period objects
  completedPeriods: string[]; // This might become completedEras or handled within era/period objects
}

const Explore: React.FC<ExploreProps> = ({ onStartLearning, unlockedPeriods, completedPeriods }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null); // For event view, if used
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all'); // For filtering periods
  
  const [eras, setEras] = useState<HistoricalEra[]>([]);
  const [selectedEra, setSelectedEra] = useState<HistoricalEra | null>(null);
  
  const [periods, setPeriods] = useState<HistoricalPeriod[]>([]); // Periods of selectedEra
  const [filteredPeriods, setFilteredPeriods] = useState<HistoricalPeriod[]>([]); // Filtered periods of selectedEra

  const [selectedView, setSelectedView] = useState<'timeline' | 'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0); // Example state
  const [dailyChallenges, setDailyChallenges] = useState<Challenge[]>([]);
  const [weeklyChallenges, setWeeklyChallenges] = useState<Challenge[]>([]);
  
  const [learningPeriod, setLearningPeriod] = useState<HistoricalPeriod | null>(null);
  const [showLearningSession, setShowLearningSession] = useState(false);
  const [isLearningLoading, setIsLearningLoading] = useState(false);

  const historicalDataService = HistoricalDataService.getInstance();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Explore: Starting initial data load (eras, challenges)...');
        await historicalDataService.loadData(); // This loads eras, periods, and associates them.
        
        const loadedEras = historicalDataService.getEras();
        console.log('Explore: Eras loaded. Number of eras:', loadedEras.length);
        setEras(loadedEras);

        // Challenges are global
        setDailyChallenges(historicalDataService.getDailyChallenges());
        setWeeklyChallenges(historicalDataService.getWeeklyChallenges());

      } catch (err: any) {
        console.error('Explore: Error loading initial data:', err);
        setError(err.message || 'Không thể tải dữ liệu Thời Đại. Vui lòng thử lại sau.');
      } finally {
        setIsLoading(false);
        console.log('Explore: Finished initial data load.');
      }
    };
    loadInitialData();
  }, [retryCount, historicalDataService]);

  useEffect(() => {
    if (selectedEra) {
      console.log(`Explore: Era selected: ${selectedEra.name}. Loading its periods.`);
      const eraPeriods = selectedEra.periods || []; // Get periods from the selected era object
      
      // Apply search and type filters to these periods
      const filtered = eraPeriods.filter(period => 
        (selectedType === 'all' /* Add period type filter if applicable, e.g. period.type */) &&
        (searchQuery === '' || 
         period.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
         period.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      setPeriods(eraPeriods); // Store all periods for the current era
      setFilteredPeriods(filtered); // Store filtered periods for display
      console.log('Explore: Periods for selected era - Total:', eraPeriods.length, 'Filtered:', filtered.length);
    } else {
      // No era selected, clear period lists
      setPeriods([]);
      setFilteredPeriods([]);
    }
  }, [selectedEra, searchQuery, selectedType]);


  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    setSelectedEra(null); // Reset selection on retry
  };

  const handleEraSelected = (era: HistoricalEra) => {
    setSelectedEra(era);
    setSelectedPeriod(null); // Clear any previously selected period detail
    setSearchQuery('');      // Reset search query for periods
    setSelectedType('all');  // Reset period filter
  };

  const handleBackToEras = () => {
    setSelectedEra(null);
    setSelectedPeriod(null);
    setSearchQuery('');
    setSelectedType('all');
  };

  const handleStartLearning = async (period: HistoricalPeriod) => {
    // Unlocked check for period should be ideally within period object itself
    // For now, assume period.unlocked is checked or all are unlocked initially
    // if (!period.unlocked) {
    //   console.log(`Period ${period.name} is locked.`);
    //   return;
    // }
    setIsLearningLoading(true);
    setError(null);

    try {
      const periodWithEvents = await historicalDataService.getPeriodWithEvents(period.id);

      if (periodWithEvents && periodWithEvents.events && periodWithEvents.events.length > 0) {
        setLearningPeriod(periodWithEvents);
        setShowLearningSession(true);
      } else if (periodWithEvents && (!periodWithEvents.events || periodWithEvents.events.length === 0)) {
        console.warn(`No events loaded for period: ${period.name}`);
        setError(`Không tìm thấy nội dung bài học cho giai đoạn ${period.name}.`);
      } else {
         console.error(`Period not found or failed to load: ${period.id}`);
         setError('Không tìm thấy giai đoạn lịch sử hoặc không có nội dung.');
      }
    } catch (error: any) {
      console.error(`Error loading events for period ${period.name}:`, error);
      setError(error.message || 'Lỗi khi tải nội dung bài học. Vui lòng thử lại.');
    } finally {
      setIsLearningLoading(false);
    }
  };

  const isPeriodCompleted = (periodId: string) => completedPeriods.includes(periodId); // Adapt if completion is per era

  // This function is kept for potential detailed view of events within Explore page itself,
  // but primary learning is via LearningSession.
  const renderContentCard = (event: HistoricalEvent, period: HistoricalPeriod) => {
    // const isUnlocked = unlockedPeriods.includes(period.id); // This needs context if period refers to parent

    return (
      <motion.div
        key={event.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
            <FiBook className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
              {event.heading}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {event.type || 'Sự kiện'}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
              {event.context}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Năm: {event.year || period.startYear}
              </span>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                Xem chi tiết
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderChallengeCard = (challenge: Challenge) => (
    <motion.div
      key={challenge.id}
      // whileHover={{ scale: 1.02 }} // Applied to parent in Challenges section
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
          challenge.type === 'daily' ? 'bg-blue-50 dark:bg-blue-900/30' :
          challenge.type === 'weekly' ? 'bg-purple-50 dark:bg-purple-900/30' :
          'bg-yellow-50 dark:bg-yellow-900/30' // Fallback for other types
        }`}>
          {challenge.type === 'daily' ? <FiClock className="w-6 h-6 text-blue-600 dark:text-blue-400" /> :
           challenge.type === 'weekly' ? <FiCalendar className="w-6 h-6 text-purple-600 dark:text-purple-400" /> :
           <FiAward className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {challenge.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {challenge.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(challenge.requirements.current / challenge.requirements.target) * 100}%` }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {challenge.requirements.current}/{challenge.requirements.target}
              </span>
            </div>
            {challenge.completed && (
              <FiCheck className="w-5 h-5 text-green-500" />
            )}
          </div>
          {challenge.rewards && ( // Ensure rewards object exists
            <div className="mt-4 flex items-center space-x-2">
              {challenge.rewards.experience > 0 && (
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <FiStar className="w-4 h-4 text-yellow-500 mr-1" />
                  {challenge.rewards.experience} XP
                </span>
              )}
              {challenge.rewards.coins > 0 && (
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <FiGift className="w-4 h-4 text-green-500 mr-1" />
                  {challenge.rewards.coins} Xu
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
  
  const renderEraCard = (era: HistoricalEra) => (
    <motion.div
      key={era.id}
      layout
      initial={{ opacity: 0, y: 15, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, restDelta: 0.001 }}
      whileHover={{ scale: 1.02 }}
      whileTap={era.unlocked ? { scale: 0.98 } : {}}
      onClick={era.unlocked ? () => handleEraSelected(era) : undefined}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all relative overflow-hidden ${
        era.completed
          ? 'cursor-default opacity-80' 
          : era.unlocked
            ? 'cursor-pointer'
            : 'cursor-not-allowed opacity-50'
      }`}
    >
      {era.completed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-green-50 dark:bg-green-900/20 flex items-center justify-center z-10"
        >
          <FiCheck className="w-16 h-16 text-green-600 dark:text-green-400 opacity-50" />
        </motion.div>
      )}
      {!era.unlocked && !era.completed && (
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gray-200 dark:bg-gray-900/50 flex items-center justify-center z-10"
        >
          <FiLock className="w-12 h-12 text-gray-600 dark:text-gray-400 opacity-70" />
        </motion.div>
      )}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
          <FiTrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {era.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {era.startYear} - {era.endYear}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
            {era.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={era.unlocked && !era.completed ? { scale: 0.98 } : {}}
            onClick={(e) => {
              e.stopPropagation();
              if (era.unlocked && !era.completed) {
                 handleEraSelected(era);
              }
            }}
            disabled={!era.unlocked || era.completed}
            className={`w-full px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
              era.completed
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : era.unlocked
                  ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
             {era.completed ? (
               <>
                 <FiCheck className="w-5 h-5" />
                 <span>Đã hoàn thành</span>
               </>
             ) : !era.unlocked ? (
               <>
                 <FiLock className="w-5 h-5" />
                 <span>Chưa mở khóa</span>
               </>
             ) : (
               <>
                 <FiChevronRight className="w-5 h-5" />
                 <span>Khám phá Thời đại</span>
               </>
             )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );


  if (isLoading || isLearningLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">{isLearningLoading ? 'Đang tải nội dung bài học...' : 'Đang tải dữ liệu...'}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-6 max-w-md text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  // Determine what to display based on selection state
  const displayItems = selectedEra 
    ? (selectedPeriod ? selectedPeriod.events : filteredPeriods) // If era selected, show its periods (or events if period also selected)
    : eras; // If no era selected, show eras

  const currentViewTitle = selectedEra 
    ? selectedEra.name 
    : 'Khám phá Lịch sử theo Thời Đại';
  const currentViewSubtitle = selectedEra
    ? `Các giai đoạn trong ${selectedEra.name}`
    : 'Chọn một thời đại để bắt đầu hành trình của bạn';


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            {selectedEra && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBackToEras}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Quay lại chọn Thời Đại"
              >
                <FiArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </motion.button>
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentViewTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {currentViewSubtitle}
              </p>
            </div>
          </div>

          {/* View Toggle - Applicable when showing periods or eras */}
          <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedView('grid')}
              className={`p-2 rounded-lg transition-colors ${
                selectedView === 'grid' 
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiGrid className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedView('timeline')} // Timeline view might need specific logic for eras vs periods
              className={`p-2 rounded-lg transition-colors ${
                selectedView === 'timeline' 
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <FiLayout className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search and Filter Section - Shown only when an era is selected (to filter periods) */}
      {selectedEra && !selectedPeriod && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm giai đoạn theo tên hoặc mô tả..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="relative">
            <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select // This filter might be for period types if applicable
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả loại giai đoạn</option>
              {/* Add options for period types if relevant, e.g., from a predefined list */}
              {/* <option value="dynasty">Triều đại</option> */}
            </select>
          </div>
        </div>
      )}

      {/* Challenges Section - Always visible */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Thử thách
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Hoàn thành thử thách để nhận phần thưởng đặc biệt
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FiZap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Streak: {currentStreak} ngày
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thử thách hằng ngày
            </h3>
            <div className="space-y-4">
              {dailyChallenges.map(challenge => (
                <motion.div key={challenge.id} whileHover={{ scale: 1.02 }}>
                  {renderChallengeCard(challenge)}
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thử thách hằng tuần
            </h3>
            <div className="space-y-4">
              {weeklyChallenges.map(challenge => (
                <motion.div key={challenge.id} whileHover={{ scale: 1.02 }}>
                  {renderChallengeCard(challenge)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid - Shows Eras or Periods */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!selectedEra ? (
          // Display Eras
          eras.length > 0 ? (
            eras.map(era => renderEraCard(era))
          ) : (
            <div className="col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
                <FiMap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Không có Thời Đại nào
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dữ liệu Thời Đại chưa được tải hoặc không có sẵn.
                </p>
              </div>
            </div>
          )
        ) : selectedPeriod ? (
          // Display Events of a selected period (if Explore page itself shows event details)
          // This part reuses the renderContentCard for events.
          // If LearningSession is the only way to see events, this branch might not be reached often.
          selectedPeriod.events && selectedPeriod.events.length > 0 ? (
            selectedPeriod.events.map(event => renderContentCard(event, selectedPeriod))
          ) : (
             <div className="col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
                    <FiBook className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Không có sự kiện nào
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Không có sự kiện nào được tìm thấy cho giai đoạn này.
                    </p>
                </div>
            </div>
          )
        ) : (
          // Display Periods of the selectedEra
          filteredPeriods.length > 0 ? (
            filteredPeriods.map((period) => {
              const isCompleted = isPeriodCompleted(period.id);
              // Re-using the period card rendering logic from the original component
              return (
              <motion.div
                  key={period.id}
                  layout
                  initial={{ opacity: 0, y: 0.5, scale: 0.1 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, restDelta: 0.001 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={isCompleted || !period.unlocked ? {} : { scale: 0.98 }}
                  onClick={isCompleted || !period.unlocked ? undefined : () => handleStartLearning(period)}
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all relative overflow-hidden ${
                    isCompleted
                      ? 'cursor-default opacity-80'
                      : period.unlocked
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed opacity-50'
                  }`}
                >
                  {isCompleted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-green-50 dark:bg-green-900/20 flex items-center justify-center z-10"
                    >
                      <FiCheck className="w-16 h-16 text-green-600 dark:text-green-400 opacity-50" />
                    </motion.div>
                  )}

                  {!period.unlocked && !isCompleted && (
                     <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gray-200 dark:bg-gray-900/50 flex items-center justify-center z-10"
                    >
                      <FiLock className="w-12 h-12 text-gray-600 dark:text-gray-400 opacity-70" />
                    </motion.div>
                  )}

                  {period.image && (
                    <img
                      src={period.image}
                      alt={period.name}
                      className={`w-full h-40 object-cover rounded-lg mb-4 ${
                         !period.unlocked || isCompleted ? 'grayscale' : ''
                      }`}
                    />
                  )}

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <FiCalendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {period.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {period.startYear} - {period.endYear}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                        {period.description}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={isCompleted || !period.unlocked ? {} : { scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isCompleted && period.unlocked) {
                             handleStartLearning(period);
                          }
                        }}
                        disabled={!period.unlocked || isCompleted}
                        className={`w-full px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                          isCompleted
                            ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                            : period.unlocked
                              ? 'bg-blue-500 hover:bg-blue-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        }`}
                      >
                         {isCompleted ? (
                           <>
                             <FiCheck className="w-5 h-5" />
                             <span>Đã hoàn thành</span>
                           </>
                         ) : !period.unlocked ? (
                           <>
                             <FiLock className="w-5 h-5" />
                             <span>Chưa mở khóa</span>
                           </>
                         ) : (
                           <>
                             <FiPlay className="w-5 h-5" />
                             <span>Bắt đầu học</span>
                           </>
                         )}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
                <FiSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Không tìm thấy giai đoạn
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {searchQuery || selectedType !== 'all' 
                    ? 'Không tìm thấy giai đoạn phù hợp với tìm kiếm hoặc bộ lọc của bạn.'
                    : `Không có giai đoạn nào trong thời đại ${selectedEra?.name || 'này'}.`}
                </p>
              </div>
            </div>
          )
        )}
      </motion.div>


      {showLearningSession && learningPeriod && (
        <LearningSession
          period={learningPeriod}
          onComplete={(score, rewards) => {
            setShowLearningSession(false);
            // Potentially update completion status for learningPeriod
            // e.g., setCompletedPeriods([...completedPeriods, learningPeriod.id]);
            setLearningPeriod(null);
            // onStartLearning(learningPeriod); // This was likely for re-triggering something, review if needed
            console.log(`Learning session for ${learningPeriod.name} completed. Score: ${score}`);
          }}
          onExit={() => {
            setShowLearningSession(false);
            setLearningPeriod(null);
          }}
        />
      )}
    </div>
  );
};

export default Explore; 