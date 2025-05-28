import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiLock } from 'react-icons/fi';

interface CollectionItem {
  id: string;
  name: string;
  description: string;
  image: string;
  obtainedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface Collection {
  id: string;
  title: string;
  items: CollectionItem[];
  progress: number;
}

const Collection: React.FC = () => {
  // Sample collections data
  const collections: Collection[] = [
    {
      id: 'collection-1',
      title: 'Các triều đại Việt Nam',
      items: [
        {
          id: 'item-1',
          name: 'Nhà Ngô',
          description: 'Triều đại đầu tiên của Việt Nam',
          image: '/images/ngo-dynasty.jpg',
          obtainedAt: '2024-03-20',
          rarity: 'rare'
        }
      ],
      progress: 25
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Bộ sưu tập của bạn
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <motion.div
            key={collection.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white/80 dark:bg-gray-900/80 rounded-xl overflow-hidden shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {collection.title}
              </h2>
              
              <div className="space-y-4">
                {collection.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                      <div className="mt-2 flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.rarity === 'common' ? 'bg-gray-100 text-gray-800' :
                          item.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                          item.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.rarity}
                        </span>
                        <span className="text-xs text-gray-500">
                          Thu thập: {new Date(item.obtainedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Tiến độ
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {collection.progress}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${collection.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collection; 