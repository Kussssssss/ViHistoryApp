import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiVolume2, FiVolumeX, FiBell, FiBellOff } from 'react-icons/fi';

const Settings: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Cài đặt
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Giao diện
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Chế độ sáng</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <FiSun className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Chế độ tối</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <FiMoon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sound Settings */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Âm thanh
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiVolume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Bật âm thanh</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <FiVolume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiVolumeX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Tắt âm thanh</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <FiVolumeX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Thông báo
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiBell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Bật thông báo</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <FiBell className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FiBellOff className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">Tắt thông báo</span>
              </div>
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <FiBellOff className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Account Settings */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-6 shadow-lg backdrop-blur-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Tài khoản
          </h2>
          
          <div className="space-y-4">
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Đổi mật khẩu
            </button>
            <button className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Đăng xuất
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings; 