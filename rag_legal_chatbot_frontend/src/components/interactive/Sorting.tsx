import React, { useState } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { 
  FiCheck, 
  FiX,
  FiHelpCircle,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiArrowUp,
  FiArrowDown,
  FiMove
} from 'react-icons/fi';

interface SortingItem {
  id: string;
  text: string;
  order: number;
}

interface SortingQuestion {
  id: string;
  title: string;
  description: string;
  items: SortingItem[];
  explanation: string;
  timeLimit?: number; // in seconds
}

interface SortingProps {
  questions: SortingQuestion[];
  onComplete: (score: number) => void;
}

const Sorting: React.FC<SortingProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [items, setItems] = useState<SortingItem[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  React.useEffect(() => {
    setItems([...currentQuestion.items].sort(() => Math.random() - 0.5));
  }, [currentQuestionIndex]);

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

  const checkAnswer = () => {
    setIsChecking(true);
    const isAnswerCorrect = items.every((item, index) => 
      item.order === index + 1
    );
    
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);

    const score = isAnswerCorrect ? 100 : 0;
    setScores([...scores, score]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (isChecking) return;

    const newItems = [...items];
    const newIndex = direction === 'up' ? index - 1 : index + 1;

    if (newIndex >= 0 && newIndex < newItems.length) {
      [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
      setItems(newItems);
    }
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
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="space-y-4"
          >
            {items.map((item, index) => (
              <Reorder.Item
                key={item.id}
                value={item}
                disabled={isChecking}
                className={`p-4 rounded-lg ${
                  isChecking
                    ? item.order === index + 1
                      ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                      : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'
                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <FiMove className="w-5 h-5 text-gray-400" />
                    </div>
                    <span className="text-gray-900 dark:text-white">
                      {item.text}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => moveItem(index, 'up')}
                      disabled={index === 0 || isChecking}
                      className={`p-2 rounded-lg ${
                        index === 0 || isChecking
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <FiArrowUp className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => moveItem(index, 'down')}
                      disabled={index === items.length - 1 || isChecking}
                      className={`p-2 rounded-lg ${
                        index === items.length - 1 || isChecking
                          ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <FiArrowDown className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>

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
                setItems([...currentQuestion.items].sort(() => Math.random() - 0.5));
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
                className="px-6 py-2 bg-blue-500 text-white rounded-lg"
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

export default Sorting; 