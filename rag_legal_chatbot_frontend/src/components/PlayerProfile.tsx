import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiUser, 
  FiStar, 
  FiGift, 
  FiAward,
  FiBook,
  FiMap,
  FiUsers,
  FiClock
} from 'react-icons/fi';
import { PlayerProgress } from '../types/historicalData';

interface PlayerProfileProps {
  playerProgress: PlayerProgress;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ playerProgress }) => {
  const calculateLevel = (experience: number) => {
    return Math.floor(Math.sqrt(experience / 100)) + 1;
  };

  const calculateNextLevelExp = (currentLevel: number) => {
    return Math.pow(currentLevel, 2) * 100;
  };

  const currentLevel = calculateLevel(playerProgress.experience);
  const nextLevelExp = calculateNextLevelExp(currentLevel);
  const progressToNextLevel = (playerProgress.experience / nextLevelExp) * 100;

  const stats = [
    {
      icon: <FiBook className="w-6 h-6" />,
      label: 'Completed Quests',
      value: playerProgress.completedQuests.length
    },
    {
      icon: <FiMap className="w-6 h-6" />,
      label: 'Explored Periods',
      value: playerProgress.unlockedPeriods.length
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      label: 'Achievements',
      value: playerProgress.unlockedAchievements.length
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      label: 'Characters Met',
      value: playerProgress.metCharacters.length
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex items-start space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <FiUser className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              Level {currentLevel}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {playerProgress.username}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FiStar className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {playerProgress.experience} XP
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <FiGift className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {playerProgress.coins} Coins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Level Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Progress to Level {currentLevel + 1}</span>
            <span>{Math.round(progressToNextLevel)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressToNextLevel}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
            />
          </div>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {playerProgress.experience} / {nextLevelExp} XP
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {playerProgress.recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                  <FiClock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white">{activity.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(activity.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile; 