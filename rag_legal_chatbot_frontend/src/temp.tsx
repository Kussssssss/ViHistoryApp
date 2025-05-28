import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiSun,
  FiMoon,
  FiBookOpen,
  FiMap,
  FiBook,
  FiSettings,
  FiHome,
  FiLock,
  FiAward,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiChevronRight,
  FiChevronLeft,
  FiTrendingUp,
  FiGift,
  FiCalendar,
  FiClock,
  FiCheckCircle,
} from 'react-icons/fi';
import './App.css';

// Theme configuration
// const theme = { /* ... */ };

// Types
// interface User { /* ... */ }

// Keep necessary interfaces if used elsewhere (checking existing code confirms HistoricalPeriod and Quiz are used)
interface HistoricalPeriod {
  id: string;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  image: string;
  unlocked: boolean;
  completed: boolean;
  audio?: string;
  video?: string;
  quiz?: Quiz[];
  difficulty: 'easy' | 'medium' | 'hard';
  rewards: {
    experience: number;
    items: string[];
  };
  imageUrl: string;
  years: string;
}

interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// Thêm interface cho thử thách
interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'quiz' | 'reading' | 'practice';
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
}

// Sample data (Keep sample data if still used in rendering, even if state is removed)
const historicalPeriods: HistoricalPeriod[] = [
  {
    id: 'period-40-938',
    name: 'Thời kỳ Bắc thuộc',
    description: 'Giai đoạn Việt Nam chịu sự cai trị của các triều đại phong kiến Trung Quốc.',
    startYear: 40,
    endYear: 938,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Annam_Protectorate_%28French_Indochina%29.png/220px-Annam_Protectorate_%28French_Indochina%29.png',
    unlocked: true,
    completed: false,
    audio: '/audio/periods/bac-thuoc.mp3',
    difficulty: 'medium',
    rewards: {
      experience: 200,
      items: ['artifact_1', 'achievement_1']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Annam_Protectorate_%28French_Indochina%29.png/220px-Annam_Protectorate_%28French_Indochina%29.png',
    years: '111 TCN - 938',
  },
  {
    id: 'period-938-1858',
    name: 'Thời kỳ Độc lập tự chủ',
    description: 'Giai đoạn Việt Nam giành lại độc lập và xây dựng nhà nước phong kiến trung ương tập quyền.',
    startYear: 938,
    endYear: 1858,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Later_L%C3%AA_Dynasty.svg/220px-Flag_of_the_Later_L%C3%AA_Dynasty.svg.png',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/doc-lap.mp3',
    difficulty: 'hard',
    rewards: {
      experience: 300,
      items: ['artifact_2', 'achievement_2']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Later_L%C3%AA_Dynasty.svg/220px-Flag_of_the_Later_L%C3%AA_Dynasty.svg.png',
    years: '938 - 1858',
  },
  {
    id: 'period-1858-1945',
    name: 'Thời kỳ Pháp thuộc',
    description: 'Giai đoạn Việt Nam trở thành thuộc địa của thực dân Pháp.',
    startYear: 1858,
    endYear: 1945,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/220px-Flag_of_France.svg.png',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/phap-thuoc.mp3',
    difficulty: 'hard',
    rewards: {
      experience: 400,
      items: ['artifact_3', 'achievement_3']
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/220px-Flag_of_France.svg.png',
    years: '1858 - 1945',
  },
  {
    id: 'period-1945-1954',
    name: 'Thời kỳ Kháng chiến chống Pháp',
    description: 'Cuộc kháng chiến chống lại sự trở lại của thực dân Pháp sau Chiến tranh thế giới thứ hai.',
    startYear: 1945,
    endYear: 1954,
    image: 'https://hanoimoi.vn/data/images/0/2019/12/thang12/19/hanhkhangchien%20(1).jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/khang-chien-phap.mp3',
    difficulty: 'medium',
    rewards: {
      experience: 300,
      items: ['artifact_4', 'achievement_4']
    },
    imageUrl: 'https://hanoimoi.vn/data/images/0/2019/12/thang12/19/hanhkhangchien%20(1).jpg',
    years: '1945 - 1954',
  },
  {
    id: 'period-1954-1975',
    name: 'Thời kỳ Kháng chiến chống Mỹ',
    description: 'Cuộc kháng chiến chống lại sự can thiệp của Đế quốc Mỹ và chính quyền miền Nam Việt Nam.',
    startYear: 1954,
    endYear: 1975,
    image: 'https://dantri.com.vn/upload/3-2013/Image/News/hh/bao%20anh/19640109.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/khang-chien-my.mp3',
    difficulty: 'hard',
    rewards: {
      experience: 400,
      items: ['artifact_5', 'achievement_5']
    },
    imageUrl: 'https://dantri.com.vn/upload/3-2013/Image/News/hh/bao%20anh/19640109.jpg',
    years: '1954 - 1975',
  },
  {
    id: 'period-1975-2000',
    name: 'Thời kỳ Đổi mới',
    description: 'Giai đoạn Việt Nam thực hiện công cuộc đổi mới đất nước, phát triển kinh tế xã hội.',
    startYear: 1975,
    endYear: 2000,
    image: 'https://icdn.dantri.com.vn/thumb_w/660/2019/08/30/img2385-1567145745987.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/doi-moi.mp3',
    difficulty: 'medium',
    rewards: {
      experience: 300,
      items: ['artifact_6', 'achievement_6']
    },
    imageUrl: 'https://icdn.dantri.com.vn/thumb_w/660/2019/08/30/img2385-1567145745987.jpg',
    years: '1975 - 2000',
  }
];

// Thêm dữ liệu thử thách
const todayChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Kiểm tra kiến thức về thời kỳ Bắc thuộc',
    description: 'Trả lời 5 câu hỏi về các sự kiện quan trọng trong thời kỳ Bắc thuộc',
    points: 50,
    type: 'quiz',
    difficulty: 'medium',
    completed: false
  },
  {
    id: '2',
    title: 'Đọc hiểu về cuộc khởi nghĩa Hai Bà Trưng',
    description: 'Đọc và tóm tắt nội dung về cuộc khởi nghĩa Hai Bà Trưng',
    points: 30,
    type: 'reading',
    difficulty: 'easy',
    completed: false
  },
  {
    id: '3',
    title: 'Phân tích các chính sách cai trị của nhà Hán',
    description: 'Viết bài phân tích về các chính sách cai trị của nhà Hán đối với nước ta',
    points: 70,
    type: 'practice',
    difficulty: 'hard',
    completed: false
  }
];

// Add new animations
// const pageTransition = { /* ... */ };

const cardHover = {
  scale: 1.02,
  y: -5,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

const buttonTap = {
  scale: 0.95,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

// Add new interactive elements
const InteractiveProgressBar = ({ progress, color }: { progress: number, color: string }) => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: `${progress}%` }}
    transition={{ duration: 1, ease: "easeOut" }}
    className={`h-2 rounded-full ${color}`}
  />
);

