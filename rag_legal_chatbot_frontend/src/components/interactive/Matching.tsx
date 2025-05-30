import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, 
  FiX,
  FiHelpCircle,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiLink,
  FiLink2
} from 'react-icons/fi';

interface MatchingItem {
  id: string;
  text: string;
  type: 'left' | 'right';
  correctMatchId: string;
}

interface MatchingQuestion {
  id: string;
  title: string;
  description: string;
  items: MatchingItem[];
  explanation: string;
  timeLimit?: number; // in seconds
}

interface MatchingProps {
  questions: MatchingQuestion[];
  onComplete: (score: number) => void;
}

const Matching: React.FC<MatchingProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<MatchingItem | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  React.useEffect(() => {
    if (currentQuestion.timeLimit) {
      setTimeLeft(currentQuestion.timeLimit);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === null || prev <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestionIndex]);

  const handleItemClick = (item: MatchingItem) => {
    if (isChecking) return;

    if (!selectedItem) {
      setSelectedItem(item);
    } else {
      if (selectedItem.type === item.type) {
        setSelectedItem(item);
      } else {
        const newMatches = { ...matches };
        if (selectedItem.type === 'left') {
          newMatches[selectedItem.id] = item.id;
        } else {
          newMatches[item.id] = selectedItem.id;
        }
        setMatches(newMatches);
        setSelectedItem(null);
      }
    }
  };

  const checkAnswer = () => {
    setIsChecking(true);
    const isAnswerCorrect = currentQuestion.items
      .filter(item => item.type === 'left')
      .every(item => matches[item.id] === item.correctMatchId);
    
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);

    const score = isAnswerCorrect ? 100 : 0;
    setScores([...scores, score]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedItem(null);
      setMatches({});
      setIsChecking(false);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      const finalScore = Math.round(
        scores.reduce((acc, score) => acc + score, 0) / questions.length
      );
      onComplete(finalScore);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const isItemMatched = (itemId: string) => {
    return Object.keys(matches).includes(itemId) || 
           Object.values(matches).includes(itemId);
  };

  const isItemCorrect = (itemId: string) => {
    if (!isChecking) return false;
    const leftItem = currentQuestion.items.find(item => item.type === 'left' && item.id === itemId);
    if (leftItem) {
      return matches[leftItem.id] === leftItem.correctMatchId;
    }
    const rightItem = currentQuestion.items.find(item => item.type === 'right' && item.id === itemId);
    if (rightItem) {
      return Object.entries(matches).some(([leftId, rightId]) => 
        rightId === rightItem.id && 
        currentQuestion.items.find(item => item.id === leftId)?.correctMatchId === rightItem.id
      );
    }
    return false;
  };

  const getMatchedItem = (itemId: string) => {
    if (matches[itemId]) {
      return currentQuestion.items.find(item => item.id === matches[itemId]);
    }
    const matchedLeftId = Object.entries(matches).find(([_, rightId]) => rightId === itemId)?.[0];
    if (matchedLeftId) {
      return currentQuestion.items.find(item => item.id === matchedLeftId);
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {currentQuestion.title}
          </h3>
          <div className="flex items-center space-x-4">
            {currentQuestion.timeLimit && (
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {timeLeft !== null ? formatTime(timeLeft) : '--:--'}
                </span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <FiAward className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Câu {currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {currentQuestion.description}
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Cột trái
              </h4>
              <div className="space-y-4">
                {currentQuestion.items
                  .filter(item => item.type === 'left')
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleItemClick(item)}
                      className={`p-4 rounded-lg cursor-pointer ${
                        selectedItem?.id === item.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500'
                          : isChecking
                          ? isItemCorrect(item.id)
                            ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                            : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'
                          : isItemMatched(item.id)
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                          {item.text}
                        </span>
                        {isItemMatched(item.id) && (
                          <FiLink className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Cột phải
              </h4>
              <div className="space-y-4">
                {currentQuestion.items
                  .filter(item => item.type === 'right')
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleItemClick(item)}
                      className={`p-4 rounded-lg cursor-pointer ${
                        selectedItem?.id === item.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500'
                          : isChecking
                          ? isItemCorrect(item.id)
                            ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                            : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'
                          : isItemMatched(item.id)
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white">
                          {item.text}
                        </span>
                        {isItemMatched(item.id) && (
                          <FiLink2 className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`p-4 rounded-lg ${
                  isCorrect
                    ? 'bg-green-50 dark:bg-green-900/30'
                    : 'bg-red-50 dark:bg-red-900/30'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {isCorrect ? (
                    <FiCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <FiX className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {isCorrect ? 'Chính xác!' : 'Chưa chính xác'}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedItem(null);
                setMatches({});
                setIsChecking(false);
                setIsCorrect(null);
                setShowExplanation(false);
              }}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
            >
              <FiRefreshCw className="w-5 h-5" />
            </motion.button>
            {!isChecking ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={checkAnswer}
                disabled={Object.keys(matches).length === 0}
                className={`px-6 py-2 rounded-lg ${
                  Object.keys(matches).length === 0
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 text-white'
                }`}
              >
                Kiểm tra
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Tiếp theo' : 'Hoàn thành'}
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tiến độ
        </h4>
        <div className="grid grid-cols-5 gap-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${
                index < currentQuestionIndex
                  ? 'bg-green-500'
                  : index === currentQuestionIndex
                  ? 'bg-blue-500'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matching; 