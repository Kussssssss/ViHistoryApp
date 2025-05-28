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
  FiShield
} from 'react-icons/fi';
import { HistoricalDataService } from '../services/historicalDataService';
import { HistoricalPeriod, HistoricalEvent, Challenge } from '../types/historicalData';
import LearningSession from './LearningSession';

interface ExploreProps {
  onStartLearning: (period: HistoricalPeriod) => void;
  unlockedPeriods: string[];
  completedPeriods: string[];
}

const Explore: React.FC<ExploreProps> = ({ onStartLearning, unlockedPeriods, completedPeriods }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [periods, setPeriods] = useState<HistoricalPeriod[]>([]);
  const [filteredPeriods, setFilteredPeriods] = useState<HistoricalPeriod[]>([]);
  const [selectedView, setSelectedView] = useState<'timeline' | 'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [dailyChallenges, setDailyChallenges] = useState<Challenge[]>([]);
  const [weeklyChallenges, setWeeklyChallenges] = useState<Challenge[]>([]);
  const [learningPeriod, setLearningPeriod] = useState<HistoricalPeriod | null>(null);
  const [showLearningSession, setShowLearningSession] = useState(false);
  const [isLearningLoading, setIsLearningLoading] = useState(false);

  const historicalDataService = HistoricalDataService.getInstance();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Explore: Starting data load...');
        await historicalDataService.loadData();
        const loadedPeriods = historicalDataService.getPeriods();
        console.log('Explore: Data loaded. Number of periods:', loadedPeriods.length);
        console.log('Explore: Loaded periods data:', loadedPeriods);

        setPeriods(loadedPeriods);

        const filtered = loadedPeriods.filter(period => 
          (selectedType === 'all' || (period.events && period.events.some(event => event.type === selectedType))) &&
          (searchQuery === '' || period.name.toLowerCase().includes(searchQuery.toLowerCase()) || period.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        console.log('Explore: Filtered periods count:', filtered.length);
        setFilteredPeriods(filtered);

        setDailyChallenges(historicalDataService.getDailyChallenges());
        setWeeklyChallenges(historicalDataService.getWeeklyChallenges());

      } catch (error) {
        console.error('Explore: Error loading data:', error);
        setError('Không thể tải dữ liệu. Vui lòng thử lại sau.');
      } finally {
        setIsLoading(false);
        console.log('Explore: Finished data load.');
      }
    };
    loadData();
  }, [retryCount, historicalDataService, searchQuery, selectedType]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  const handleStartLearning = async (period: HistoricalPeriod) => {
    if (!period.unlocked) {
      return;
    }
    setIsLearningLoading(true); // Show loading state specifically for learning content
    setError(null); // Clear any previous error

    try {
      const periodWithEvents = await historicalDataService.getPeriodWithEvents(period.id);

      if (periodWithEvents && periodWithEvents.events && periodWithEvents.events.length > 0) {
        setLearningPeriod(periodWithEvents);
        setShowLearningSession(true);
      } else if (periodWithEvents && (!periodWithEvents.events || periodWithEvents.events.length === 0)) {
        // Period found, but no events loaded (e.g., parsing error in chunk, or empty period data)
        console.warn(`No events loaded for period: ${period.name}`);
        setError(`Không tìm thấy nội dung bài học cho thời kỳ ${period.name}.`);
      } else {
        // Period not found (should not happen if called from periods list)
         console.error(`Period not found: ${period.id}`);
         setError('Không tìm thấy thời kỳ lịch sử.');
      }
    } catch (error) {
      console.error(`Error loading events for period ${period.name}:`, error);
      setError('Lỗi khi tải nội dung bài học. Vui lòng thử lại.');
    } finally {
      setIsLearningLoading(false); // Hide loading state
    }
  };

  const isPeriodCompleted = (periodId: string) => completedPeriods.includes(periodId);

  const renderContentCard = (event: HistoricalEvent, period: HistoricalPeriod) => {
    const isUnlocked = unlockedPeriods.includes(period.id);

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
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
          challenge.type === 'daily' ? 'bg-blue-50 dark:bg-blue-900/30' :
          challenge.type === 'weekly' ? 'bg-purple-50 dark:bg-purple-900/30' :
          'bg-yellow-50 dark:bg-yellow-900/30'
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
          {challenge.rewards && (
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

  if (isLoading || isLearningLoading) { // Show loading if either initial data or learning content is loading
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

  const displayData = selectedPeriod 
    ? selectedPeriod.events
    : periods;

   const title = selectedPeriod 
    ? selectedPeriod.name
    : 'Khám phá Lịch sử';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedPeriod ? selectedPeriod.name : 'Khám phá Lịch sử'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {selectedPeriod ? 'Chi tiết giai đoạn' : 'Khám phá các thời kỳ lịch sử Việt Nam'}
              </p>
            </div>
          </div>

          {/* View Toggle */}
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
              onClick={() => setSelectedView('timeline')}
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

      {/* Search and Filter Section */}
      {!selectedPeriod && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm theo tên hoặc mô tả..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="relative">
            <FiFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả loại nội dung</option>
              <option value="event">Sự kiện</option>
              <option value="dynasty">Triều đại</option>
              <option value="person">Nhân vật</option>
              <option value="battle">Trận đánh</option>
            </select>
          </div>
        </div>
      )}

      {/* Challenges Section */}
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
          {/* Daily Challenges */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thử thách hằng ngày
            </h3>
            <div className="space-y-4">
              {dailyChallenges.map(challenge => (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  {renderChallengeCard(challenge)}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Weekly Challenges */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thử thách hằng tuần
            </h3>
            <div className="space-y-4">
              {weeklyChallenges.map(challenge => (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  {renderChallengeCard(challenge)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayData.length > 0 ? (
          displayData.map((item) => {
            if (!selectedPeriod) {
              const period = item as HistoricalPeriod;
              const isCompleted = isPeriodCompleted(period.id);

              return (
                <motion.div
                  key={period.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={isCompleted ? {} : { scale: 0.98 }}
                  onClick={isCompleted ? undefined : () => handleStartLearning(period)}
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
                        whileTap={isCompleted ? {} : { scale: 0.98 }}
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
            } else {
              return renderContentCard(item as HistoricalEvent, selectedPeriod);
            }
          })
        ) : (
          <div className="col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md text-center">
              <FiSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Không tìm thấy kết quả
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {searchQuery || selectedType !== 'all' 
                  ? 'Không tìm thấy nội dung phù hợp với tìm kiếm hoặc bộ lọc của bạn.'
                  : 'Chưa có dữ liệu học tập. Vui lòng kiểm tra file dữ liệu hoặc thử lại sau.'}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      {showLearningSession && learningPeriod && (
        <LearningSession
          period={learningPeriod}
          onComplete={(score, rewards) => {
            setShowLearningSession(false);
            setLearningPeriod(null);
            onStartLearning(learningPeriod);
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