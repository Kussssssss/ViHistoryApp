import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiCheck, FiX } from 'react-icons/fi';

interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  onComplete: (score: number) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onComplete }) => {
  const [selectedEvents, setSelectedEvents] = useState<TimelineEvent[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleEventSelect = (event: TimelineEvent) => {
    if (selectedEvents.find(e => e.id === event.id)) {
      setSelectedEvents(selectedEvents.filter(e => e.id !== event.id));
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  const checkOrder = () => {
    setIsChecking(true);
    const isOrderCorrect = selectedEvents.every((event, index) => {
      if (index === 0) return true;
      return event.year >= selectedEvents[index - 1].year;
    });
    setIsCorrect(isOrderCorrect);
    
    if (isOrderCorrect) {
      const score = Math.round((selectedEvents.length / events.length) * 100);
      onComplete(score);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Sắp xếp các sự kiện theo thứ tự thời gian
        </h3>
        <div className="flex items-center space-x-2">
          <FiClock className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {selectedEvents.length} / {events.length} sự kiện
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleEventSelect(event)}
            className={`p-4 rounded-lg cursor-pointer transition-colors ${
              selectedEvents.find(e => e.id === event.id)
                ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500'
                : 'bg-white dark:bg-gray-800 border-2 border-transparent'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {event.year}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {event.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedEvents([])}
          className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
        >
          Làm lại
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={checkOrder}
          disabled={selectedEvents.length === 0}
          className={`px-6 py-2 rounded-lg ${
            selectedEvents.length === 0
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white'
          }`}
        >
          Kiểm tra
        </motion.button>
      </div>

      <AnimatePresence>
        {isChecking && (
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
            <div className="flex items-center space-x-2">
              {isCorrect ? (
                <FiCheck className="w-5 h-5 text-green-500" />
              ) : (
                <FiX className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-900 dark:text-white">
                {isCorrect
                  ? 'Chính xác! Bạn đã sắp xếp đúng thứ tự thời gian.'
                  : 'Chưa chính xác. Hãy thử lại!'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline; 