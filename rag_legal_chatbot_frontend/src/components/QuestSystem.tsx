import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBook, 
  FiMap, 
  FiUsers, 
  FiAward,
  FiStar,
  FiGift,
  FiCheck,
  FiClock
} from 'react-icons/fi';
import { Quest, PlayerProgress } from '../types/historicalData';

interface QuestSystemProps {
  quests: Quest[];
  playerProgress: PlayerProgress;
  onQuestSelect: (quest: Quest) => void;
}

const QuestSystem: React.FC<QuestSystemProps> = ({
  quests,
  playerProgress,
  onQuestSelect
}) => {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [filter, setFilter] = useState<'all' | 'available' | 'completed'>('all');

  const isQuestAvailable = (quest: Quest) => {
    return playerProgress.unlockedPeriods.includes(quest.periodId);
  };

  const isQuestCompleted = (quest: Quest) => {
    return playerProgress.completedQuests.includes(quest.id);
  };

  const filteredQuests = quests.filter(quest => {
    if (filter === 'available') return isQuestAvailable(quest);
    if (filter === 'completed') return isQuestCompleted(quest);
    return true;
  });

  const getQuestIcon = (type: string) => {
    switch (type) {
      case 'reading':
        return <FiBook className="w-6 h-6" />;
      case 'exploration':
        return <FiMap className="w-6 h-6" />;
      case 'interaction':
        return <FiUsers className="w-6 h-6" />;
      default:
        return <FiAward className="w-6 h-6" />;
    }
  };

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
          All Quests
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === 'available'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setFilter('available')}
        >
          Available
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            filter === 'completed'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* Quest List */}
      <div className="space-y-4">
        {filteredQuests.map(quest => {
          const available = isQuestAvailable(quest);
          const completed = isQuestCompleted(quest);

          return (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 ${
                available ? 'cursor-pointer hover:shadow-xl' : 'opacity-50'
              }`}
              onClick={() => available && onQuestSelect(quest)}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    completed
                      ? 'bg-green-100 dark:bg-green-900'
                      : available
                      ? 'bg-blue-100 dark:bg-blue-900'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {getQuestIcon(quest.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {quest.title}
                    </h3>
                    {completed && (
                      <FiCheck className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {quest.description}
                  </p>
                  <div className="mt-3 flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {quest.rewards.experience} XP
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiGift className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {quest.rewards.coins} Coins
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiClock className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {quest.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quest Details Modal */}
      <AnimatePresence>
        {selectedQuest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedQuest(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900">
                  {getQuestIcon(selectedQuest.type)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedQuest.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedQuest.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Requirements
                      </h3>
                      <ul className="space-y-2">
                        {selectedQuest.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 dark:text-gray-300"
                          >
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Rewards
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FiStar className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedQuest.rewards.experience} XP
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiGift className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedQuest.rewards.coins} Coins
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      // Handle quest start
                      setSelectedQuest(null);
                    }}
                  >
                    Start Quest
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

export default QuestSystem; 