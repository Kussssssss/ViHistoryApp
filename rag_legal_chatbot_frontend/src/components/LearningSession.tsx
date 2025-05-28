import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBook, 
  FiAward, 
  FiStar, 
  FiGift,
  FiChevronRight,
  FiChevronLeft,
  FiMap,
  FiClock,
  FiUsers,
  FiTarget,
  FiCheck,
  FiX,
  FiHelpCircle,
  FiPlay,
  FiPause,
  FiSkipForward,
  FiSkipBack
} from 'react-icons/fi';
import { HistoricalEvent, HistoricalPeriod } from '../types/historicalData';

interface LearningContent {
  id: string;
  type: 'story' | 'quiz' | 'timeline';
  content: string;
  options?: string[];
  correctAnswer?: string;
  points: number;
  year?: number;
  heading?: string;
  relatedStoryId?: string;
  events?: HistoricalEvent[];
}

interface LearningSessionProps {
  period: HistoricalPeriod;
  onComplete: (score: number, rewards: any) => void;
  onExit: () => void;
}

const LearningSession: React.FC<LearningSessionProps> = ({ period, onComplete, onExit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showRewards, setShowRewards] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [completedCheckpoints, setCompletedCheckpoints] = useState<number[]>([]);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [learningContent, setLearningContent] = useState<LearningContent[]>([]);
  const [checkpointIndex, setCheckpointIndex] = useState(0);

  // Transform historical events into learning content
  useEffect(() => {
    if (period && period.events && period.events.length > 0) { // Ensure period and events exist and are not empty
      console.log('LearningSession: Processing events for period:', period.name, ', total events:', period.events.length);
      const content: LearningContent[] = [];
      const processedContexts = new Set<string>(); // To track unique context/heading combinations
      const eventsWithYears: HistoricalEvent[] = []; // To collect events with years for timeline

      // Group events by heading and context to handle duplicates and related quizzes
      const groupedEvents = period.events.reduce((acc, event) => {
        // Use a combined key for grouping, consider heading might also repeat with context
        const key = `${event.heading || 'No Heading'}-${event.context || 'No Context'}`; // Create a unique key
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(event);

        // Collect events with years for a potential timeline activity
        if (event.year !== undefined && event.year !== null) {
          eventsWithYears.push(event);
        }

        return acc;
      }, {} as { [key: string]: HistoricalEvent[] });

      console.log('LearningSession: Grouped events:', groupedEvents);

      // Create learning content based on grouped events
      Object.keys(groupedEvents).forEach((key, index) => {
        const eventsInGroup = groupedEvents[key];
        const mainEvent = eventsInGroup[0]; // Use the first event in the group as the base for story

        // Add the story content (unique context/heading)
        if (mainEvent.context) {
          const storyId = `story-${index}-${mainEvent.id || mainEvent.heading?.replace(/\s+/g, '-').toLowerCase() || 'unknown'}`;
           console.log('LearningSession: Adding story content:', storyId);
          content.push({
            id: storyId,
            type: 'story',
            content: mainEvent.context,
            points: 10,
            heading: mainEvent.heading // Include heading for display
          } as LearningContent); // Cast to LearningContent

          // Add related quiz questions from all events in this group
          eventsInGroup.forEach(event => {
            if (event.question && event.answer) {
              const quizId = `quiz-${event.id || Date.now()}-${Math.random().toString(36).substring(7)}`; // Generate unique quiz ID
               console.log('LearningSession: Adding quiz content:', quizId);
              // Simple shuffle for options (can be improved with wrong answers from other events)
              const options = [event.answer, 'Đáp án khác 1', 'Đáp án khác 2', 'Đáp án khác 3'].sort(() => Math.random() - 0.5);
              content.push({
                id: quizId,
                type: 'quiz',
                content: event.question,
                options: options,
                correctAnswer: event.answer,
                points: 20,
                relatedStoryId: storyId // Link quiz to the story it follows
              } as LearningContent); // Cast to LearningContent
            }
          });
        }
      });

      // Add timeline content if there are events with years and it hasn't been added
       if (eventsWithYears.length > 0 && !content.some(c => c.type === 'timeline')) {
          console.log('LearningSession: Adding timeline content.');
         content.push({
           id: 'timeline-activity',
           type: 'timeline',
           content: 'Sắp xếp các sự kiện theo thứ tự thời gian',
           points: 30,
           events: eventsWithYears // Pass events with years to the timeline component
         } as LearningContent); // Cast to LearningContent
       }

      setLearningContent(content);
      console.log('LearningSession: Final learning content structure:', content);

    } else if (period && (!period.events || period.events.length === 0)) {
        console.warn('LearningSession: Period has no events.', period);
        // Optionally set an error state or show a message
    } else {
         console.error('LearningSession: Period or events are undefined.', period);
    }

  }, [period]); // Re-run effect if period changes

  // Calculate total possible points based on difficulty
  const getDifficultyMultiplier = () => {
    switch (selectedDifficulty) {
      case 'easy': return 1;
      case 'medium': return 1.5;
      case 'hard': return 2;
    }
  };

  // Handle checkpoint completion
  const handleCheckpointComplete = (checkpointId: number, points: number) => {
    if (!completedCheckpoints.includes(checkpointId)) {
      setCompletedCheckpoints([...completedCheckpoints, checkpointId]);
      setScore(score + points * getDifficultyMultiplier());
    }
  };

  // Handle session completion
  const handleComplete = () => {
    const finalScore = Math.round(score * getDifficultyMultiplier());
    const rewards = {
      experience: finalScore,
      coins: Math.floor(finalScore / 2),
      items: ['Huy hiệu ' + period.name],
      achievements: ['Hoàn thành ' + period.name]
    };
    setShowRewards(true);
    onComplete(finalScore, rewards);
  };

  // Render introduction screen
  const renderIntroduction = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full mx-4"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {period.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {period.description}
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Chọn độ khó
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {(['easy', 'medium', 'hard'] as const).map((difficulty) => (
              <motion.button
                key={difficulty}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`p-4 rounded-xl ${
                  selectedDifficulty === difficulty
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                {difficulty === 'easy' ? 'Dễ' :
                 difficulty === 'medium' ? 'Trung bình' : 'Khó'}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Nội dung học tập
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FiBook className="w-5 h-5 text-blue-500" />
              <span className="text-gray-900 dark:text-white">
                {learningContent.filter(c => c.type === 'story').length} bài học
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FiTarget className="w-5 h-5 text-purple-500" />
              <span className="text-gray-900 dark:text-white">
                {learningContent.filter(c => c.type === 'quiz').length} câu hỏi
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FiClock className="w-5 h-5 text-green-500" />
              <span className="text-gray-900 dark:text-white">
                {learningContent.filter(c => c.type === 'timeline').length} bài tập sắp xếp thời gian
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExit}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
          >
            Thoát
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowIntroduction(false)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Bắt đầu học
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  // Render main content
  const renderContent = () => {
    if (!learningContent.length) return null;
    const content = learningContent[currentStep];

    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isPaused ? <FiPlay className="w-6 h-6" /> : <FiPause className="w-6 h-6" />}
            </motion.button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {content.type === 'story' ? 'Bài học' :
                 content.type === 'quiz' ? 'Câu hỏi' :
                 'Sắp xếp thời gian'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Bước {currentStep + 1} / {learningContent.length}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FiStar className="w-5 h-5 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {score}
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
          {content.type === 'story' && (
            <div className="prose dark:prose-invert max-w-none">
              {content.content}
            </div>
          )}

          {content.type === 'quiz' && (
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {content.content}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {content.options?.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (option === content.correctAnswer) {
                        handleCheckpointComplete(currentStep, content.points);
                      }
                    }}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {content.type === 'timeline' && (
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {content.content}
              </p>
              {/* Timeline sorting component will be implemented here */}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${
              currentStep === 0
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            <FiChevronLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </motion.button>

          {currentStep < learningContent.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(currentStep + 1523)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2"
            >
              <span>Tiếp tục</span>
              <FiChevronRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComplete}
              className="px-6 py-2 bg-green-500 text-white rounded-lg flex items-center space-x-2"
            >
              <span>Hoàn thành</span>
              <FiCheck className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>
    );
  };

  // Render rewards screen
  const renderRewards = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <FiAward className="w-10 h-10 text-green-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Chúc mừng!
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Bạn đã hoàn thành bài học
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <FiStar className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-900 dark:text-white">Điểm số</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {score}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <FiGift className="w-5 h-5 text-green-500" />
              <span className="text-gray-900 dark:text-white">Phần thưởng</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 dark:text-white">
                {Math.round(score * getDifficultyMultiplier())} XP
              </span>
              <span className="text-gray-900 dark:text-white">
                {Math.round(score * getDifficultyMultiplier() / 2)} Xu
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExit}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Tiếp tục
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnimatePresence>
        {showIntroduction && renderIntroduction()}
        {showRewards && renderRewards()}
      </AnimatePresence>
      {!showIntroduction && !showRewards && renderContent()}
    </div>
  );
};

export default LearningSession; 