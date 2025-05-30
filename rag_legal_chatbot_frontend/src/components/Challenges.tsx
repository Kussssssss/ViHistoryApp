import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiCheck } from 'react-icons/fi';
import { UserProgressService } from '../services/userProgressService';
import { Challenge } from '../types/historicalData';

interface ChallengesProps {
  className?: string;
}

const Challenges: React.FC<ChallengesProps> = ({ className = '' }) => {
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

  const renderChallenge = (challenge: Challenge) => (
    <motion.div
      key={challenge.id}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-full ${
          challenge.type === 'daily' 
            ? 'bg-blue-100 dark:bg-blue-900' 
            : 'bg-purple-100 dark:bg-purple-900'
        }`}>
          {challenge.type === 'daily' ? (
            <FiClock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          ) : (
            <FiCalendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {challenge.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {challenge.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <motion.div
                  className={`h-full rounded-full ${
                    challenge.type === 'daily' 
                      ? 'bg-blue-500' 
                      : 'bg-purple-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(challenge.requirements.current / challenge.requirements.target) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {challenge.requirements.current}/{challenge.requirements.target}
              </span>
            </div>
            {challenge.completed && (
              <FiCheck className="w-5 h-5 text-green-500" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Daily Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Thử thách hằng ngày
        </h3>
        <div className="space-y-4">
          {userStats.dailyChallenges.map(renderChallenge)}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Thử thách hằng tuần
        </h3>
        <div className="space-y-4">
          {userStats.weeklyChallenges.map(renderChallenge)}
        </div>
      </div>
    </div>
  );
};

export default Challenges; 