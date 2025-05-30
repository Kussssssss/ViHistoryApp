import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { FiLock, FiClock, FiExternalLink, FiStar, FiAward, FiMapPin, FiBook, FiZoomIn, FiX, FiChevronLeft, FiChevronRight, FiShare2, FiMaximize2, FiSearch, FiFilter, FiArrowUp } from 'react-icons/fi';
import collectionsDataSource from '../data/collectionsState.json';
import confetti from 'canvas-confetti';
import { Tooltip } from 'react-tooltip';

type CollectibleType = 'event' | 'character' | 'location' | 'artifact';
type Rarity = 'common' | 'rare' | 'legendary' | 'event';

interface Collectible {
  id: string;
  name: string;
  type: CollectibleType;
  imageUrl: string;
  period: string;
  eventId?: string;
  rarity: Rarity;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
}

interface CollectionData {
  events: Collectible[];
  characters: Collectible[];
  locations: Collectible[];
  artifacts: Collectible[];
}

interface CollectionStats {
  total: number;
  unlocked: number;
  locked: number;
  completionPercentage: number;
  byRarity: {
    common: number;
    rare: number;
    legendary: number;
    event: number;
  };
}

const rarityEffects = {
  common: {
    glow: 'shadow-sm hover:shadow-md',
    border: 'border-gray-200',
    icon: FiBook,
    color: 'from-gray-100 to-gray-200',
    bgGradient: 'bg-gradient-to-br from-gray-50 to-gray-100',
    textColor: 'text-gray-700',
    badgeColor: 'bg-gray-100 text-gray-700',
  },
  rare: {
    glow: 'shadow-md hover:shadow-lg shadow-blue-200/50',
    border: 'border-blue-200',
    icon: FiStar,
    color: 'from-blue-100 to-blue-200',
    bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
    textColor: 'text-blue-700',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  legendary: {
    glow: 'shadow-lg hover:shadow-xl shadow-purple-300/50',
    border: 'border-purple-300',
    icon: FiAward,
    color: 'from-purple-100 to-purple-200',
    bgGradient: 'bg-gradient-to-br from-purple-50 to-purple-100',
    textColor: 'text-purple-700',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  event: {
    glow: 'shadow-lg hover:shadow-xl shadow-green-300/50',
    border: 'border-green-300',
    icon: FiMapPin,
    color: 'from-green-100 to-green-200',
    bgGradient: 'bg-gradient-to-br from-green-50 to-green-100',
    textColor: 'text-green-700',
    badgeColor: 'bg-green-100 text-green-700',
  },
};

const Collection: React.FC = () => {
  const [selectedCollectible, setSelectedCollectible] = useState<Collectible | null>(null);
  const [activeTab, setActiveTab] = useState<CollectibleType>('event');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isZoomed, setIsZoomed] = useState(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
  const [relatedItems, setRelatedItems] = useState<Collectible[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [activeFilters, setActiveFilters] = useState<Set<Rarity>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Parallax effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Handle fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    if (selectedCollectible) {
      // Tìm các vật phẩm liên quan
      const related = (collectionsDataSource[`${selectedCollectible.type}s` as keyof typeof collectionsDataSource] as Collectible[])
        .filter(item => item.id !== selectedCollectible.id)
        .slice(0, 3);
      setRelatedItems(related);
    }
  }, [selectedCollectible]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isZoomed) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Handle unlock with particles
  const handleUnlock = async () => {
    if (!selectedCollectible) return;

    setShowUnlockAnimation(true);
    
    // Trigger confetti with better configuration
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    await controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: { duration: 1.5 }
    });

    setShowUnlockAnimation(false);
  };

  // Handle share
  const handleShare = async () => {
    if (!selectedCollectible) return;

    setIsSharing(true);
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: selectedCollectible.name,
          text: selectedCollectible.description,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link đã được sao chép vào clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setIsSharing(false);
    }
  };

  // Handle fullscreen toggle
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : relatedItems.length));
      setSelectedCollectible(relatedItems[currentImageIndex > 0 ? currentImageIndex - 1 : relatedItems.length - 1]);
    } else {
      setCurrentImageIndex(prev => (prev < relatedItems.length ? prev + 1 : 0));
      setSelectedCollectible(relatedItems[currentImageIndex < relatedItems.length - 1 ? currentImageIndex + 1 : 0]);
    }
  };

  const tabs = [
    { id: 'event' as CollectibleType, label: 'Sự kiện lịch sử', icon: '📜' },
    { id: 'character' as CollectibleType, label: 'Nhân vật lịch sử', icon: '🧑‍🎖️' },
    { id: 'location' as CollectibleType, label: 'Địa điểm lịch sử', icon: '🏞' },
    { id: 'artifact' as CollectibleType, label: 'Hiện vật cổ', icon: '🧿' },
  ];

  const getRarityColor = (rarity: Rarity) => {
    switch (rarity) {
      case 'common': return 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700';
      case 'rare': return 'bg-gradient-to-r from-blue-200 to-blue-300 text-blue-700';
      case 'legendary': return 'bg-gradient-to-r from-purple-200 to-purple-300 text-purple-700';
      case 'event': return 'bg-gradient-to-r from-green-200 to-green-300 text-green-700';
      default: return 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700';
    }
  };

  const getRarityLabel = (rarity: Rarity) => {
    switch (rarity) {
      case 'common': return 'Thường';
      case 'rare': return 'Hiếm';
      case 'legendary': return 'Huyền thoại';
      case 'event': return 'Sự kiện';
      default: return 'Thường';
    }
  };

  const collections = collectionsDataSource as unknown as CollectionData;
  const activeCollection = collections[`${activeTab}s` as keyof CollectionData] || [];

  // Calculate collection statistics
  const collectionStats = useMemo<CollectionStats>(() => {
    const allItems = Object.values(collections).flat();
    const total = allItems.length;
    const unlocked = allItems.filter(item => item.unlocked).length;
    const locked = total - unlocked;
    const completionPercentage = (unlocked / total) * 100;

    const byRarity = {
      common: allItems.filter(item => item.rarity === 'common').length,
      rare: allItems.filter(item => item.rarity === 'rare').length,
      legendary: allItems.filter(item => item.rarity === 'legendary').length,
      event: allItems.filter(item => item.rarity === 'event').length,
    };

    return {
      total,
      unlocked,
      locked,
      completionPercentage,
      byRarity,
    };
  }, [collections]);

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let items = [...activeCollection];

    // Apply search filter
    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply rarity filters
    if (activeFilters.size > 0) {
      items = items.filter(item => activeFilters.has(item.rarity));
    }

    // Apply sorting
    items.sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return a.name.localeCompare(b.name) * order;
    });

    return items;
  }, [activeCollection, searchQuery, activeFilters, sortOrder]);

  // Handle search
  const handleSearch = (query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    setTimeout(() => setIsSearching(false), 500); // Simulate loading
  };

  // Handle filter toggle
  const toggleFilter = (rarity: Rarity) => {
    setActiveFilters(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(rarity)) {
        newFilters.delete(rarity);
      } else {
        newFilters.add(rarity);
      }
      return newFilters;
    });
  };

  // Handle sort toggle
  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages(prev => new Set(prev).add(imageUrl));
  };

  const getImageUrl = (baseUrl: string, size: 'thumbnail' | 'medium' | 'large' = 'medium') => {
    const url = baseUrl.replace('.jpg', `_${size}.jpg`);
    return url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-16"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
          </div>

          {/* Header Content */}
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium">
                  <FiAward className="w-4 h-4 mr-2" />
                  Bộ sưu tập độc quyền
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
              >
                Bộ sưu tập Lịch sử
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
              >
                Khám phá và sưu tầm những khoảnh khắc lịch sử quan trọng, nhân vật kiệt xuất và hiện vật quý giá
              </motion.p>

              {/* Collection Stats with Progress Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        Tiến độ sưu tầm
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {Math.round(collectionStats.completionPercentage)}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${collectionStats.completionPercentage}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {collectionStats.total}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Tổng số vật phẩm
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                        {collectionStats.unlocked}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Đã mở khóa
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                        {collectionStats.locked}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Chưa mở khóa
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                        {collectionStats.byRarity.legendary}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Vật phẩm huyền thoại
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4 justify-between items-center">
            {/* Search Input with Loading State */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm vật phẩm..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className={`w-full px-4 py-2 pl-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    ${isSearching ? 'pr-10' : ''}`}
                />
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FiSearch className="w-4 h-4 text-purple-500" />
                    </motion.div>
                  </div>
                )}
              </div>
            </div>

            {/* Filter and Sort Buttons with Tooltips */}
            <div className="flex gap-2">
              <button
                data-tooltip-id="filter-tooltip"
                data-tooltip-content="Lọc theo độ hiếm"
                className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors relative"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FiFilter className="w-5 h-5" />
                {activeFilters.size > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-white text-xs flex items-center justify-center">
                    {activeFilters.size}
                  </span>
                )}
              </button>
              <button
                data-tooltip-id="sort-tooltip"
                data-tooltip-content={`Sắp xếp ${sortOrder === 'asc' ? 'A-Z' : 'Z-A'}`}
                className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={toggleSort}
              >
                <FiArrowUp className={`w-5 h-5 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-wrap gap-2">
                  {Object.entries(rarityEffects).map(([rarity, effect]) => (
                    <button
                      key={rarity}
                      onClick={() => toggleFilter(rarity as Rarity)}
                      className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors
                        ${activeFilters.has(rarity as Rarity)
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      <effect.icon className="w-4 h-4" />
                      <span>{getRarityLabel(rarity as Rarity)}</span>
                      <span className="text-sm opacity-75">
                        ({collectionStats.byRarity[rarity as keyof typeof collectionStats.byRarity]})
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

            <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl flex items-center space-x-3 transition-all
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
                }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredAndSortedItems.map((item: Collectible) => {
            const rarityEffect = rarityEffects[item.rarity];
            const Icon = rarityEffect.icon;

                      return (
                        <motion.div
                          key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                initial="initial"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => setSelectedCollectible(item)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer
                  ${item.unlocked ? rarityEffect.glow : 'opacity-75'}
                  ${rarityEffect.border} border-2
                  transform-gpu perspective-1000
                  ${rarityEffect.bgGradient}
                  dark:bg-gray-800`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold ${rarityEffect.textColor}`}>
                      {item.name}
                    </h3>
                    <motion.div
                      animate={hoveredItem === item.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-6 h-6 ${rarityEffect.textColor}`} />
                    </motion.div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <FiClock className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    {item.eventId && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          /* Navigate to event */
                        }}
                        className="flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                      >
                        <span>Xem sự kiện</span>
                        <FiExternalLink className="w-4 h-4" />
                      </motion.button>
                    )}
                  </div>
                </div>

                {!item.unlocked && (
                  <motion.div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      animate={showUnlockAnimation ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                      } : {
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: showUnlockAnimation ? 1.5 : 2,
                        repeat: showUnlockAnimation ? 0 : Infinity,
                        repeatType: "reverse"
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUnlock();
                      }}
                      className="flex flex-col items-center"
                    >
                      <FiLock className="w-12 h-12 text-white cursor-pointer hover:text-yellow-400 transition-colors mb-2" />
                      <span className="text-white text-sm font-medium">Mở khóa để xem</span>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedCollectible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50
                ${isFullscreen ? 'p-0' : ''}`}
              onClick={() => {
                setIsZoomed(false);
                setSelectedCollectible(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`bg-white rounded-2xl overflow-hidden
                  ${isFullscreen ? 'w-screen h-screen rounded-none' : 'max-w-5xl w-full'}`}
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    {selectedCollectible.name}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 mb-6 text-lg"
                  >
                    {selectedCollectible.description}
                  </motion.p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                    <motion.div 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <FiClock className="w-5 h-5" />
                      <span className="text-lg">{selectedCollectible.period}</span>
                    </motion.div>
                    <motion.span 
                      className={`px-4 py-2 rounded-full text-lg font-medium ${getRarityColor(selectedCollectible.rarity)}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {getRarityLabel(selectedCollectible.rarity)}
                    </motion.span>
                  </div>

                  {/* Related items */}
                  {relatedItems.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Vật phẩm liên quan</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {relatedItems.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedCollectible(item)}
                            className="relative rounded-lg overflow-hidden cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-4"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg ${rarityEffects[item.rarity].bgGradient} flex items-center justify-center`}>
                                {React.createElement(rarityEffects[item.rarity].icon, {
                                  className: `w-5 h-5 ${rarityEffects[item.rarity].textColor}`
                                })}
                              </div>
                              <p className="text-gray-900 dark:text-white text-sm font-medium truncate">{item.name}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedCollectible.eventId && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {/* Navigate to event */}}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all mt-8"
                    >
                      Xem sự kiện liên quan
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Tooltip id="filter-tooltip" />
      <Tooltip id="sort-tooltip" />
    </div>
  );
};

export default Collection;