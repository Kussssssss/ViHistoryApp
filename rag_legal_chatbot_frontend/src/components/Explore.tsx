import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiStar, 
  FiClock, 
  FiCheck,
  FiGift,
  FiCalendar,
  FiGrid,
  FiLayout,
  FiMap,
  FiLock,
  FiUnlock,
  FiBook
} from 'react-icons/fi';
import { HistoricalDataService } from '../services/historicalDataService';
import { UserProgressService } from '../services/userProgressService';
import { 
  HistoricalPeriod, 
  HistoricalEvent, 
  Quest,
  MapLocation,
  HistoricalCharacter
} from '../types/historicalData';
import { useAppState } from '../hooks/useAppState';

// Main historical periods with rewards (used for configuration like colors and rewards)
export const MAIN_PERIODS_CONFIG = [
  { 
    id: 'period_1', 
    name: 'Thời kỳ Bắc thuộc', 
    years: '40 – 938', 
    color: 'blue',
    rewards: {
      experience: 500,
      coins: 250
    }
  },
  { 
    id: 'period_2', 
    name: 'Thời kỳ phong kiến độc lập', 
    years: '938 – 1858', 
    color: 'green',
    rewards: {
      experience: 1000,
      coins: 500
    }
  },
  { 
    id: 'period_3', 
    name: 'Thời kỳ Pháp thuộc', 
    years: '1858 – 1945', 
    color: 'red',
    rewards: {
      experience: 1500,
      coins: 750
    }
  },
  { 
    id: 'period_4', 
    name: 'Thời kỳ kháng chiến chống Pháp', 
    years: '1945 – 1954', 
    color: 'yellow',
    rewards: {
      experience: 2000,
      coins: 1000
    }
  },
  { 
    id: 'period_5', 
    name: 'Thời kỳ kháng chiến chống Mỹ', 
    years: '1954 – 1975', 
    color: 'purple',
    rewards: {
      experience: 2500,
      coins: 1250
    }
  },
  { 
    id: 'period_6', 
    name: 'Thời kỳ Đổi mới', 
    years: '1975 – 2000', 
    color: 'orange',
    rewards: {
      experience: 3000,
      coins: 1500
    }
  }
];

interface ExploreProps {
  onStartLearning: (period: HistoricalPeriod) => void;
  unlockedPeriods: string[];
  completedPeriods: string[];
}

