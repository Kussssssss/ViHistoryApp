import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiGift, FiTrendingUp, FiCalendar } from 'react-icons/fi';
import { UserProgressService } from '../services/userProgressService';

interface UserProgressProps {
  className?: string;
}

const UserProgress: React.FC<UserProgressProps> = ({ className = '' }) => {
  const [userStats, setUserStats] = useState(UserProgressService.getInstance().getUserStats());
  const userProgressService = UserProgressService.getInstance();

  useEffect(() => {
    // Subscribe to progress updates
    const unsubscribe = userProgressService.subscribe((stats) => {
      setUserStats(stats);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        {/* Level and Experience */}
        <div className="col-span-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Cấp độ {userStats.level}
            </h3>
            <div className="flex items-center space-x-2">
              <FiStar className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300">
                {userStats.totalExperience}/{userStats.experienceToNextLevel} XP
              </span>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(userStats.totalExperience / userStats.experienceToNextLevel) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Coins */}
        <div className="flex items-center space-x-2 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <FiGift className="w-6 h-6 text-yellow-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Coins</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {userStats.totalCoins}
            </p>
          </div>
        </div>

        {/* Streak */}
        <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <FiTrendingUp className="w-6 h-6 text-green-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Streak</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {userStats.currentStreak} ngày
            </p>
          </div>
        </div>

        {/* Completed Events */}
        <div className="flex items-center space-x-2 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
          <FiCalendar className="w-6 h-6 text-purple-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Sự kiện đã hoàn thành</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {userStats.completedEvents.length}
            </p>
          </div>
        </div>

        {/* Completed Periods */}
        <div className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <FiCalendar className="w-6 h-6 text-blue-500" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Thời kỳ đã hoàn thành</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {userStats.completedPeriods.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProgress; 