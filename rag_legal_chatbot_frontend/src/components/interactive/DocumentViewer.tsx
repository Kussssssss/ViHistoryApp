import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFileText, 
  FiSearch, 
  FiCheck, 
  FiX,
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiDownload,
  FiInfo
} from 'react-icons/fi';

interface DocumentSection {
  id: string;
  title: string;
  content: string;
  year: number;
  type: 'decree' | 'treaty' | 'letter' | 'other';
}

interface DocumentViewerProps {
  title: string;
  description: string;
  image: string;
  sections: DocumentSection[];
  onComplete: (score: number) => void;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({
  title,
  description,
  image,
  sections,
  onComplete
}) => {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showSectionInfo, setShowSectionInfo] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleSectionSelect = (sectionId: string) => {
    if (selectedSections.includes(sectionId)) {
      setSelectedSections(selectedSections.filter(id => id !== sectionId));
    } else {
      setSelectedSections([...selectedSections, sectionId]);
    }
  };

  const checkSections = () => {
    setIsChecking(true);
    const isSelectionCorrect = selectedSections.length === sections.length;
    setIsCorrect(isSelectionCorrect);
    
    if (isSelectionCorrect) {
      const score = Math.round((selectedSections.length / sections.length) * 100);
      onComplete(score);
    }
  };

  const handleZoom = (delta: number) => {
    const newZoom = zoom + delta;
    setZoom(Math.max(0.5, Math.min(2, newZoom)));
  };

  const handleRotate = () => {
    setRotation((rotation + 90) % 360);
  };

  const getSectionIcon = (type: DocumentSection['type']) => {
    switch (type) {
      case 'decree':
        return <FiFileText className="w-6 h-6 text-red-500" />;
      case 'treaty':
        return <FiFileText className="w-6 h-6 text-blue-500" />;
      case 'letter':
        return <FiFileText className="w-6 h-6 text-green-500" />;
      default:
        return <FiFileText className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <FiFileText className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {selectedSections.length} / {sections.length} phần
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {description}
        </p>

        <div className="relative w-full h-[500px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
              transition: 'transform 0.3s ease'
            }}
          />

          <div className="absolute bottom-4 right-4 flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleZoom(0.1)}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <FiZoomIn className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleZoom(-0.1)}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <FiZoomOut className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleRotate}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <FiRotateCw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(image, '_blank')}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <FiDownload className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSectionSelect(section.id)}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                selectedSections.includes(section.id)
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500'
                  : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                  {getSectionIcon(section.type)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {section.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {section.content}
                  </p>
                  <div className="flex items-center space-x-2">
                    <FiInfo className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Năm {section.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSections([])}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
          >
            Làm lại
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkSections}
            disabled={selectedSections.length === 0}
            className={`px-6 py-2 rounded-lg ${
              selectedSections.length === 0
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
                    ? 'Chính xác! Bạn đã chọn đúng tất cả các phần.'
                    : 'Chưa chính xác. Hãy thử lại!'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Chú thích
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <FiFileText className="w-5 h-5 text-red-500" />
            <span className="text-gray-600 dark:text-gray-300">Sắc lệnh</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiFileText className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">Hiệp ước</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiFileText className="w-5 h-5 text-green-500" />
            <span className="text-gray-600 dark:text-gray-300">Thư từ</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiFileText className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600 dark:text-gray-300">Khác</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer; 