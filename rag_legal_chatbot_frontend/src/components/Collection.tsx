import React from 'react';
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi'; 
import collectionsDataSource from '/data/collectionsState.json';

interface BaseCollectionItem {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'event';
}

interface ObtainedCollectionItem extends BaseCollectionItem {
  obtainedAt: string;
}

interface CollectionSourceData {
  id: string;
  title: string;
  allPossibleItems: BaseCollectionItem[];
  obtainedItemIds: Record<string, string>; // e.g., { "item-id-1": "2024-01-01", ... }
}

interface CollectionForDisplay {
  id: string;
  title: string;
  obtainedItemsList: ObtainedCollectionItem[]; // List of actually obtained items with 'obtainedAt'
  allPossibleItems: BaseCollectionItem[];    // All items defined for this collection
  obtainedItemIds: Record<string, string>;   // To easily check if an item from allPossibleItems is obtained
  progress: number;                          // Represents the percentage of items collected
  totalItems: number;                        // Total number of items possible in this collection
}


const Collection: React.FC = () => {
  const collections: CollectionForDisplay[] = collectionsDataSource.map((sourceData: CollectionSourceData) => {
    const obtainedItemsWithDate: ObtainedCollectionItem[] = sourceData.allPossibleItems
      .filter(item => sourceData.obtainedItemIds[item.id] !== undefined)
      .map(item => ({
        ...item,
        obtainedAt: sourceData.obtainedItemIds[item.id],
      }));

    const totalItems = sourceData.allPossibleItems.length;
    const progress = totalItems > 0 ? Math.round((obtainedItemsWithDate.length / totalItems) * 100) : 0;

    return {
      id: sourceData.id,
      title: sourceData.title,
      obtainedItemsList: obtainedItemsWithDate,
      allPossibleItems: sourceData.allPossibleItems,
      obtainedItemIds: sourceData.obtainedItemIds,
      totalItems: totalItems,
      progress: progress,
    };
  });

  const getRarityText = (rarity: BaseCollectionItem['rarity']) => {
    switch (rarity) {
      case 'common': return 'Common';
      case 'rare': return 'Rare';
      case 'epic': return 'Epic';
      case 'legendary': return 'Legendary';
      case 'event': return 'Event';
      default:
        const CappedRarity = rarity as string;
        return CappedRarity.charAt(0).toUpperCase() + CappedRarity.slice(1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center sm:text-left">
        Bộ sưu tập Lịch sử của bạn
      </h1>

      {collections.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Bạn chưa có bộ sưu tập lịch sử nào.
          </p>
          <p className="text-gray-500 dark:text-gray-500 mt-2">
            Hãy bắt đầu khám phá và thu thập các hiện vật lịch sử!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              className="bg-white/70 dark:bg-slate-800/70 rounded-xl overflow-hidden shadow-lg backdrop-blur-md border border-gray-200 dark:border-slate-700"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-5 border-b pb-3 border-slate-200 dark:border-slate-700">
                  {collection.title}
                </h2>

                {collection.allPossibleItems.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    Không có hiện vật nào được định nghĩa cho bộ sưu tập này.
                  </p>
                ) : (
                  <div className="space-y-5 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                    {collection.allPossibleItems.map((item) => {
                      const isObtained = collection.obtainedItemIds[item.id] !== undefined;
                      const obtainedAtDate = isObtained ? collection.obtainedItemIds[item.id] : null;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className={`flex items-start space-x-4 p-4 rounded-lg shadow-sm transition-all duration-200 ease-in-out
                            ${isObtained
                              ? 'bg-slate-50 dark:bg-slate-900/50 hover:shadow-md' // Style for obtained
                              : 'bg-slate-100/60 dark:bg-slate-800/30 opacity-70 hover:opacity-95' // Style for unobtained
                            }`}
                        >
                          <div className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700 
                            ${!isObtained ? 'filter grayscale contrast-75' : ''}
                          `}>
                            <img
                              src={item.image || '/images/placeholder-history.png'} // Fallback image
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-bold text-lg 
                              ${isObtained 
                                ? 'text-slate-700 dark:text-slate-100' 
                                : 'text-slate-500 dark:text-slate-400'
                              }`}>
                              {item.name}
                            </h3>
                            <p className={`text-sm mt-1 leading-relaxed 
                              ${isObtained 
                                ? 'text-slate-600 dark:text-slate-400' 
                                : 'text-slate-500/80 dark:text-slate-400/80 italic' // Slightly more muted for unobtained desc
                              }`}>
                              {isObtained ? item.description : "Chưa được khám phá."}
                            </p>
                            <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                                item.rarity === 'common' ? 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200' :
                                item.rarity === 'rare' ? 'bg-sky-100 text-sky-700 dark:bg-sky-800 dark:text-sky-200' :
                                item.rarity === 'epic' ? 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-800 dark:text-fuchsia-200' :
                                item.rarity === 'event' ? 'bg-lime-100 text-lime-700 dark:bg-lime-800 dark:text-lime-200' : // Event rarity style
                                'bg-amber-100 text-amber-700 dark:bg-amber-700 dark:text-amber-100' // Legendary
                              } ${!isObtained ? 'opacity-70' : ''}`}>
                                {getRarityText(item.rarity)}
                              </span>
                              {isObtained && obtainedAtDate ? (
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                  Thu thập: {new Date(obtainedAtDate).toLocaleDateString('vi-VN')}
                                </span>
                              ) : (
                                <div className="flex items-center space-x-1 text-xs text-slate-400 dark:text-slate-500 italic">
                                  <FiLock className="w-3 h-3" />
                                  <span>Chưa sở hữu</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      Tiến độ ({collection.obtainedItemsList.length}/{collection.totalItems})
                    </span>
                    <span className="text-sm font-bold text-slate-700 dark:text-white">
                      {collection.progress}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${collection.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
       {/* Basic styling for custom scrollbar, you might want to put this in a CSS file */}
       <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; /* Or use a light bg for the track if preferred */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(100, 116, 139, 0.5); /* slate-500 with opacity */
          border-radius: 10px;
          border: 2px solid transparent; /* Creates padding around thumb */
          background-clip: content-box; /* Ensures border doesn't make thumb smaller */
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(71, 85, 105, 0.7); /* slate-600 with opacity for dark mode */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(100, 116, 139, 0.8);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(71, 85, 105, 0.9);
        }
      `}</style>
    </div>
  );
};

export default Collection;