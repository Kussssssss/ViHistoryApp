import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLock, 
  FiUnlock, 
  FiAward,
  FiStar,
  FiGift
} from 'react-icons/fi';
import { HistoricalPeriod, PlayerProgress } from '../types/historicalData';

interface TimelineMapProps {
  periods: HistoricalPeriod[];
  playerProgress: PlayerProgress;
  onPeriodSelect: (period: HistoricalPeriod) => void;
}

const TimelineMap: React.FC<TimelineMapProps> = ({ 
  periods, 
  playerProgress, 
  onPeriodSelect 
}) => {
  const [hoveredPeriod, setHoveredPeriod] = useState<HistoricalPeriod | null>(null);

  const isPeriodUnlocked = (periodId: string) => 
    playerProgress?.unlockedPeriods?.includes(periodId) || false;

  const isPeriodCompleted = (periodId: string) =>
    playerProgress?.completedPeriods?.includes(periodId) || false;

  const handlePeriodClick = (period: HistoricalPeriod) => {
    if (isPeriodUnlocked(period.id)) {
      onPeriodSelect(period);
    }
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2" />

      {/* Periods */}
      <div className="relative h-full">
        {periods.map((period, index) => {
          const isUnlocked = isPeriodUnlocked(period.id);
          const isCompleted = isPeriodCompleted(period.id);
          const position = (index / (periods.length - 1)) * 100;

          return (
            <motion.div
              key={period.id}
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${position}%` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`relative group cursor-pointer ${
                  isUnlocked ? 'hover:scale-110' : 'cursor-not-allowed'
                }`}
                whileHover={isUnlocked ? { scale: 1.1 } : {}}
                onClick={() => handlePeriodClick(period)}
                onHoverStart={() => setHoveredPeriod(period)}
                onHoverEnd={() => setHoveredPeriod(null)}
              >
                {/* Period Node */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? 'bg-green-500'
                      : isUnlocked
                      ? 'bg-blue-500'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                >
                  {isCompleted ? (
                    <FiAward className="w-6 h-6 text-white" />
                  ) : isUnlocked ? (
                    <FiUnlock className="w-6 h-6 text-white" />
                  ) : (
                    <FiLock className="w-6 h-6 text-gray-500" />
                  )}
                </div>

                {/* Period Info Card */}
                <AnimatePresence>
                  {hoveredPeriod?.id === period.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute left-16 top-1/2 transform -translate-y-1/2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {period.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {period.startYear} - {period.endYear}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {period.description}
                      </p>
                      {isUnlocked && (
                        <div className="mt-2 flex items-center space-x-2">
                          <FiStar className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {period.rewards.experience} XP
                          </span>
                          <FiGift className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {period.rewards.coins} Coins
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Legend
        </h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Completed
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Unlocked
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Locked
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineMap; 