import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSend, 
  FiX, 
  FiBookOpen, 
  FiMoon, 
  FiSun, 
  FiPlus, 
  FiTrash2, 
  FiShare2,
  FiMenu,
  FiUser,
  FiThumbsUp,
  FiThumbsDown,
  FiHelpCircle,
  FiMessageCircle,
  FiEdit,
  FiBookmark,
  FiSearch,
  FiDownload,
  FiCheckCircle,
  FiInfo,
  FiZap
} from 'react-icons/fi';
import axios from 'axios';
import './Chatbot.css';
import ReactMarkdown from 'react-markdown';

// Gợi ý được phân loại theo danh mục
const SUGGESTIONS = {
  common: [
    'Vua Quang Trung có những chiến công nào?',
    'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?',
    'Nhà Trần có những vị vua nào nổi tiếng?',
    'Cuộc khởi nghĩa Lam Sơn do ai lãnh đạo?',
    'Vua Lê Lợi có những cải cách gì?',
    'Chiến thắng Bạch Đằng diễn ra vào năm nào?',
    'Nhà Nguyễn có bao nhiêu đời vua?',
    'Vua Gia Long có những cải cách gì?'
  ],
  periods: [
    'Thời kỳ Bắc thuộc',
    'Thời kỳ phong kiến độc lập',
    'Thời kỳ Pháp thuộc',
    'Thời kỳ hiện đại'
  ],
  figures: [
    'Vua Quang Trung',
    'Vua Lê Lợi',
    'Vua Gia Long',
    'Trần Hưng Đạo',
    'Nguyễn Huệ'
  ]
};

// Thêm các constants cho API
const API_CONFIG = {
  baseURL: 'http://localhost:5000/api',
  timeout: 60000,
  retryAttempts: 3,
  retryDelay: 1000,
};

// Thêm các constants cho theme và animation
const THEME = {
  colors: {
    primary: {
      light: '#4F46E5', // Indigo 600
      dark: '#4338CA',  // Indigo 700
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)'
    },
    secondary: {
      light: '#7C3AED', // Violet 600
      dark: '#6D28D9',  // Violet 700
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)'
    },
    accent: {
      light: '#EC4899', // Pink 500
      dark: '#DB2777',  // Pink 600
      gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)'
    },
    background: {
      light: '#F9FAFB', // Gray 50
      dark: '#111827',  // Gray 900
      card: {
        light: '#FFFFFF',
        dark: '#1F2937'  // Gray 800
      }
    },
    text: {
      primary: {
        light: '#111827', // Gray 900
        dark: '#F9FAFB'   // Gray 50
      },
      secondary: {
        light: '#4B5563', // Gray 600
        dark: '#9CA3AF'   // Gray 400
      }
    }
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  }
};

// Cập nhật IntroIllustration với icon react-icons
const IntroIllustration = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center space-y-6"
  >
    <div
      className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center"
      style={{
        boxShadow: '0 8px 32px rgba(79, 70, 229, 0.2)',
      }}
    >
      <FiBookOpen className="text-white" style={{ width: 100, height: 100, filter: 'drop-shadow(0 4px 16px rgba(79,70,229,0.15))' }} />
    </div>
    <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
      Lịch sử Việt Nam
    </h2>
    <p className="text-gray-600 dark:text-gray-300 text-center max-w-md text-lg">
      Khám phá lịch sử Việt Nam qua các thời kỳ, sự kiện và nhân vật lịch sử quan trọng
    </p>
  </motion.div>
);

// Cập nhật MessageAvatar với icon mới
const MessageAvatar = ({ sender }: { sender: 'user' | 'bot' }) => (
  <div
    className={`w-12 h-12 rounded-full flex items-center justify-center ${
      sender === 'user' 
        ? 'bg-gradient-to-br from-indigo-500 to-violet-600' 
        : 'bg-gradient-to-br from-pink-500 to-rose-600'
    }`}
  >
    {sender === 'user' ? (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FiUser className="w-7 h-7 text-white" />
      </motion.div>
    ) : (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FiBookOpen className="w-7 h-7 text-white" />
      </motion.div>
    )}
  </div>
);

// Cập nhật FeedbackButtons với icon mới
const FeedbackButtons = ({ onFeedback }: { onFeedback: (isPositive: boolean) => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center space-x-2 mt-2"
  >
    <button
      onClick={() => onFeedback(true)}
      className="p-2 text-green-500 hover:bg-green-100 rounded-full transition-colors"
      aria-label="Thích"
    >
      <FiThumbsUp />
    </button>
    <button
      onClick={() => onFeedback(false)}
      className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
      aria-label="Không thích"
    >
      <FiThumbsDown />
    </button>
  </motion.div>
);

// Thêm component TypingIndicator
const TypingIndicator = () => (
  <div className="flex space-x-1.5 p-2">
    <motion.div
      className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2
      }}
    />
    <motion.div
      className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4
      }}
    />
  </div>
);

// Thêm interface cho câu hỏi liên quan
interface RelatedQuestion {
  question: string;
  count: number;
  category: string;
}

