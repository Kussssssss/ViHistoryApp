import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiCalendar, 
  FiMapPin, 
  FiAward, 
  FiBook,
  FiCheck,
  FiX,
  FiInfo
} from 'react-icons/fi';

interface CharacterAchievement {
  id: string;
  title: string;
  description: string;
  year: number;
}

interface CharacterInfo {
  id: string;
  name: string;
  title: string;
  birthYear: number;
  deathYear: number;
  birthPlace: string;
  achievements: CharacterAchievement[];
  biography: string;
  image?: string;
}

interface CharacterInfoProps {
  character: CharacterInfo;
  onComplete: (score: number) => void;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character, onComplete }) => {
  const [selectedAchievements, setSelectedAchievements] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showBiography, setShowBiography] = useState(false);

  const handleAchievementSelect = (achievementId: string) => {
    if (selectedAchievements.includes(achievementId)) {
      setSelectedAchievements(selectedAchievements.filter(id => id !== achievementId));
    } else {
      setSelectedAchievements([...selectedAchievements, achievementId]);
    }
  };

  const checkAchievements = () => {
    setIsChecking(true);
    const isSelectionCorrect = selectedAchievements.length === character.achievements.length;
    setIsCorrect(isSelectionCorrect);
    
    if (isSelectionCorrect) {
      const score = Math.round((selectedAchievements.length / character.achievements.length) * 100);
      onComplete(score);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-start space-x-6">
          {character.image ? (
            <img
              src={character.image}
              alt={character.name}
              className="w-32 h-32 rounded-lg object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <FiUser className="w-16 h-16 text-gray-400" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {character.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {character.title}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <FiCalendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  {character.birthYear} - {character.deathYear}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  {character.birthPlace}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowBiography(!showBiography)}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
          >
            <FiInfo className="w-5 h-5" />
            <span>{showBiography ? 'Ẩn tiểu sử' : 'Xem tiểu sử'}</span>
          </motion.button>

          <AnimatePresence>
            {showBiography && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 overflow-hidden"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  {character.biography}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            Thành tựu
          </h4>
          <div className="flex items-center space-x-2">
            <FiAward className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {selectedAchievements.length} / {character.achievements.length}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {character.achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAchievementSelect(achievement.id)}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                selectedAchievements.includes(achievement.id)
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500'
                  : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <FiBook className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {achievement.description}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Năm {achievement.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedAchievements([])}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
          >
            Làm lại
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkAchievements}
            disabled={selectedAchievements.length === 0}
            className={`px-6 py-2 rounded-lg ${
              selectedAchievements.length === 0
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
              className={`mt-4 p-4 rounded-lg ${
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
                    ? 'Chính xác! Bạn đã chọn đúng tất cả thành tựu.'
                    : 'Chưa chính xác. Hãy thử lại!'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CharacterInfo; 