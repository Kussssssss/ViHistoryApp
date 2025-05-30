import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiAward, 
  FiStar, 
  FiGift, 
  FiLock,
  FiUnlock,
  FiCheck,
  FiInfo
} from 'react-icons/fi';
import { Achievement, PlayerProgress } from '../types/historicalData';

interface AchievementSystemProps {
  achievements: Achievement[];
  playerProgress: PlayerProgress;
}

const AchievementSystem: React.FC<AchievementSystemProps> = ({
  achievements,
  playerProgress
}) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  const isAchievementUnlocked = (achievement: Achievement) => {
    return playerProgress.unlockedAchievements.includes(achievement.id);
  };

  const getProgressPercentage = (achievement: Achievement) => {
    const progress = playerProgress.achievementProgress[achievement.id] || 0;
    return Math.min((progress / achievement.requirements.target) * 100, 100);
  };

  const filteredAchievements = achievements.filter(achievement => {
    if (filter === 'unlocked') return isAchievementUnlocked(achievement);
    if (filter === 'locked') return !isAchievementUnlocked(achievement);
    return true;
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Filter Controls */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setFilter('all')}
        >
          All Achievements
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === 'unlocked'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setFilter('unlocked')}
        >
          Unlocked
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === 'locked'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setFilter('locked')}
        >
          Locked
        </button>
      </div>

      {/* Achievement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAchievements.map(achievement => {
          const unlocked = isAchievementUnlocked(achievement);
          const progress = getProgressPercentage(achievement);

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 ${
                unlocked ? 'cursor-pointer hover:shadow-xl' : 'opacity-50'
              }`}
              onClick={() => unlocked && setSelectedAchievement(achievement)}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    unlocked
                      ? 'bg-yellow-100 dark:bg-yellow-900'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  <FiAward className={`w-6 h-6 ${
                    unlocked ? 'text-yellow-500' : 'text-gray-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    {unlocked ? (
                      <FiUnlock className="w-5 h-5 text-green-500" />
                    ) : (
                      <FiLock className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {achievement.description}
                  </p>
                  {!unlocked && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-3 flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.rewards.experience} XP
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiGift className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.rewards.coins} Coins
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Achievement Details Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-full bg-yellow-100 dark:bg-yellow-900">
                  <FiAward className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedAchievement.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedAchievement.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Requirements
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FiInfo className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedAchievement.requirements.description}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiCheck className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Target: {selectedAchievement.requirements.target}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Rewards
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FiStar className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedAchievement.rewards.experience} XP
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiGift className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedAchievement.rewards.coins} Coins
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => setSelectedAchievement(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementSystem; 