// const AchievementBadge = ({ achievement }: { achievement: Achievement }) => { /* ... */ };

// Add collection data structure inside the component
const LearningInterface: React.FC = () => {
  // Remove unused state variables and setters
  // const [user, setUser] = useState<User>({ /* ... */ });
  // const [showChatbot, setShowChatbot] = useState(false);
  // const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  // const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  // const [showQuiz, setShowQuiz] = useState(false);
  // const [quizScore, setQuizScore] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  // Add new state for displaying period details in a modal
  // const [selectedPeriodDetail, setSelectedPeriodDetail] = useState<HistoricalPeriod | null>(null);
  // const [showPeriodDetailModal, setShowPeriodDetailModal] = useState(false);

  // Remove unused state for animations
  // const [isPageLoaded, setIsPageLoaded] = useState(false);
  // const [showAchievement, setShowAchievement] = useState(false);
  // const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);

  // Add new state for period navigation
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState(0);
  const periodsPerPage = 3;

  // Navigation items
  const navItems = [
    { icon: <FiHome />, label: 'Trang chủ', id: 'home' },
    { icon: <FiMap />, label: 'Khám phá', id: 'explore' },
    { icon: <FiBook />, label: 'Bộ sưu tập', id: 'collection' },
    { icon: <FiAward />, label: 'Xếp hạng', id: 'ranking' },
    { icon: <FiSettings />, label: 'Cài đặt', id: 'settings' }
  ];

  // Add new effects
  useEffect(() => {
    // Remove unused isPageLoaded logic
    // setIsPageLoaded(true);
  }, []);

  // Handle period selection
  const handlePeriodSelect = (period: HistoricalPeriod) => {
    // This function is used, but setSelectedPeriod was removed. We should keep this function
    // if it's intended for future use, or remove it if not. Based on the structure,
    // it seems intended for when a period card is clicked.
    // I will keep the function but comment out the now-missing state update.
    // setSelectedPeriod(period);
    if (period.audio) {
      setIsPlaying(true);
    }
    // We probably also want to show details of the selected period here in the future.
    console.log('Period selected:', period.name);
    // Set selected period for detail view and open modal
    // setSelectedPeriodDetail(period);
    // setShowPeriodDetailModal(true);
  };

  // Handle closing the period detail modal
  // const handleClosePeriodDetailModal = () => {
  //   setSelectedPeriodDetail(null);
  //   setShowPeriodDetailModal(false);
  //   // Optionally pause audio/video if playing
  //   setIsPlaying(false);
  // };

  // Handle quiz completion
  // const handleQuizComplete = (score: number) => { /* ... */ };

  // Add new handlers
  // This function is used to trigger achievement notification
  // const handleAchievementUnlock = (achievement: Achievement) => { /* ... */ };

  // Apply theme styles
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Add navigation handlers
  const handlePrevPeriods = () => {
    setCurrentPeriodIndex(prev => Math.max(0, prev - periodsPerPage));
  };

  const handleNextPeriods = () => {
    setCurrentPeriodIndex(prev => 
      Math.min(historicalPeriods.length - periodsPerPage, prev + periodsPerPage)
    );
  };

  // Add collection data structure inside the component
  const collections = {
    artifacts: [
      {
        id: 'artifact_1',
        name: 'Trống đồng Đông Sơn',
        description: 'Hiện vật tiêu biểu của văn hóa Đông Sơn, thể hiện trình độ đúc đồng cao của người Việt cổ',
        period: 'period-40-938',
        image: 'https://via.placeholder.com/400x300?text=Trong+Dong',
        rarity: 'rare',
        unlocked: true
      },
      {
        id: 'artifact_2',
        name: 'Bia Tiến sĩ Văn Miếu',
        description: 'Di sản tư liệu thế giới, ghi danh các tiến sĩ qua các khoa thi',
        period: 'period-938-1858',
        image: 'https://via.placeholder.com/400x300?text=Bia+Tien+Si',
        rarity: 'epic',
        unlocked: false
      },
      {
        id: 'artifact_3',
        name: 'Tuyên ngôn Độc lập',
        description: 'Văn kiện lịch sử quan trọng, tuyên bố nền độc lập của Việt Nam',
        period: 'period-1945-1954',
        image: 'https://via.placeholder.com/400x300?text=Tuyen+Ngon+Doc+Lap',
        rarity: 'legendary',
        unlocked: false
      }
    ],
    achievements: [
      {
        id: 'achievement_1',
        name: 'Khởi đầu hành trình',
        description: 'Hoàn thành bài học đầu tiên về lịch sử Việt Nam',
        icon: '🏆',
        progress: 100,
        completed: true
      },
      {
        id: 'achievement_2',
        name: 'Nhà sử học trẻ',
        description: 'Hoàn thành 5 bài học về lịch sử',
        icon: '📚',
        progress: 60,
        completed: false
      },
      {
        id: 'achievement_3',
        name: 'Bậc thầy lịch sử',
        description: 'Hoàn thành tất cả các bài học',
        icon: '👑',
        progress: 20,
        completed: false
      }
    ]
  };

  const [selectedCollection, setSelectedCollection] = useState<'artifacts' | 'achievements'>('artifacts');

  const learningJourney = {
    currentLevel: 5,
    experience: 1250,
    nextLevelExperience: 2000,
    completedLessons: 12,
    totalLessons: 30,
    currentStreak: 3,
    longestStreak: 7,
    challenges: [
      {
        id: 'challenge_1',
        name: 'Khám phá thời kỳ Bắc thuộc',
        description: 'Hoàn thành 3 bài học về thời kỳ Bắc thuộc',
        progress: 2,
        total: 3,
        reward: {
          experience: 100,
          items: ['artifact_1']
        },
        deadline: '2024-03-20'
      },
      {
        id: 'challenge_2',
        name: 'Tìm hiểu về các cuộc khởi nghĩa',
        description: 'Tìm hiểu về 5 cuộc khởi nghĩa tiêu biểu trong lịch sử',
        progress: 3,
        total: 5,
        reward: {
          experience: 150,
          items: ['achievement_2']
        },
        deadline: '2024-03-25'
      }
    ]
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation Bar - Fixed at top */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FiBookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lịch Sử Việt Nam
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(item.id)}
                className={`p-2 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                title={item.label}
              >
                {item.icon}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content - Scrollable */}
      <main className="flex-1 pt-16 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Welcome Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-8 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Xin chào, Học sinh!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sẵn sàng khám phá lịch sử Việt Nam chưa?
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Cấp độ</div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Streak</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">0</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-purple-400">Xếp hạng</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Mới bắt đầu</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced progress bar */}
              <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <InteractiveProgressBar
                  progress={0}
                  color="bg-gradient-to-r from-blue-400 to-purple-400"
                />
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-0 w-1 h-full bg-white/50"
                />
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FiTrendingUp className="w-6 h-6 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    0 / 100 XP
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Bắt đầu khám phá
                </motion.button>
              </div>
            </motion.div>
          </motion.section>

          {/* Historical Periods */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Các thời kỳ lịch sử
              </h2>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevPeriods}
                  disabled={currentPeriodIndex === 0}
                  className={`p-2 rounded-lg ${
                    currentPeriodIndex === 0
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiChevronLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextPeriods}
                  disabled={currentPeriodIndex + periodsPerPage >= historicalPeriods.length}
                  className={`p-2 rounded-lg ${
                    currentPeriodIndex + periodsPerPage >= historicalPeriods.length
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <FiChevronRight />
                </motion.button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {historicalPeriods
                .slice(currentPeriodIndex, currentPeriodIndex + periodsPerPage)
                .map((period, index) => (
                  <motion.div
                    key={period.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={cardHover}
                    whileTap={buttonTap}
                    onClick={() => handlePeriodSelect(period)}
                    className="bg-white/80 dark:bg-gray-900/80 rounded-xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
                  >
                    <div className="relative h-48">
                      {/* Ensure image path is correct relative to public directory */}
                      <img
                        src={period.image}
                        alt={period.name}
                        className="w-full h-full object-cover"
                      />
                      {!period.unlocked && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <FiLock className="w-12 h-12 text-white" />
                        </div>
                      )}
                      {period.audio && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-2 right-2 flex space-x-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <motion.button
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 rounded-full bg-white/80 text-gray-900 hover:bg-white shadow-lg"
                          >
                            {isPlaying ? <FiPause /> : <FiPlay />}
                          </motion.button>
                          <motion.button
                            whileHover={buttonHover}
                            whileTap={buttonTap}
                            onClick={() => setIsMuted(!isMuted)}
                            className="p-2 rounded-full bg-white/80 text-gray-900 hover:bg-white shadow-lg"
                          >
                            {isMuted ? <FiVolumeX /> : <FiVolume2 />}
                          </motion.button>
                        </motion.div>
                      )}
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          period.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                          period.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {period.difficulty === 'easy' ? 'Dễ' :
                           period.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {period.name}
                      </h3>
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
                        <div className="flex items-center space-x-2">
                          <FiGift className="text-yellow-500" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {period.rewards.experience} XP
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => period.unlocked && handlePeriodSelect(period)}
                        disabled={!period.unlocked}
                        className={`mt-4 w-full py-2 rounded-lg ${
                          period.unlocked
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {period.unlocked ? 'Khám phá' : 'Chưa mở khóa'}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          {/* Collection */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Bộ sưu tập
              </h2>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCollection('artifacts')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCollection === 'artifacts'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Hiện vật
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCollection('achievements')}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCollection === 'achievements'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  Thành tựu
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCollection === 'artifacts' ? (
                collections.artifacts.map((artifact, index) => (
                  <motion.div
                    key={artifact.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={cardHover}
                    whileTap={buttonTap}
                    className="bg-white/80 dark:bg-gray-900/80 rounded-xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="relative h-48">
                      <img
                        src={artifact.image}
                        alt={artifact.name}
                        className="w-full h-full object-cover"
                      />
                      {!artifact.unlocked && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <FiLock className="w-12 h-12 text-white" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          artifact.rarity === 'common' ? 'bg-gray-100 text-gray-800' :
                          artifact.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                          artifact.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {artifact.rarity === 'common' ? 'Thường' :
                           artifact.rarity === 'rare' ? 'Hiếm' :
                           artifact.rarity === 'epic' ? 'Siêu hiếm' : 'Huyền thoại'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {artifact.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {artifact.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FiClock className="text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {historicalPeriods.find(p => p.id === artifact.period)?.name}
                          </span>
                        </div>
                        {artifact.unlocked && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                          >
                            Xem chi tiết
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                collections.achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={cardHover}
                    whileTap={buttonTap}
                    className="bg-white/80 dark:bg-gray-900/80 rounded-xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-4xl">{achievement.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {achievement.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${achievement.progress}%` }}
                          className="h-full bg-blue-500 rounded-full"
                        />
                      </div>
                      <div className="mt-2 text-right">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {achievement.progress}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </section>

          {/* Learning Journey */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hành trình học tập
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cấp độ {learningJourney.currentLevel}
                </span>
                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(learningJourney.experience / learningJourney.nextLevelExperience) * 100}%` }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {learningJourney.experience}/{learningJourney.nextLevelExperience} XP
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Progress Overview */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={cardHover}
                className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Tiến độ của bạn
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FiBook className="text-blue-500" />
                      <span className="text-gray-600 dark:text-gray-300">Bài học đã hoàn thành</span>
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">
                      {learningJourney.completedLessons}/{learningJourney.totalLessons}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FiCalendar className="text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">Chuỗi ngày học</span>
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">
                      {learningJourney.currentStreak} ngày
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FiAward className="text-yellow-500" />
                      <span className="text-gray-600 dark:text-gray-300">Chuỗi dài nhất</span>
                    </div>
                    <span className="text-gray-900 dark:text-white font-semibold">
                      {learningJourney.longestStreak} ngày
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Daily Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={cardHover}
                className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Thử thách hôm nay
                </h3>
                <div className="space-y-4">
                  {todayChallenges.map((challenge) => (
                    <motion.div
                      key={challenge.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg border ${
                        challenge.completed 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-white border-gray-200 hover:border-blue-300'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{challenge.title}</h4>
                          <p className="text-gray-600 mb-2">{challenge.description}</p>
                          <div className="flex items-center space-x-4">
                            <span className={`px-2 py-1 rounded-full text-sm ${
                              challenge.difficulty === 'easy' 
                                ? 'bg-green-100 text-green-800'
                                : challenge.difficulty === 'medium'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {challenge.difficulty === 'easy' ? 'Dễ' : 
                               challenge.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
                            </span>
                            <span className="text-blue-600 font-medium">
                              {challenge.points} điểm
                            </span>
                            <span className={`px-2 py-1 rounded-full text-sm ${
                              challenge.type === 'quiz' 
                                ? 'bg-purple-100 text-purple-800'
                                : challenge.type === 'reading'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-orange-100 text-orange-800'
                            }`}>
                              {challenge.type === 'quiz' ? 'Trắc nghiệm' :
                               challenge.type === 'reading' ? 'Đọc hiểu' : 'Thực hành'}
                            </span>
                          </div>
                        </div>
                        <button
                          className={`ml-4 px-4 py-2 rounded-lg ${
                            challenge.completed
                              ? 'bg-green-500 text-white'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          } transition-colors duration-300`}
                          onClick={() => {
                            // TODO: Implement challenge completion logic
                            console.log(`Starting challenge: ${challenge.id}`);
                          }}
                        >
                          {challenge.completed ? (
                            <FiCheckCircle className="w-5 h-5" />
                          ) : (
                            'Bắt đầu'
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Period Detail Modal */}
          {/* ... existing modal UI ... */}

        </div> {/* Closing div for max-w-7xl */}
      </main> {/* Closing main tag */}
    </div> /* Closing div tag for flex flex-col h-screen */
  );
};

export default LearningInterface;