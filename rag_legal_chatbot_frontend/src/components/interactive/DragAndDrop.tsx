import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheck, 
  FiX,
  FiHelpCircle,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiMove,
  FiTarget
} from 'react-icons/fi';

interface DragItem {
  id: string;
  text: string;
  type: 'source' | 'target';
}

interface DropZone {
  id: string;
  title: string;
  accepts: string[];
  correctItemId: string;
}

interface DragAndDropQuestion {
  id: string;
  title: string;
  description: string;
  items: DragItem[];
  dropZones: DropZone[];
  explanation: string;
  timeLimit?: number; // in seconds
}

interface DragAndDropProps {
  questions: DragAndDropQuestion[];
  onComplete: (score: number) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
  const [placedItems, setPlacedItems] = useState<{ [key: string]: string }>({});
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

  const handleDragStart = (item: DragItem) => {
    if (isChecking) return;
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDrop = (dropZoneId: string) => {
    if (!draggedItem || isChecking) return;

    const dropZone = currentQuestion.dropZones.find(zone => zone.id === dropZoneId);
    if (!dropZone || !dropZone.accepts.includes(draggedItem.id)) return;

    setPlacedItems({
      ...placedItems,
      [dropZoneId]: draggedItem.id
    });
  };

  const checkAnswer = () => {
    setIsChecking(true);
    const isAnswerCorrect = currentQuestion.dropZones.every(zone => 
      placedItems[zone.id] === zone.correctItemId
    );
    
    setIsCorrect(isAnswerCorrect);
    setShowExplanation(true);

    const score = isAnswerCorrect ? 100 : 0;
    setScores([...scores, score]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setDraggedItem(null);
      setPlacedItems({});
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

  const isItemPlaced = (itemId: string) => {
    return Object.values(placedItems).includes(itemId);
  };

  const isDropZoneCorrect = (dropZoneId: string) => {
    if (!isChecking) return false;
    const placedItemId = placedItems[dropZoneId];
    const dropZone = currentQuestion.dropZones.find(zone => zone.id === dropZoneId);
    return dropZone && placedItemId === dropZone.correctItemId;
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
                Kéo các mục vào vị trí phù hợp
              </h4>
              <div className="space-y-4">
                {currentQuestion.items
                  .filter(item => item.type === 'source')
                  .map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      onDragStart={() => handleDragStart(item)}
                      onDragEnd={handleDragEnd}
                      className={`p-4 rounded-lg cursor-move ${
                        isItemPlaced(item.id)
                          ? 'bg-gray-200 dark:bg-gray-700 opacity-50'
                          : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                          <FiMove className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="text-gray-900 dark:text-white">
                          {item.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Thả vào đây
              </h4>
              <div className="space-y-4">
                {currentQuestion.dropZones.map((zone) => (
                  <motion.div
                    key={zone.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-lg border-2 border-dashed ${
                      isChecking
                        ? isDropZoneCorrect(zone.id)
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                          : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                        : placedItems[zone.id]
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-300 dark:border-gray-600'
                    }`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop(zone.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                        <FiTarget className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {zone.title}
                        </h5>
                        {placedItems[zone.id] && (
                          <p className="text-gray-600 dark:text-gray-300">
                            {currentQuestion.items.find(item => item.id === placedItems[zone.id])?.text}
                          </p>
                        )}
                      </div>
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
                setDraggedItem(null);
                setPlacedItems({});
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
                disabled={Object.keys(placedItems).length === 0}
                className={`px-6 py-2 rounded-lg ${
                  Object.keys(placedItems).length === 0
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

export default DragAndDrop; 