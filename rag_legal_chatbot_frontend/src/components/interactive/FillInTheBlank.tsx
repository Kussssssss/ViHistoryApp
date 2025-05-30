import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, 
  FiX,
  FiHelpCircle,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiEdit
} from 'react-icons/fi';

interface Blank {
  id: string;
  correctAnswer: string;
  alternatives?: string[];
  hint?: string;
}

interface FillInTheBlankQuestion {
  id: string;
  title: string;
  description: string;
  text: string;
  blanks: Blank[];
  explanation: string;
  timeLimit?: number; // in seconds
}

interface FillInTheBlankProps {
  questions: FillInTheBlankQuestion[];
  onComplete: (score: number) => void;
}

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});

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

  const handleAnswerChange = (blankId: string, value: string) => {
    setAnswers({
      ...answers,
      [blankId]: value
    });
  };

  const checkAnswer = () => {
    setIsChecking(true);
    const isAnswerCorrect = currentQuestion.blanks.every(blank => {
      const answer = answers[blank.id]?.toLowerCase().trim();
      const correctAnswer = blank.correctAnswer.toLowerCase().trim();
      return answer === correctAnswer || 
        (blank.alternatives && blank.alternatives.some(alt => 
          alt.toLowerCase().trim() === answer
        ));
    });
    
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);

    const score = isAnswerCorrect ? 100 : 0;
    setScores([...scores, score]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswers({});
      setIsChecking(false);
      setIsCorrect(null);
      setShowExplanation(false);
      setShowHints({});
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

  const toggleHint = (blankId: string) => {
    setShowHints({
      ...showHints,
      [blankId]: !showHints[blankId]
    });
  };

  const renderTextWithBlanks = () => {
    const parts = currentQuestion.text.split(/(\[.*?\])/);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        const blankId = part.slice(1, -1);
        const blank = currentQuestion.blanks.find(b => b.id === blankId);
        if (!blank) return part;

        return (
          <span key={index} className="inline-flex items-center space-x-2">
            <input
              type="text"
              value={answers[blankId] || ''}
              onChange={(e) => handleAnswerChange(blankId, e.target.value)}
              disabled={isChecking}
              className={`w-32 px-2 py-1 rounded border ${
                isChecking
                  ? answers[blankId]?.toLowerCase().trim() === blank.correctAnswer.toLowerCase().trim() ||
                    (blank.alternatives && blank.alternatives.some(alt => 
                      alt.toLowerCase().trim() === answers[blankId]?.toLowerCase().trim()
                    ))
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            />
            {blank.hint && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleHint(blankId)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FiHelpCircle className="w-5 h-5" />
              </motion.button>
            )}
            {showHints[blankId] && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute mt-8 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300"
              >
                {blank.hint}
              </motion.div>
            )}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
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
            <p className="text-gray-900 dark:text-white leading-relaxed">
              {renderTextWithBlanks()}
            </p>
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
                setAnswers({});
                setIsChecking(false);
                setIsCorrect(null);
                setShowExplanation(false);
                setShowHints({});
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
                disabled={Object.keys(answers).length === 0}
                className={`px-6 py-2 rounded-lg ${
                  Object.keys(answers).length === 0
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

export default FillInTheBlank; 