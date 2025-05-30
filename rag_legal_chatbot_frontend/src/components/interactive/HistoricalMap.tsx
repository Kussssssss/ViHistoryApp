import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMapPin, 
  FiInfo, 
  FiCheck, 
  FiX,
  FiMap,
  FiClock,
  FiTarget
} from 'react-icons/fi';

interface Location {
  id: string;
  name: string;
  description: string;
  year: number;
  coordinates: {
    x: number;
    y: number;
  };
  type: 'battle' | 'palace' | 'temple' | 'city' | 'other';
}

interface HistoricalMapProps {
  locations: Location[];
  mapImage: string;
  onComplete: (score: number) => void;
}

const HistoricalMap: React.FC<HistoricalMapProps> = ({ locations, mapImage, onComplete }) => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showLocationInfo, setShowLocationInfo] = useState<string | null>(null);
  const [mapScale, setMapScale] = useState(1);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleLocationClick = (locationId: string) => {
    if (selectedLocations.includes(locationId)) {
      setSelectedLocations(selectedLocations.filter(id => id !== locationId));
    } else {
      setSelectedLocations([...selectedLocations, locationId]);
    }
  };

  const checkLocations = () => {
    setIsChecking(true);
    const isSelectionCorrect = selectedLocations.length === locations.length;
    setIsCorrect(isSelectionCorrect);
    
    if (isSelectionCorrect) {
      const score = Math.round((selectedLocations.length / locations.length) * 100);
      onComplete(score);
    }
  };

  const handleZoom = (event: React.WheelEvent) => {
    event.preventDefault();
    const newScale = mapScale + (event.deltaY > 0 ? -0.1 : 0.1);
    setMapScale(Math.max(0.5, Math.min(2, newScale)));
  };

  const getLocationIcon = (type: Location['type']) => {
    switch (type) {
      case 'battle':
        return <FiTarget className="w-6 h-6 text-red-500" />;
      case 'palace':
        return <FiMapPin className="w-6 h-6 text-purple-500" />;
      case 'temple':
        return <FiMapPin className="w-6 h-6 text-yellow-500" />;
      case 'city':
        return <FiMapPin className="w-6 h-6 text-blue-500" />;
      default:
        return <FiMapPin className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bản đồ lịch sử
          </h3>
          <div className="flex items-center space-x-2">
            <FiMap className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {selectedLocations.length} / {locations.length} địa điểm
            </span>
          </div>
        </div>

        <div 
          ref={mapRef}
          className="relative w-full h-[500px] bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
          onWheel={handleZoom}
        >
          <img
            src={mapImage}
            alt="Historical Map"
            className="w-full h-full object-contain"
            style={{ transform: `scale(${mapScale})` }}
          />

          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              className={`absolute cursor-pointer ${
                selectedLocations.includes(location.id)
                  ? 'ring-4 ring-blue-500'
                  : ''
              }`}
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handleLocationClick(location.id)}
              onMouseEnter={() => setShowLocationInfo(location.id)}
              onMouseLeave={() => setShowLocationInfo(null)}
            >
              {getLocationIcon(location.type)}
            </motion.div>
          ))}

          <AnimatePresence>
            {showLocationInfo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-xs"
                style={{
                  left: `${locations.find(l => l.id === showLocationInfo)?.coordinates.x}%`,
                  top: `${locations.find(l => l.id === showLocationInfo)?.coordinates.y}%`,
                  transform: 'translate(-50%, -120%)'
                }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {locations.find(l => l.id === showLocationInfo)?.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {locations.find(l => l.id === showLocationInfo)?.description}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <FiClock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Năm {locations.find(l => l.id === showLocationInfo)?.year}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex justify-end space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLocations([])}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg"
          >
            Làm lại
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkLocations}
            disabled={selectedLocations.length === 0}
            className={`px-6 py-2 rounded-lg ${
              selectedLocations.length === 0
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
                    ? 'Chính xác! Bạn đã tìm thấy tất cả địa điểm.'
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
            <FiTarget className="w-5 h-5 text-red-500" />
            <span className="text-gray-600 dark:text-gray-300">Trận đánh</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMapPin className="w-5 h-5 text-purple-500" />
            <span className="text-gray-600 dark:text-gray-300">Cung điện</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMapPin className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-600 dark:text-gray-300">Đền thờ</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMapPin className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">Thành phố</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricalMap; 