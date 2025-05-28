import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, 
  FiX,
  FiHelpCircle,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiCircle
} from 'react-icons/fi';

interface TrueFalseQuestion {
  id: string;
  title: string;
  description: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  timeLimit?: number; // in seconds
}

interface TrueFalseProps {
  questions: TrueFalseQuestion[];
  onComplete: (score: number) => void;
}

const TrueFalse: React.FC<TrueFalseProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
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

  const handleAnswerSelect = (isTrue: boolean) => {
    if (isChecking) return;
    setSelectedAnswer(isTrue);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;

    setIsChecking(true);
    setIsCorrect(selectedAnswer === currentQuestion.isTrue);
    setShowExplanation(true);

    const score = selectedAnswer === currentQuestion.isTrue ? 100 : 0;
    setScores([...scores, score]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
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
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-900 dark:text-white text-lg font-medium">
              {currentQuestion.statement}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswerSelect(true)}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedAnswer === true
                  ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500'
                  : isChecking
                  ? currentQuestion.isTrue
                    ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                    : selectedAnswer === true
                    ? 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'
                    : 'bg-gray-50 dark:bg-gray-700'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  selectedAnswer === true
                    ? 'bg-blue-500'
                    : isChecking
                    ? currentQuestion.isTrue
                      ? 'bg-green-500'
                      : selectedAnswer === true
                      ? 'bg-red-500'
                      : 'bg-gray-200 dark:bg-gray-600'
                    : 'bg-gray-200 dark:bg-gray-600'
                }`}>
                  {selectedAnswer === true && (
                    <FiCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-gray-900 dark:text-white">
                  Đúng
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswerSelect(false)}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedAnswer === false
                  ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500'
                  : isChecking
                  ? !currentQuestion.isTrue
                    ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
                    : selectedAnswer === false
                    ? 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'
                    : 'bg-gray-50 dark:bg-gray-700'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  selectedAnswer === false
                    ? 'bg-blue-500'
                    : isChecking
                    ? !currentQuestion.isTrue
                      ? 'bg-green-500'
                      : selectedAnswer === false
                      ? 'bg-red-500'
                      : 'bg-gray-200 dark:bg-gray-600'
                    : 'bg-gray-200 dark:bg-gray-600'
                }`}>
                  {selectedAnswer === false && (
                    <FiCircle className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-gray-900 dark:text-white">
                  Sai
                </span>
              </div>
            </motion.div>
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
                setSelectedAnswer(null);
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
                disabled={selectedAnswer === null}
                className={`px-6 py-2 rounded-lg ${
                  selectedAnswer === null
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

export default TrueFalse; 