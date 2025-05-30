import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBookOpen,
  FiSun,
  FiMoon,
  FiMap,
  FiBook,
  FiSettings,
  FiHome,
  FiMessageCircle,
  FiCompass,
  FiMessageSquare
} from 'react-icons/fi';
import { useAppState } from '../hooks/useAppState';

interface MainLayoutProps {
  children: React.ReactNode;
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onTabChange, activeTab }) => {
  const { state, setActiveTab, toggleDarkMode, toggleChatbot } = useAppState();

  // Navigation items
  const navItems = [
    { icon: <FiHome />, label: 'Trang chủ', id: 'home' },
    { icon: <FiMap />, label: 'Khám phá', id: 'explore' },
    { icon: <FiBook />, label: 'Bộ sưu tập', id: 'collection' },
    { icon: <FiSettings />, label: 'Cài đặt', id: 'settings' },
    { icon: <FiMessageSquare />, label: 'Chatbot', id: 'chatbot' }
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FiBookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lịch Sử Việt Nam
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onTabChange(item.id)}
                className={`p-2 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                title={item.label}
              >
                {item.icon}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {state.isDarkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 pb-20">
          {children}
        </div>
      </main>

      {/* Chatbot Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChatbot}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-50"
      >
        <FiMessageCircle className="w-8 h-8" />
      </motion.button>
    </div>
  );
};

export default MainLayout; 