const Explore: React.FC<ExploreProps> = ({ onStartLearning, unlockedPeriods, completedPeriods }) => {
  const { state } = useAppState();
  const [periods, setPeriods] = useState<HistoricalPeriod[]>([]);
  const [selectedView, setSelectedView] = useState<'timeline' | 'grid' | 'map'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [learningPhase, setLearningPhase] = useState<'reading' | 'quiz'>('reading');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [userStats, setUserStats] = useState(UserProgressService.getInstance().getUserStats());

  const historicalDataService = HistoricalDataService.getInstance();
  const userProgressService = UserProgressService.getInstance();

  useEffect(() => {
    // Subscribe to progress updates
    const unsubscribe = userProgressService.subscribe((stats) => {
      setUserStats(stats);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log('Explore: Starting data load...');
        
        // Load all necessary data
        await historicalDataService.loadData();
        const loadedPeriods = historicalDataService.getPeriods();
        console.log('Explore: Data loaded. Number of periods:', loadedPeriods.length);

        // Process and enrich the data
        const finalPeriods: HistoricalPeriod[] = MAIN_PERIODS_CONFIG.map(configPeriod => {
          const loadedPeriod = loadedPeriods.find(p => p.id === configPeriod.id);
          
          // Create the period object, merging config with loaded data
          const period: HistoricalPeriod = {
            id: configPeriod.id,
            name: configPeriod.name,
            startYear: parseInt(configPeriod.years.split(' – ')[0]) || 0,
            endYear: parseInt(configPeriod.years.split(' – ')[1]) || 0,
            description: loadedPeriod?.description || `Thông tin về thời kỳ ${configPeriod.name}`,
            events: loadedPeriod?.events || [],
            difficulty: loadedPeriod?.difficulty || 'medium',
            quests: generateQuestsFromEvents(loadedPeriod?.events || []),
            artifacts: loadedPeriod?.artifacts || [],
            characters: generateCharactersFromEvents(loadedPeriod?.events || []),
            mapLocations: generateLocationsFromEvents(loadedPeriod?.events || []),
            image: loadedPeriod?.image,
            unlocked: configPeriod.id === 'period_1' || unlockedPeriods.includes(configPeriod.id) || completedPeriods.includes(configPeriod.id),
            completed: completedPeriods.includes(configPeriod.id) || false,
            rewards: configPeriod.rewards,
            color: configPeriod.color,
          };

          return period;
        });
        
        setPeriods(finalPeriods);

        // If there's a selected period from main interface, set it and show its events
        const selectedPeriodFromMain = finalPeriods.find(p => p.id === state.selectedPeriod?.id);
        if (selectedPeriodFromMain) {
          setSelectedPeriod(selectedPeriodFromMain);
          // Automatically show the first event if available
          if (selectedPeriodFromMain.events && selectedPeriodFromMain.events.length > 0) {
            setSelectedEvent(selectedPeriodFromMain.events[0]);
            setLearningPhase('reading');
          }
        }

      } catch (error) {
        console.error('Explore: Error loading data:', error);
        setError('Không thể tải dữ liệu. Vui lòng thử lại sau.');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [retryCount, unlockedPeriods, completedPeriods, state.selectedPeriod]);

  // Helper functions to generate game content from historical data
  const generateQuestsFromEvents = (events: HistoricalEvent[]): Quest[] => {
    return events.map(event => {
      // Format content with rich HTML
      const formattedContent = `
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">Thông tin sự kiện</h3>
          
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="mb-2">
                  <span class="font-semibold text-gray-700 dark:text-gray-300">Thời gian:</span>
                  <span class="ml-2 text-gray-600 dark:text-gray-400">${event.year || 'Không xác định'}</span>
                </p>
                <p class="mb-2">
                  <span class="font-semibold text-gray-700 dark:text-gray-300">Loại sự kiện:</span>
                  <span class="ml-2 text-gray-600 dark:text-gray-400">${
                    event.type === 'battle' ? 'Trận đánh' :
                    event.type === 'rebellion' ? 'Khởi nghĩa' :
                    event.type === 'dynasty' ? 'Triều đại' :
                    event.type === 'cultural' ? 'Văn hóa' : 'Khác'
                  }</span>
                </p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Bối cảnh</h4>
              <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">${event.context}</p>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Mô tả</h4>
              <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">${event.description}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      return {
        id: `quest_${event.id}`,
        title: `Khám phá: ${event.heading}`,
        description: `Tìm hiểu về sự kiện ${event.heading} và ảnh hưởng của nó`,
        type: 'read_and_quiz',
        difficulty: 'medium',
        requirements: {
          current: 0,
          target: 1
        },
        rewards: {
          experience: 100,
          coins: 50
        },
        completed: false,
        content: {
          type: 'read_and_quiz',
          readingContent: {
            title: event.heading,
            content: formattedContent,
            image: event.image,
            audioUrl: event.audioUrl
          },
          questions: event.questions || [] // Use the event's questions instead of generating new ones
        }
      };
    });
  };

  const generateLocationsFromEvents = (events: HistoricalEvent[]): MapLocation[] => {
    return events
      .filter(event => event.locations && event.locations.length > 0)
      .map(event => ({
        id: `location_${event.id}`,
        name: event.locations![0],
        description: `Địa điểm diễn ra sự kiện ${event.heading}`,
        coordinates: {
          x: Math.random() * 80 + 10, // Random position for demo
          y: Math.random() * 80 + 10
        },
        type: 'battlefield' as const,
        unlocked: false,
        events: [event.id]
      }));
  };

  const generateCharactersFromEvents = (events: HistoricalEvent[]): HistoricalCharacter[] => {
    return events
      .filter(event => event.characters && event.characters.length > 0)
      .map(event => ({
        id: `character_${event.id}`,
        name: event.characters![0],
        title: 'Nhân vật lịch sử',
        description: `Nhân vật liên quan đến sự kiện ${event.heading}`,
        period: event.period,
        role: 'king' as const,
        unlocked: false,
        image: '/images/default-character.png' // Default image path
      }));
  };

  const handlePeriodSelect = (period: HistoricalPeriod) => {
    if (!period.unlocked) {
      return;
    }
    // Check if period has events
    if (!period.events || period.events.length === 0) {
      console.warn(`No events found for period ${period.name}`);
      return;
    }
    setSelectedPeriod(period);
  };

  const handleEventSelect = (event: HistoricalEvent) => {
    if (!event) {
      console.warn('No event data provided');
      return;
    }
    setSelectedEvent(event);
    setLearningPhase('reading');
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setQuizScore(0);
    setShowCompletionMessage(false);
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (isCorrect) {
      setQuizScore(prev => prev + 20);
    }
    setShowCompletionMessage(false);
  };

  const handleEventComplete = (event: HistoricalEvent, score: number) => {
    // Calculate rewards
    const eventRewards = event.rewards || { experience: 0, coins: 0 };
    const bonusExperience = Math.floor((score / 100) * eventRewards.experience);
    const totalExperience = eventRewards.experience + bonusExperience;
    
    // Update progress through UserProgressService
    userProgressService.updateProgressAfterEvent(
      event.id,
      event.period,
      totalExperience,
      eventRewards.coins
    );

    // Show completion message
    setShowCompletionMessage(true);
    setTimeout(() => setShowCompletionMessage(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">
          Đang tải dữ liệu...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-red-50 dark:bg-red-900/30 rounded-xl p-6 max-w-md text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => setRetryCount(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 mb-12"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Khám phá Lịch sử Việt Nam
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Hành trình khám phá lịch sử đầy thú vị đang chờ đón bạn
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent" />
      </motion.div>

      {/* Header Section with Stats */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Các thời kỳ lịch sử
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Khám phá và học hỏi về các thời kỳ lịch sử Việt Nam
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <FiBook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Đã hoàn thành</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {completedPeriods.length}/{periods.length}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <FiStar className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Điểm kinh nghiệm</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {userStats.totalExperience}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <FiGift className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Coins</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {userStats.totalCoins}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Timeline/Grid/Map View */}
        <div className="lg:col-span-2">
          {selectedPeriod ? (
            // Show events list when a period is selected
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPeriod.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {selectedPeriod.description}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPeriod(null)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Quay lại
                </motion.button>
              </div>

              {selectedPeriod.events && selectedPeriod.events.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedPeriod.events.map((event: HistoricalEvent, index: number) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700"
                      onClick={() => handleEventSelect(event)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <FiBook className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {event.heading}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                            {event.context}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <FiStar className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {selectedPeriod.rewards.experience} XP
                              </span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                handleEventSelect(event);
                              }}
                              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                            >
                              Bắt đầu học
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <FiBook className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Chưa có bài học nào trong thời kỳ này
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Show periods grid when no period is selected
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {periods.map(period => {
                const isCompleted = period.completed;
                const isUnlocked = period.unlocked;

                return (
                  <motion.div
                    key={period.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => isUnlocked && handlePeriodSelect(period)}
                    className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 ${
                      !isUnlocked ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {/* Status Ribbon */}
                    <div className="absolute top-0 right-0">
                      {isCompleted ? (
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-xs font-bold px-3 py-1.5 rounded-bl-lg text-white">
                          <FiCheck className="inline mr-1" /> Hoàn thành
                        </div>
                      ) : !isUnlocked ? (
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-xs font-bold px-3 py-1.5 rounded-bl-lg text-white">
                          <FiLock className="inline mr-1" /> Khóa
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-xs font-bold px-3 py-1.5 rounded-bl-lg text-white">
                          <FiUnlock className="inline mr-1" /> Mở khóa
                        </div>
                      )}
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${period.color}-500 to-${period.color}-600 flex items-center justify-center flex-shrink-0`}>
                        <FiCalendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {period.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          {period.startYear} – {period.endYear}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                          {period.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FiStar className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {period.rewards?.experience || 0} XP
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FiGift className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {period.rewards?.coins || 0} Coins
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column - Challenges and Progress */}
        <div className="space-y-8">
          {/* Daily Challenges */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thử thách hằng ngày
            </h3>
            <div className="space-y-4">
              {userStats.dailyChallenges.map(challenge => (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                      <FiClock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {challenge.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {challenge.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                              style={{
                                width: `${(challenge.requirements.current / challenge.requirements.target) * 100}%`
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {challenge.requirements.current}/{challenge.requirements.target}
                          </span>
                        </div>
                        {challenge.completed && (
                          <FiCheck className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Weekly Challenges */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thử thách hằng tuần
            </h3>
            <div className="space-y-4">
              {userStats.weeklyChallenges.map(challenge => (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600">
                      <FiCalendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {challenge.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {challenge.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                              style={{
                                width: `${(challenge.requirements.current / challenge.requirements.target) * 100}%`
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {challenge.requirements.current}/{challenge.requirements.target}
                          </span>
                        </div>
                        {challenge.completed && (
                          <FiCheck className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white"
                onClick={() => {
                  setSelectedEvent(null);
                  setLearningPhase('reading');
                  setCurrentQuestionIndex(0);
                  setSelectedAnswers([]);
                  setQuizScore(0);
                }}
              >
                Đóng
              </button>
              
              {learningPhase === 'reading' ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    {selectedEvent.heading}
                  </h2>
                  
                  <div className="prose dark:prose-invert max-w-none">
                    <div className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-2">Bối cảnh</h3>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {selectedEvent.context}
                      </p>
                    </div>
                    
                    <div className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-2">Diễn biến</h3>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {selectedEvent.description}
                      </p>
                    </div>

                    {selectedEvent.characters && selectedEvent.characters.length > 0 && (
                      <div className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-2">Nhân vật lịch sử</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                          {selectedEvent.characters.map((character, index) => (
                            <li key={index}>{character}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedEvent.locations && selectedEvent.locations.length > 0 && (
                      <div className="mb-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-2">Địa điểm lịch sử</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                          {selectedEvent.locations.map((location, index) => (
                            <li key={index}>{location}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                      onClick={() => setLearningPhase('quiz')}
                    >
                      Tiếp tục đến phần câu hỏi
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    Câu hỏi {currentQuestionIndex + 1}/{selectedEvent.questions?.length}
                  </h2>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <p className="text-lg font-medium mb-6">
                      {selectedEvent.questions?.[currentQuestionIndex]?.question}
                    </p>
                    
                    <div className="space-y-4">
                      {selectedEvent.questions?.[currentQuestionIndex]?.options.map((option, index) => {
                        const isSelected = selectedAnswers[currentQuestionIndex] === index;
                        const isCorrect = index === selectedEvent.questions?.[currentQuestionIndex]?.correctAnswer;
                        const showResult = selectedAnswers[currentQuestionIndex] !== undefined;
                        
                        let buttonStyle = 'border-gray-200 dark:border-gray-700 hover:border-blue-300';
                        if (showResult) {
                          if (isSelected) {
                            buttonStyle = isCorrect 
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300';
                          } else if (isCorrect) {
                            buttonStyle = 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300';
                          }
                        }

                        return (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full p-4 text-left rounded-lg border transition-all ${buttonStyle}`}
                            onClick={() => {
                              if (showResult) return;
                              const newAnswers = [...selectedAnswers];
                              newAnswers[currentQuestionIndex] = index;
                              setSelectedAnswers(newAnswers);
                              const isCorrect = index === selectedEvent.questions?.[currentQuestionIndex]?.correctAnswer;
                              handleAnswerSubmit(isCorrect);
                            }}
                            disabled={showResult}
                          >
                            {option}
                          </motion.button>
                        );
                      })}
                    </div>

                    {selectedAnswers[currentQuestionIndex] !== undefined && (
                      <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {selectedAnswers[currentQuestionIndex] === selectedEvent.questions?.[currentQuestionIndex]?.correctAnswer ? (
                            <span className="text-green-600 dark:text-green-400">
                              ✓ Chính xác! {selectedEvent.questions?.[currentQuestionIndex]?.explanation || 'Đây là đáp án đúng.'}
                            </span>
                          ) : (
                            <span className="text-red-600 dark:text-red-400">
                              ✗ Chưa chính xác. Đáp án đúng là: {selectedEvent.questions?.[currentQuestionIndex]?.options[selectedEvent.questions?.[currentQuestionIndex]?.correctAnswer || 0]}
                              {selectedEvent.questions?.[currentQuestionIndex]?.explanation && (
                                <span className="block mt-2 text-gray-600 dark:text-gray-400">
                                  {selectedEvent.questions?.[currentQuestionIndex]?.explanation}
                                </span>
                              )}
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    {currentQuestionIndex > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                      >
                        Câu trước
                      </motion.button>
                    )}
                    
                    {currentQuestionIndex < (selectedEvent.questions?.length || 0) - 1 ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all ml-auto"
                        onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                        disabled={selectedAnswers[currentQuestionIndex] === undefined}
                      >
                        Câu tiếp theo
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all ml-auto"
                        onClick={() => {
                          const correctAnswers = selectedEvent.questions?.reduce(
                            (acc, q, idx) => acc + (selectedAnswers[idx] === q.correctAnswer ? 1 : 0),
                            0
                          ) || 0;
                          handleEventComplete(selectedEvent, correctAnswers * 20);
                        }}
                        disabled={selectedAnswers[currentQuestionIndex] === undefined}
                      >
                        Hoàn thành
                      </motion.button>
                    )}
                  </div>
                </div>
              )}
              
              {quizScore > 0 && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
                    Kết quả bài học
                  </h3>
                  <p className="text-green-600 dark:text-green-400 mb-4">
                    Bạn đã trả lời đúng {quizScore / 20} trên {selectedEvent.questions?.length} câu hỏi!
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <FiStar className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        +{selectedEvent.rewards?.experience || 0} XP
                      </span>
                      <FiGift className="w-5 h-5 text-green-500 ml-4" />
                      <span className="text-gray-700 dark:text-gray-300">
                        +{selectedEvent.rewards?.coins || 0} Coins
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      onClick={() => setSelectedEvent(null)}
                    >
                      Đóng bài học
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Message */}
      <AnimatePresence>
        {showCompletionMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <FiCheck className="w-5 h-5" />
              <span>Hoàn thành bài học! +{selectedEvent?.rewards?.experience || 0} XP</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Explore; 