// Cập nhật component FAQSuggestions thành RelatedQuestions
const RelatedQuestions = ({ questions, onQuestionClick }: { 
  questions: RelatedQuestion[], 
  onQuestionClick: (question: string) => void 
}) => {
  const [clickedQuestions, setClickedQuestions] = useState<Set<string>>(new Set());

  const handleQuestionClick = (question: string) => {
    if (!clickedQuestions.has(question)) {
      setClickedQuestions(prev => new Set([...prev, question]));
      onQuestionClick(question);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-4 space-y-2"
    >
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        <FiHelpCircle className="w-4 h-4 text-indigo-500" />
        <span>Câu hỏi liên quan:</span>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {questions.map((q, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className="w-full p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <FiMessageCircle className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800 dark:text-gray-200">
                  {q.question}
                </div>
                {q.category && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      {q.category}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <motion.button
              onClick={() => handleQuestionClick(q.question)}
              disabled={clickedQuestions.has(q.question)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md ${
                clickedQuestions.has(q.question)
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
              }`}
            >
              <FiSend className="w-4 h-4" />
              <span>{clickedQuestions.has(q.question) ? 'Đã gửi' : 'Gửi câu hỏi này'}</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Thêm các interface cần thiết
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
  isRetry?: boolean;
  saved?: boolean;
  thinking?: string;
  error?: boolean;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date;
}

interface ChatResponse {
  answer: string;
  context: string[];
  related_questions?: RelatedQuestion[];
  error?: string;
  thinking?: string;
  faq_suggestions?: RelatedQuestion[];
}

// Cập nhật kiểu dữ liệu cho feedback
type FeedbackType = 'positive' | 'negative';

interface Feedback {
  [key: string]: FeedbackType;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(16);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>({});
  const [showFeedbackForm, setShowFeedbackForm] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [editingText, setEditingText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [savedMessages, setSavedMessages] = useState<Message[]>([]);
  const [relatedQuestions, setRelatedQuestions] = useState<RelatedQuestion[]>([]);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Thiết lập chế độ sáng/tối
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Lấy dữ liệu từ localStorage khi khởi động
  useEffect(() => {
    const savedConversations = localStorage.getItem('legal-bot-conversations');
    if (savedConversations) {
      setConversations(JSON.parse(savedConversations));
    }
    
    const savedBookmarks = localStorage.getItem('legal-bot-bookmarks');
    if (savedBookmarks) {
      setSavedMessages(JSON.parse(savedBookmarks));
    }
    
    const savedFontSize = localStorage.getItem('legal-bot-font-size');
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
    }
  }, []);

  // Lưu dữ liệu vào localStorage khi có thay đổi
  useEffect(() => {
    localStorage.setItem('legal-bot-conversations', JSON.stringify(conversations));
  }, [conversations]);
  
  useEffect(() => {
    localStorage.setItem('legal-bot-bookmarks', JSON.stringify(savedMessages));
  }, [savedMessages]);
  
  useEffect(() => {
    localStorage.setItem('legal-bot-font-size', fontSize.toString());
  }, [fontSize]);

  // Cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  // Tự động đóng sidebar khi màn hình nhỏ và chuyển sang chế độ chat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  // Xóa thông báo phản hồi sau 3 giây
  useEffect(() => {
    if (Object.values(feedback).length > 0) {
      const timer = setTimeout(() => {
        setFeedback({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // Lọc cuộc trò chuyện theo tìm kiếm
  const filteredConversations = useMemo(() => {
    if (!searchTerm.trim()) return conversations;
    
    const searchLower = searchTerm.toLowerCase();
    return conversations.filter(conv => {
      // Tìm kiếm trong tiêu đề
      if (conv.title.toLowerCase().includes(searchLower)) return true;
      
      // Tìm kiếm trong nội dung tin nhắn
      return conv.messages.some(msg => {
        const text = msg.text.toLowerCase();
        return text.includes(searchLower);
      });
    }).sort((a, b) => {
      // Sắp xếp theo thời gian mới nhất
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }, [conversations, searchTerm]);

  // Thêm tin nhắn người dùng
  const addUserMessage = (text: string) => {
    const msg: Message = { 
      id: crypto.randomUUID(), 
      text, 
      sender: 'user', 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, msg]);
    
    // Tự động lưu cuộc trò chuyện
    saveCurrentConversation(text);
    
    return msg;
  };

  // Thêm tin nhắn bot
  const addBotMessage = (text: string, thinking?: string) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      ...(thinking ? { thinking } : {})
    };
    setMessages(prev => [...prev, msg]);
    // Cập nhật cuộc trò chuyện hiện tại
    if (currentConversationId) {
      updateConversation(currentConversationId, [...messages, msg]);
    }
    return msg;
  };

  // Tạo cuộc trò chuyện mới
  const createNewConversation = (firstMessage?: string) => {
    const title = firstMessage ? 
      (firstMessage.length > 30 ? firstMessage.substring(0, 30) + '...' : firstMessage) : 
      `Cuộc trò chuyện mới ${new Date().toLocaleString()}`;
    
    const newConv: Conversation = {
      id: crypto.randomUUID(),
      title,
      messages: messages.length ? [...messages] : [],
      createdAt: new Date(),
      updatedAt: new Date(),
      timestamp: new Date()
    };
    
    setConversations(prev => [newConv, ...prev]);
    setCurrentConversationId(newConv.id);
    setFeedback({});
    return newConv.id;
  };

  // Lưu cuộc trò chuyện hiện tại
  const saveCurrentConversation = (userMessage?: string) => {
    if (!currentConversationId && messages.length === 0) {
      // Tạo cuộc trò chuyện mới nếu chưa có
      createNewConversation(userMessage);
    } else if (currentConversationId) {
      // Cập nhật cuộc trò chuyện hiện tại
      updateConversation(currentConversationId, messages);
      setFeedback({});
    } else if (messages.length > 0) {
      // Tạo cuộc trò chuyện mới từ tin nhắn hiện tại
      createNewConversation(userMessage || messages[0]?.text);
    }
  };

  // Cập nhật cuộc trò chuyện
  const updateConversation = (convId: string, updatedMessages: Message[]) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === convId) {
        const updatedTitle = updatedMessages[0]?.text 
          ? (updatedMessages[0].text.length > 30 ? updatedMessages[0].text.substring(0, 30) + '...' : updatedMessages[0].text)
          : conv.title;
          
        return {
          ...conv,
          title: updatedTitle,
          messages: updatedMessages,
          updatedAt: new Date()
        };
      }
      return conv;
    }));
  };

  // Load cuộc trò chuyện
  const loadConversation = (convId: string) => {
    const conversation = conversations.find(conv => conv.id === convId);
    if (conversation) {
      setMessages(conversation.messages);
      setCurrentConversationId(convId);
      setSidebarOpen(false);
      setFeedback({});
      
      // Focus vào input sau khi load cuộc trò chuyện
      if (inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300);
      }
    }
  };

  // Xóa cuộc trò chuyện
  const deleteConversation = (convId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    
    if (window.confirm('Bạn có chắc chắn muốn xóa cuộc trò chuyện này?')) {
      setConversations(prev => prev.filter(conv => conv.id !== convId));
      if (currentConversationId === convId) {
        setCurrentConversationId(null);
        setMessages([]);
      }
      setFeedback({});
    }
  };

  // Đổi tên cuộc trò chuyện
  const renameConversation = (convId: string, newTitle: string) => {
    if (!newTitle.trim()) {
      setFeedback({});
      return;
    }
    
    setConversations(prev => prev.map(conv => {
      if (conv.id === convId) {
        return { ...conv, title: newTitle.trim() };
      }
      return conv;
    }));
    setFeedback({});
  };

  // Lưu tin nhắn yêu thích
  const toggleSaveMessage = (messageId: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        const saved = !msg.saved;
        
        // Thêm hoặc xóa khỏi danh sách đã lưu
        if (saved) {
          setSavedMessages(prev => [...prev, { ...msg, saved }]);
          setFeedback({});
        } else {
          setSavedMessages(prev => prev.filter(m => m.id !== msg.id));
          setFeedback({});
        }
        
        return { ...msg, saved };
      }
      return msg;
    }));
    
    // Cập nhật trong cuộc trò chuyện hiện tại
    if (currentConversationId) {
      const updatedMessages = messages.map(msg => {
        if (msg.id === messageId) {
          return { ...msg, saved: !msg.saved };
        }
        return msg;
      });
      updateConversation(currentConversationId, updatedMessages);
    }
  };

  // Cập nhật hàm shareMessage
  const shareMessage = async (messageText: string) => {
    try {
      // Thêm định dạng cho tin nhắn khi copy
      const formattedText = messageText
        .replace(/```([\s\S]*?)```/g, '$1') // Loại bỏ markdown code blocks
        .replace(/\*\*(.*?)\*\*/g, '$1')    // Loại bỏ markdown bold
        .replace(/\*(.*?)\*/g, '$1')        // Loại bỏ markdown italic
        .trim();

      await navigator.clipboard.writeText(formattedText);
      setFeedback({});
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      setFeedback({});
    }
  };

  // Xuất cuộc trò chuyện ra file
  const exportConversation = () => {
    if (messages.length === 0) {
      setFeedback({});
      return;
    }

    try {
      const conversationText = messages
        .map(msg => `[${msg.timestamp}] ${msg.sender === 'user' ? 'Bạn' : 'Bot'}: ${msg.text}`)
        .join('\n\n');
        
      const blob = new Blob([conversationText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cuoc-tro-chuyen-phap-ly-${new Date().toLocaleDateString().replace(/\//g, '-')}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setFeedback({});
    } catch (error) {
      console.error('Error exporting conversation:', error);
      setFeedback({});
    }
  };

  // Xóa tất cả tin nhắn
  const clearConversation = () => {
    if (messages.length === 0) {
      setFeedback({});
      return;
    }
    
    if (window.confirm('Bạn có chắc chắn muốn xóa cuộc trò chuyện này?')) {
      setMessages([]);
      setCurrentConversationId(null);
      setFeedback({});
    }
  };

  // Tạo cuộc trò chuyện mới
  const startNewConversation = () => {
    clearConversation();
    createNewConversation();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Thêm hàm xử lý lỗi API
  const handleApiError = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        return 'Yêu cầu của bạn đã hết thời gian chờ. Vui lòng thử lại.';
      }
      if (error.response?.status === 404) {
        return 'Không tìm thấy thông tin về chủ đề này trong tài liệu lịch sử.';
      }
      if (error.response?.status === 500) {
        return 'Đã xảy ra lỗi khi tìm kiếm thông tin. Vui lòng thử lại sau.';
      }
      return error.response?.data?.error || 'Đã xảy ra lỗi. Vui lòng thử lại sau.';
    }
    return 'Đã xảy ra lỗi không xác định. Vui lòng thử lại sau.';
  };

  // Thêm hàm retry cho API calls
  const retryApiCall = async <T,>(
    apiCall: () => Promise<T>,
    retries: number = API_CONFIG.retryAttempts,
    delay: number = API_CONFIG.retryDelay
  ): Promise<T> => {
    try {
      return await apiCall();
    } catch (error) {
      if (retries === 0) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryApiCall(apiCall, retries - 1, delay * 2);
    }
  };

  // Thêm hàm xử lý feedback
  const handleFeedback = (messageId: string, type: FeedbackType) => {
    setSelectedMessage(messages.find(m => m.id === messageId) || null);
    setFeedbackType(type);
    setShowFeedbackForm(messageId);
  };

  // Cập nhật hàm handleFeedbackSubmit
  const handleFeedbackSubmit = async (feedback: string) => {
    if (!selectedMessage || !feedbackType) return;
    
    try {
      await axios.post(`${API_CONFIG.baseURL}/chat/feedback`, {
        question: selectedMessage.text,
        answer: feedback,
        is_positive: feedbackType === 'positive',
        feedback_text: feedback
      });
      setShowFeedbackForm(null);
      setSelectedMessage(null);
      setFeedbackText('');
      setFeedbackType(null);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  // Thêm hàm kiểm tra câu hỏi
  const isQuestion = (text: string): boolean => {
    // Loại bỏ các câu chào hỏi và câu không phải câu hỏi
    const greetings = ['xin chào', 'chào', 'hi', 'hello', 'hey', 'chào bạn', 'chào bot'];
    const lowerText = text.toLowerCase().trim();
    
    if (greetings.some(greeting => lowerText.includes(greeting))) {
      return false;
    }
    
    // Kiểm tra các dấu hiệu của câu hỏi
    const questionIndicators = [
      '?', 'là gì', 'như thế nào', 'khi nào', 'ở đâu', 
      'tại sao', 'vì sao', 'bao nhiêu', 'có phải', 'phải không',
      'làm sao', 'cách nào', 'thế nào', 'làm gì', 'có được không'
    ];
    
    return questionIndicators.some(indicator => lowerText.includes(indicator));
  };

  // Thêm hàm kiểm tra câu hỏi liên quan đến quy định trường
  const isRelatedToSchoolRegulations = (text: string): boolean => {
    const keywords = [
      'quy định', 'điều khoản', 'nội quy', 'quy chế', 'chính sách',
      'thủ tục', 'quy trình', 'học phí', 'học bổng', 'đào tạo',
      'tốt nghiệp', 'thi cử', 'rèn luyện', 'kỷ luật', 'thư viện',
      'ký túc xá', 'phòng đào tạo', 'phòng công tác sinh viên',
      'trường đại học', 'đại học', 'uit', 'UIT', 'trường', 'khoa',
      'giảng viên', 'sinh viên', 'học viên', 'nghiên cứu sinh', 'tuyển sinh'
    ];
    
    const lowerText = text.toLowerCase();
    return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
  };

  // Thêm hàm kiểm tra câu hỏi liên quan đến lịch sử
  const isRelatedToHistory = (text: string): boolean => {
    const historyKeywords = [
      'lịch sử', 'vua', 'triều đại', 'chiến thắng', 'khởi nghĩa',
      'nhà lý', 'nhà trần', 'nhà lê', 'nhà nguyễn', 'đinh', 'tiền lê',
      'quang trung', 'lê lợi', 'gia long', 'điện biên phủ', 'bạch đằng',
      'lam sơn', 'đống đa', 'ngọc hồi', 'thăng long', 'hà nội'
    ];
    const textLower = text.toLowerCase();
    return historyKeywords.some(keyword => textLower.includes(keyword));
  };

  // Thêm hàm để xử lý câu hỏi liên quan
  const handleRelatedQuestionClick = (question: string) => {
    setInput(question);
    handleSendMessage();
  };

  // Cập nhật hàm sendMessage để xử lý recommendation system
  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    // Đóng sidebar khi gửi tin nhắn trên mobile
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
    
    const userMsg = addUserMessage(text);
    setIsLoading(true);
    setInput('');
    
    // Thêm tin nhắn đang gõ với animation
    const typingMsg: Message = {
      id: crypto.randomUUID(),
      text: '',
      sender: 'bot',
      timestamp: new Date(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMsg]);
    
    try {
      console.log(`Sending to API URL: ${API_CONFIG.baseURL}/chat`);
      const response = await axios.post<ChatResponse>(
        `${API_CONFIG.baseURL}/chat`,
        { 
          query: text,
          context: {
            previous_messages: messages.slice(-5),
            user_info: {
              language: 'vi',
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
          }
        },
        {
          timeout: API_CONFIG.timeout,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // Xóa tin nhắn đang gõ và thêm tin nhắn bot
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      const botMsg = addBotMessage(response.data.answer || "Xin lỗi, tôi không thể trả lời câu hỏi này.", response.data.thinking);
      
      // Cập nhật câu hỏi liên quan
      if (response.data.faq_suggestions && response.data.faq_suggestions.length > 0) {
        setRelatedQuestions(response.data.faq_suggestions);
      } else {
        setRelatedQuestions([]);
      }

      setIsLoading(false);

      // Cập nhật cuộc trò chuyện trong localStorage
      if (currentConversationId) {
        updateConversation(currentConversationId, [...messages, userMsg, botMsg]);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = handleApiError(error);
      
      // Xóa tin nhắn đang gõ và thêm tin nhắn lỗi
      setMessages(prev => prev.filter(msg => !msg.isTyping));
      addBotMessage(errorMessage);
      setIsLoading(false);
      setRelatedQuestions([]);

      // Thêm retry button nếu là lỗi mạng
      if (axios.isAxiosError(error) && !error.response) {
        const retryMsg: Message = {
          id: crypto.randomUUID(),
          text: 'Nhấn vào đây để thử lại',
          sender: 'bot',
          timestamp: new Date(),
          isRetry: true
        };
        setMessages(prev => [...prev, retryMsg]);
      }
    }
  };

  // Thêm hàm xử lý retry
  const handleRetry = (messageId: string) => {
    const messageToRetry = messages.find(msg => msg.id === messageId);
    if (messageToRetry && messageToRetry.sender === 'user') {
      sendMessage(messageToRetry.text);
    }
  };

  // Xử lý khi nhấn phím Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim()) {
        sendMessage(input);
      }
    }
  };

  // Thay đổi kích thước font chữ
  const changeFontSize = (size: number) => {
    setFontSize(size);
    localStorage.setItem('legal-bot-font-size', size.toString());
    setFeedback({});
  };

  // Helper để lấy class cho font size
  const getFontSizeClass = (msgType: 'user' | 'bot') => {
    const baseClass = msgType === 'user' ? 'text-sm md:text-base' : 'text-sm md:text-base';
    
    switch (fontSize) {
      case 14: return 'text-xs md:text-sm';
      case 16: return baseClass;
      case 18: return 'text-base md:text-lg';
      default: return baseClass;
    }
  };

  // Thêm component FeedbackForm
  const FeedbackForm = ({ messageId }: { messageId: string }) => (
    <div className="mt-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={() => handleFeedback(messageId, true)}
          className="btn-primary flex items-center"
        >
          <FiCheckCircle className="mr-2" />
          Thích
        </button>
        <button
          onClick={() => handleFeedback(messageId, false)}
          className="btn-secondary flex items-center"
        >
          <FiX className="mr-2" />
          Không thích
        </button>
      </div>
      <textarea
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        placeholder="Nhập phản hồi của bạn (không bắt buộc)..."
        className="input-modern w-full mb-4"
        rows={2}
      />
    </div>
  );

  // Thêm component FAQSuggestions
  const FAQSuggestions = () => {
    const historyTopics = [
      {
        title: "Các triều đại phong kiến",
        questions: [
          "Nhà Lý có những vị vua nào?",
          "Nhà Trần có những chiến công gì?",
          "Nhà Lê có những cải cách gì?"
        ]
      },
      {
        title: "Các cuộc kháng chiến",
        questions: [
          "Chiến thắng Bạch Đằng diễn ra như thế nào?",
          "Chiến thắng Điện Biên Phủ có ý nghĩa gì?",
          "Cuộc khởi nghĩa Lam Sơn diễn ra như thế nào?"
        ]
      },
      {
        title: "Các nhân vật lịch sử",
        questions: [
          "Vua Quang Trung có những chiến công nào?",
          "Vua Lê Lợi có những cải cách gì?",
          "Vua Gia Long có những thành tựu gì?"
        ]
      }
    ];

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Khám phá Lịch sử Việt Nam
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {historyTopics.map((topic, index) => (
            <div key={index} className="card p-6 bg-white dark:bg-gray-800">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                {topic.title}
              </h4>
              <ul className="space-y-3">
                {topic.questions.map((question, qIndex) => (
                  <li key={qIndex} className="text-gray-600 dark:text-gray-300">
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Thêm hàm xử lý edit tin nhắn
  const handleEditMessage = (messageId: string, currentText: string) => {
    setSelectedMessage(messages.find(m => m.id === messageId) || null);
    setEditingText(currentText);
  };

  // Cập nhật hàm handleSaveEdit để xử lý loading state
  const handleSaveEdit = async (messageId: string) => {
    // Tìm tin nhắn cần sửa và tin nhắn bot tiếp theo
    const messageIndex = messages.findIndex(msg => msg.id === messageId);
    if (messageIndex === -1) return;

    // Cập nhật tin nhắn đã sửa
    const updatedMessages = messages.map(msg => {
      if (msg.id === messageId) {
        return { ...msg, text: editingText };
      }
      return msg;
    });

    // Nếu là tin nhắn của user, xóa tin nhắn bot tiếp theo và gửi lại yêu cầu
    if (messages[messageIndex].sender === 'user') {
      // Xóa tin nhắn bot tiếp theo nếu có
      const nextMessage = messages[messageIndex + 1];
      if (nextMessage && nextMessage.sender === 'bot') {
        updatedMessages.splice(messageIndex + 1, 1);
      }

      // Cập nhật state với tin nhắn đã sửa
      setMessages(updatedMessages);
      setSelectedMessage(null);
      setEditingText('');
      setFeedback({});

      // Gửi lại yêu cầu với nội dung mới và đánh dấu là edit
      await sendMessage(editingText, true);
    } else {
      // Nếu là tin nhắn của bot, chỉ cập nhật nội dung
      setMessages(updatedMessages);
      setSelectedMessage(null);
      setEditingText('');
      setFeedback({});

      // Cập nhật cuộc trò chuyện trong localStorage
      if (currentConversationId) {
        updateConversation(currentConversationId, updatedMessages);
      }
    }
  };

  // Update dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_CONFIG.baseURL}/chat`, {
        message: input,
        conversation_id: currentConversationId
      });

      const botMessage: Message = {
        id: Date.now().toString(),
        text: response.data.response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setRelatedQuestions(response.data.related_questions || []);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed md:relative inset-y-0 left-0 z-50 w-80 md:w-96 h-full glass"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent flex items-center">
                  <FiBookOpen className="mr-3 text-sky-500 dark:text-sky-400 animate-float" />
                  Lịch sử Việt Nam
                </h2>
                <button 
                  onClick={() => setSidebarOpen(false)} 
                  className="btn-secondary"
                  aria-label="Đóng sidebar"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              {/* Sidebar Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Search */}
                <div className="relative mb-6 flex items-center">
                  <span className="flex items-center justify-center min-w-[40px] h-full absolute left-0 top-0 bottom-0 pointer-events-none">
                    <FiSearch className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="text"
                    placeholder="Tìm kiếm cuộc trò chuyện..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-modern w-full pl-12 pr-4"
                    style={{paddingLeft: '40px'}}
                  />
                </div>
                
                {/* New Chat Button */}
                <button 
                  onClick={startNewConversation}
                  className="btn-primary w-full mb-6"
                  aria-label="Tạo cuộc trò chuyện mới"
                >
                  <FiPlus className="mr-2 inline" />
                  Cuộc trò chuyện mới
                </button>
                
                {/* Conversation List */}
                <div className="space-y-4">
                  {filteredConversations.map(conv => (
                    <div 
                      key={conv.id}
                      onClick={() => loadConversation(conv.id)}
                      className={`card cursor-pointer ${
                        currentConversationId === conv.id ? 'ring-2 ring-sky-500' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <FiMessageCircle />
                          </div>
                          <div>
                            <h3 className="font-medium">{conv.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(conv.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const newTitle = prompt('Nhập tên mới:', conv.title);
                              if (newTitle) renameConversation(conv.id, newTitle);
                            }}
                            className="btn-secondary p-2"
                            aria-label="Đổi tên"
                          >
                            <FiEdit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => deleteConversation(conv.id, e)}
                            className="btn-secondary p-2"
                            aria-label="Xóa"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sidebar Footer */}
              <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm">Kích thước chữ:</span>
                  <div className="flex space-x-2">
                    {[14, 16, 18].map((size) => (
                      <button
                        key={size}
                        onClick={() => changeFontSize(size)}
                        className={`btn-secondary ${
                          fontSize === size ? 'bg-sky-500 text-white' : ''
                        }`}
                        aria-label={`Cỡ chữ ${size}`}
                      >
                        {size === 14 ? 'A' : size === 16 ? 'A' : 'A'}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className="btn-secondary w-full"
                  aria-label={isDarkMode ? "Chế độ sáng" : "Chế độ tối"}
                >
                  {isDarkMode ? (
                    <>
                      <FiSun className="mr-2 inline" />
                      Chế độ sáng
                    </>
                  ) : (
                    <>
                      <FiMoon className="mr-2 inline" />
                      Chế độ tối
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="glass flex items-center justify-between px-8 py-6">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="btn-secondary mr-4"
              aria-label={isSidebarOpen ? "Đóng sidebar" : "Mở sidebar"}
            >
              <FiMenu className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Lịch sử Việt Nam
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {messages.length > 0 && (
              <>
                <button
                  onClick={exportConversation}
                  className="btn-secondary"
                  aria-label="Xuất cuộc trò chuyện"
                >
                  <FiDownload className="mr-2 inline" />
                  Xuất
                </button>
                <button
                  onClick={clearConversation}
                  className="btn-secondary"
                  aria-label="Xóa trò chuyện"
                >
                  <FiTrash2 className="mr-2 inline" />
                  Xóa
                </button>
              </>
            )}
          </div>
        </header>

        {/* Messages */}
        <div 
          ref={scrollRef} 
          className="flex-1 overflow-y-auto px-4 md:px-8 py-8"
        >
          <div className="max-w-4xl mx-auto space-y-8"> {/* Added container with max width and center alignment */}
            <AnimatePresence initial={false}>
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`flex items-start gap-4 ${
                    msg.sender === 'user' 
                      ? 'justify-end' 
                      : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && <MessageAvatar sender={msg.sender} />}
                  <div className={`flex flex-col ${
                    msg.sender === 'user' 
                      ? 'items-end' 
                      : 'items-start'
                  } max-w-[80%] md:max-w-[70%]`}>
                    <div 
                      className={`card message-bubble relative shadow-xl group ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-tr-none'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-none'
                      } ${msg.isRetry ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' : ''}`}
                      onClick={msg.isRetry ? () => handleRetry(msg.id) : undefined}
                    >
                      {selectedMessage?.id === msg.id ? (
                        <div className="w-full">
                          <textarea
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            className="w-full p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            rows={3}
                          />
                          <div className="flex justify-end gap-2 mt-2">
                            <button
                              onClick={() => setSelectedMessage(null)}
                              className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            >
                              Hủy
                            </button>
                            <button
                              onClick={() => handleSaveEdit(msg.id)}
                              className="px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                            >
                              Lưu
                            </button>
                          </div>
                        </div>
                      ) : msg.isTyping ? (
                        <TypingIndicator />
                      ) : (
                        <>
                          <div className={`${getFontSizeClass(msg.sender)} whitespace-pre-wrap pr-12 ${
                            msg.sender === 'user' 
                              ? 'text-gray-900 dark:text-gray-100' 
                              : 'text-gray-900 dark:text-gray-100'
                          }`}>
                            {msg.sender === 'bot' ? (
                              <ReactMarkdown>{msg.text}</ReactMarkdown>
                            ) : (
                              msg.text
                            )}
                          </div>
                          <div className={`text-xs mt-3 pr-12 ${
                            msg.sender === 'user' 
                              ? 'text-indigo-100 text-right' 
                              : 'text-gray-500 dark:text-gray-400 text-left'
                          }`}>
                            {msg.timestamp.toLocaleTimeString()}
                          </div>
                          
                          {/* Message Actions - Bottom Right */}
                          {!msg.isRetry && (
                            <div className="absolute bottom-2 right-2 flex space-x-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
                              <button
                                onClick={() => shareMessage(msg.text)}
                                className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                                aria-label="Sao chép tin nhắn"
                              >
                                <FiShare2 className="w-3.5 h-3.5" />
                              </button>
                              {msg.sender === 'user' && (
                                <button
                                  onClick={() => handleEditMessage(msg.id, msg.text)}
                                  className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                                  aria-label="Sửa tin nhắn"
                                >
                                  <FiEdit className="w-3.5 h-3.5" />
                                </button>
                              )}
                              {msg.sender === 'bot' && (
                                <button
                                  onClick={() => toggleSaveMessage(msg.id)}
                                  className={`p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 ${
                                    msg.saved ? 'text-pink-500 dark:text-pink-400' : 'text-gray-600 dark:text-gray-300'
                                  } hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200`}
                                  aria-label={msg.saved ? "Xóa khỏi mục yêu thích" : "Lưu vào mục yêu thích"}
                                >
                                  <FiBookmark className="w-3.5 h-3.5" fill={msg.saved ? "currentColor" : "none"} />
                                </button>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    
                    {/* Feedback Buttons - Only for bot messages */}
                    {!msg.isTyping && !msg.isRetry && msg.sender === 'bot' && (
                      <div className="mt-2 w-full">
                        <FeedbackButtons 
                          onFeedback={(isPositive) => {
                            handleFeedback(msg.id, isPositive ? 'positive' : 'negative');
                          }} 
                        />
                      </div>
                    )}
                    
                    {/* Feedback Form */}
                    {showFeedbackForm === msg.id && msg.sender === 'bot' && (
                      <div className="mt-2 w-full">
                        <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                          <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            placeholder="Nhập phản hồi chi tiết của bạn (không bắt buộc)..."
                            className="input-modern w-full mb-2"
                            rows={2}
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => {
                                setShowFeedbackForm(null);
                                setFeedbackText('');
                              }}
                              className="btn-secondary text-sm px-3 py-1"
                            >
                              Hủy
                            </button>
                            <button
                              onClick={() => {
                                handleFeedbackSubmit(feedbackText);
                                setShowFeedbackForm(null);
                                setFeedbackText('');
                              }}
                              className="btn-primary text-sm px-3 py-1"
                            >
                              Gửi phản hồi
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hiển thị câu hỏi liên quan sau tin nhắn bot */}
                    {!msg.isTyping && !msg.isRetry && msg.sender === 'bot' && 
                     isRelatedToHistory(messages.find(m => m.id === msg.id)?.text || '') && 
                     relatedQuestions.length > 0 && (
                      <div className="mt-4 w-full flex flex-col items-start">
                        <div className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700 shadow-md mb-2">
                          <div className="flex items-center gap-2 mb-3">
                            <FiHelpCircle className="w-5 h-5 text-indigo-500" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Câu hỏi liên quan</span>
                          </div>
                          <div className="flex flex-col gap-3">
                            {relatedQuestions.map((q, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  addUserMessage(q.question);
                                  sendMessage(q.question, false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-800 dark:text-gray-100 font-medium shadow-sm hover:shadow-md transition-all duration-200"
                                style={{ textAlign: 'left' }}
                              >
                                <FiMessageCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <span className="flex-1">{q.question}</span>
                                <FiSend className="w-4 h-4 text-indigo-400" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {msg.sender === 'user' && <MessageAvatar sender={msg.sender} />}
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Empty state */}
            {messages.length === 0 && !isLoading && (
              <div className="h-full flex flex-col items-center justify-center text-center px-4">
                <div className="mb-8 animate-float">
                  <IntroIllustration />
                </div>
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-4 tracking-tight">
                  Lịch sử Việt Nam
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-10 text-lg">
                  Trợ lý ảo chuyên về lịch sử Việt Nam, giúp bạn khám phá và tìm hiểu về các sự kiện, nhân vật và thời kỳ lịch sử quan trọng.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
                  {SUGGESTIONS.common.slice(0, 4).map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(suggestion)}
                      className="card suggestion-card flex items-center gap-4 py-6 px-6 hover:scale-105 hover:shadow-2xl transition-transform bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 border-2 border-amber-100 dark:border-gray-700"
                    >
                      <FiZap className="text-amber-500 w-7 h-7" />
                      <span className="text-base font-medium text-gray-800 dark:text-gray-100">{suggestion}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="glass p-4 md:p-8">
          <div className="max-w-4xl mx-auto relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi về lịch sử Việt Nam..."
              rows={1}
              className="input-modern w-full pr-14"
              style={{ minHeight: '60px', maxHeight: '150px' }}
              disabled={isLoading}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isLoading}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 btn-primary ${
                !input.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Gửi tin nhắn"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center flex items-center justify-center">
            <FiInfo className="inline mr-2" />
            Trợ lý Lịch sử Việt Nam cung cấp thông tin tham khảo. Vui lòng tham khảo thêm các nguồn tài liệu chính thống.
          </div>
        </div>
      </div>

      {/* Feedback Message Popup */}
      <AnimatePresence>
        {Object.values(feedback).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 glass px-6 py-3 rounded-xl shadow-lg z-50 flex items-center"
          >
            <FiCheckCircle className="mr-3 text-green-500" />
            <span>{Object.values(feedback).length > 0 ? 'Bạn đã đánh giá: ' + Object.values(feedback).join(', ') : 'Đã xóa phản hồi'}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Thêm style vào document
const styles = `
/* Base styles */
:root {
  --primary-gradient: ${THEME.colors.primary.gradient};
  --secondary-gradient: ${THEME.colors.secondary.gradient};
  --accent-gradient: ${THEME.colors.accent.gradient};
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-bg-dark: rgba(17, 24, 39, 0.8);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-border-dark: rgba(255, 255, 255, 0.05);
}

/* Enhanced glass morphism */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow: ${THEME.shadows.lg};
}

.dark .glass {
  background: var(--glass-bg-dark);
  border-color: var(--glass-border-dark);
}

/* Modern scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(79, 70, 229, 0.5);
  border-radius: 4px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(79, 70, 229, 0.7);
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(79, 70, 229, 0.3);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgba(79, 70, 229, 0.5);
}

/* Enhanced animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.98);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Enhanced message bubbles */
.message-bubble {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: ${THEME.borderRadius.lg};
  padding: ${THEME.spacing.lg};
  max-width: 100%;
}

.message-bubble::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.message-bubble:hover::before {
  opacity: 0.5;
}

/* User message specific styles */
.message-bubble[data-sender="user"] {
  background: var(--primary-gradient);
  color: white;
  border-top-right-radius: ${THEME.borderRadius.sm};
}

.dark .message-bubble[data-sender="user"] {
  background: var(--primary-gradient);
  color: white;
}

.message-bubble[data-sender="bot"] {
  background: var(--glass-bg);
  color: var(--text-primary-light);
  border-top-left-radius: ${THEME.borderRadius.sm};
}

.dark .message-bubble[data-sender="bot"] {
  background: var(--glass-bg-dark);
  color: var(--text-primary-dark);
}

/* Enhanced button styles */
.btn-primary {
  background: var(--primary-gradient);
  color: white;
  padding: ${THEME.spacing.md} ${THEME.spacing.lg};
  border-radius: ${THEME.borderRadius.md};
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  box-shadow: ${THEME.shadows.md};
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: ${THEME.shadows.lg};
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: ${THEME.shadows.sm};
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: inherit;
  padding: ${THEME.spacing.md} ${THEME.spacing.lg};
  border-radius: ${THEME.borderRadius.md};
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  box-shadow: ${THEME.shadows.sm};
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: ${THEME.shadows.md};
}

.btn-secondary:active {
  transform: translateY(0);
  box-shadow: ${THEME.shadows.sm};
}

/* Enhanced input styles */
.input-modern {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${THEME.borderRadius.md};
  padding: ${THEME.spacing.md} ${THEME.spacing.lg};
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${THEME.shadows.sm};
}

.input-modern:focus {
  outline: none;
  border-color: ${THEME.colors.primary.light};
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  transform: translateY(-1px);
}

/* Enhanced card styles */
.card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: ${THEME.borderRadius.lg};
  padding: ${THEME.spacing.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${THEME.shadows.md};
}

.dark .card {
  background: var(--glass-bg-dark);
  border-color: var(--glass-border-dark);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: ${THEME.shadows.xl};
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .message-bubble {
    padding: ${THEME.spacing.md};
    border-radius: ${THEME.borderRadius.md};
  }
  
  .message-bubble[data-sender="user"] {
    border-top-right-radius: ${THEME.borderRadius.sm};
  }
  
  .message-bubble[data-sender="bot"] {
    border-top-left-radius: ${THEME.borderRadius.sm};
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* High contrast mode */
@media (forced-colors: active) {
  .glass {
    border: 1px solid CanvasText;
  }
  
  .btn-primary {
    border: 1px solid CanvasText;
  }
  
  .card {
    border: 1px solid CanvasText;
  }
}
`;

// Thêm styles vào document
document.head.appendChild(document.createElement('style')).textContent = styles;

// 5. Sửa style: tăng bo góc, shadow, glass, màu sắc, padding, responsive cho laptop
const upgradedStyles = `
.avatar-message {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(245,158,11,0.10);
  margin-top: 4px;
}
.suggestion-card {
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(245, 158, 11, 0.10);
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.suggestion-card:hover {
  background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
  color: #fff;
}
.card {
  border-radius: 1.5rem !important;
  box-shadow: 0 8px 32px 0 rgba(245, 158, 11, 0.10);
  border: 1.5px solid rgba(245,158,11,0.08);
}
@media (min-width: 1024px) {
  .max-w-2xl { max-width: 700px; }
  .max-w-4xl { max-width: 1100px; }
  .px-8 { padding-left: 3rem; padding-right: 3rem; }
  .py-8 { padding-top: 3rem; padding-bottom: 3rem; }
}
`;
document.head.appendChild(document.createElement('style')).textContent = upgradedStyles;