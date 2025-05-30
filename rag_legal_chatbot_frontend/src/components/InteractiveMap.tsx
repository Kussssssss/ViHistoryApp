import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMapPin, 
  FiInfo, 
  FiStar, 
  FiGift,
  FiLock,
  FiUnlock,
  FiCompass
} from 'react-icons/fi';
import { MapLocation, PlayerProgress } from '../types/historicalData';

interface InteractiveMapProps {
  locations: MapLocation[];
  playerProgress: PlayerProgress;
  onLocationSelect: (location: MapLocation) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({
  locations,
  playerProgress,
  onLocationSelect
}) => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null);
  const [mapScale, setMapScale] = useState(1);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const isLocationUnlocked = (locationId: string) => {
    return playerProgress.unlockedLocations.includes(locationId);
  };

  const isLocationVisited = (locationId: string) => {
    return playerProgress.visitedLocations.includes(locationId);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && mapRef.current) {
      setMapPosition({
        x: mapPosition.x + e.movementX,
        y: mapPosition.y + e.movementY
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scaleChange = e.deltaY > 0 ? 0.9 : 1.1;
    setMapScale(Math.max(0.5, Math.min(2, mapScale * scaleChange)));
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const moveAmount = 20;
      switch (e.key) {
        case 'ArrowUp':
          setMapPosition(prev => ({ ...prev, y: prev.y + moveAmount }));
          break;
        case 'ArrowDown':
          setMapPosition(prev => ({ ...prev, y: prev.y - moveAmount }));
          break;
        case 'ArrowLeft':
          setMapPosition(prev => ({ ...prev, x: prev.x + moveAmount }));
          break;
        case 'ArrowRight':
          setMapPosition(prev => ({ ...prev, x: prev.x - moveAmount }));
          break;
        case '+':
          setMapScale(prev => Math.min(2, prev * 1.1));
          break;
        case '-':
          setMapScale(prev => Math.max(0.5, prev * 0.9));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
        <button
          className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={() => setMapScale(1)}
        >
          <FiCompass className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Interactive Map */}
      <div
        ref={mapRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          transform: `translate(${mapPosition.x}px, ${mapPosition.y}px) scale(${mapScale})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Map Background */}
        <div className="w-full h-full bg-[url('/images/map-background.jpg')] bg-cover bg-center" />

        {/* Location Markers */}
        {locations.map(location => {
          const unlocked = isLocationUnlocked(location.id);
          const visited = isLocationVisited(location.id);

          return (
            <motion.div
              key={location.id}
              className="absolute"
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => unlocked && onLocationSelect(location)}
              onMouseEnter={() => setHoveredLocation(location)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  visited
                    ? 'bg-green-500'
                    : unlocked
                    ? 'bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              >
                <FiMapPin className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Location Info Card */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <FiInfo className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {hoveredLocation.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {hoveredLocation.description}
                </p>
                {isLocationUnlocked(hoveredLocation.id) && (
                  <div className="mt-3 flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FiStar className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {hoveredLocation.rewards.experience} XP
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiGift className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {hoveredLocation.rewards.coins} Coins
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location Details Modal */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedLocation(null)}
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
                  <FiMapPin className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedLocation.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedLocation.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Historical Events
                      </h3>
                      <ul className="space-y-2">
                        {selectedLocation.events.map((event, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 dark:text-gray-300"
                          >
                            • {event}
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
                            {selectedLocation.rewards.experience} XP
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiGift className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedLocation.rewards.coins} Coins
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    onClick={() => {
                      // Handle location visit
                      setSelectedLocation(null);
                    }}
                  >
                    Visit Location
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

export default InteractiveMap; 