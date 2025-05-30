import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiMessageSquare, 
  FiStar, 
  FiGift,
  FiBook,
  FiMap,
  FiClock
} from 'react-icons/fi';
import { HistoricalCharacter, PlayerProgress } from '../types/historicalData';

interface CharacterInteractionProps {
  character: HistoricalCharacter;
  playerProgress: PlayerProgress;
  onInteractionComplete: (characterId: string, interactionType: string) => void;
}

const CharacterInteraction: React.FC<CharacterInteractionProps> = ({
  character,
  playerProgress,
  onInteractionComplete
}) => {
  const [selectedInteraction, setSelectedInteraction] = useState<string | null>(null);
  const [currentDialogue, setCurrentDialogue] = useState<string | null>(null);
  const [showRewards, setShowRewards] = useState(false);

  const isInteractionAvailable = (interactionType: string) => {
    return character.availableInteractions.includes(interactionType);
  };

  const handleInteractionSelect = (interactionType: string) => {
    setSelectedInteraction(interactionType);
    // Simulate dialogue based on interaction type
    const dialogue = character.dialogues[interactionType] || 'No dialogue available for this interaction.';
    setCurrentDialogue(dialogue);
  };

  const handleInteractionComplete = () => {
    if (selectedInteraction) {
      onInteractionComplete(character.id, selectedInteraction);
      setShowRewards(true);
      setTimeout(() => {
        setShowRewards(false);
        setSelectedInteraction(null);
        setCurrentDialogue(null);
      }, 3000);
    }
  };

  const getInteractionIcon = (type: string) => {
    switch (type) {
      case 'conversation':
        return <FiMessageSquare className="w-6 h-6" />;
      case 'quest':
        return <FiBook className="w-6 h-6" />;
      case 'exploration':
        return <FiMap className="w-6 h-6" />;
      default:
        return <FiUser className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Character Header */}
        <div className="flex items-start space-x-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center overflow-hidden">
              {character.imageUrl ? (
                <img
                  src={character.imageUrl}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiUser className="w-12 h-12 text-white" />
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded-full">
              {character.period}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {character.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {character.description}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FiStar className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {character.rewards.experience} XP
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <FiGift className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 dark:text-gray-300">
                  {character.rewards.coins} Coins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interaction Options */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Available Interactions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {character.availableInteractions.map(interactionType => (
              <motion.button
                key={interactionType}
                className={`p-4 rounded-lg ${
                  selectedInteraction === interactionType
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleInteractionSelect(interactionType)}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                    {getInteractionIcon(interactionType)}
                  </div>
                  <span className="font-medium capitalize">
                    {interactionType}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dialogue Box */}
        <AnimatePresence>
          {currentDialogue && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                  <FiMessageSquare className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white">
                    {currentDialogue}
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={handleInteractionComplete}
                  >
                    Complete Interaction
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rewards Animation */}
        <AnimatePresence>
          {showRewards && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Interaction Complete!
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <FiStar className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      +{character.rewards.experience} XP
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiGift className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      +{character.rewards.coins} Coins
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CharacterInteraction; 