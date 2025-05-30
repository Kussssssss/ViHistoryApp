import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiClock, 
  FiInfo, 
  FiStar, 
  FiGift,
  FiMap,
  FiUsers,
  FiBook
} from 'react-icons/fi';
import { TimelineEvent, PlayerProgress } from '../types/historicalData';

interface TimelineEventsProps {
  events: TimelineEvent[];
  playerProgress: PlayerProgress;
  onEventSelect: (event: TimelineEvent) => void;
}

const TimelineEvents: React.FC<TimelineEventsProps> = ({
  events,
  playerProgress,
  onEventSelect
}) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [filter, setFilter] = useState<'all' | 'unlocked' | 'completed'>('all');

  const isEventUnlocked = (event: TimelineEvent) => {
    return playerProgress.unlockedPeriods.includes(event.periodId);
  };

  const isEventCompleted = (event: TimelineEvent) => {
    return playerProgress.completedEvents.includes(event.id);
  };

  const filteredEvents = events.filter(event => {
    if (filter === 'unlocked') return isEventUnlocked(event);
    if (filter === 'completed') return isEventCompleted(event);
    return true;
  });

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'battle':
        return <FiMap className="w-6 h-6" />;
      case 'discovery':
        return <FiBook className="w-6 h-6" />;
      case 'meeting':
        return <FiUsers className="w-6 h-6" />;
      default:
        return <FiClock className="w-6 h-6" />;
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
          All Events
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
            filter === 'completed'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2" />

        {/* Events */}
        <div className="space-y-8">
          {filteredEvents.map((event, index) => {
            const unlocked = isEventUnlocked(event);
            const completed = isEventCompleted(event);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${
                  index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  } bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 ${
                    unlocked ? 'cursor-pointer hover:shadow-xl' : 'opacity-50'
                  }`}
                  onClick={() => unlocked && setSelectedEvent(event)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-full ${
                        completed
                          ? 'bg-green-100 dark:bg-green-900'
                          : unlocked
                          ? 'bg-blue-100 dark:bg-blue-900'
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      {getEventIcon(event.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {event.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {event.description}
                      </p>
                      {unlocked && (
                        <div className="mt-3 flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <FiStar className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {event.rewards.experience} XP
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FiGift className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {event.rewards.coins} Coins
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvent(null)}
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
                  {getEventIcon(selectedEvent.type)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedEvent.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Historical Context
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedEvent.historicalContext}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Rewards
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <FiStar className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedEvent.rewards.experience} XP
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiGift className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedEvent.rewards.coins} Coins
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      onEventSelect(selectedEvent);
                      setSelectedEvent(null);
                    }}
                  >
                    Explore Event
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

export default TimelineEvents; 