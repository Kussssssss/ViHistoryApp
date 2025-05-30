export interface HistoricalPeriod {
  id: string;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  image: string;
  unlocked: boolean;
  completed: boolean;
  audio?: string;
  video?: string;
  quiz?: Quiz[];
  difficulty: 'easy' | 'medium' | 'hard';
  rewards: {
    experience: number;
    items: string[];
  };
  dataFile: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export const historicalPeriods: HistoricalPeriod[] = [
  {
    id: 'period-40-938',
    name: 'Thời kỳ Bắc thuộc (40-938)',
    description: 'Thời kỳ Việt Nam bị phong kiến phương Bắc đô hộ, với các cuộc khởi nghĩa tiêu biểu như Hai Bà Trưng, Bà Triệu, Lý Bí...',
    startYear: 40,
    endYear: 938,
    image: '/images/periods/bac-thuoc.jpg',
    unlocked: true,
    completed: false,
    audio: '/audio/periods/bac-thuoc.mp3',
    difficulty: 'medium',
    rewards: {
      experience: 200,
      items: ['artifact_1', 'achievement_1']
    },
    dataFile: 'Lịch sử Việt Nam Dataset - Giai đoạn 40-938.csv'
  },
  {
    id: 'period-938-1858',
    name: 'Thời kỳ Độc lập (938-1858)',
    description: 'Thời kỳ Việt Nam giành độc lập và phát triển dưới các triều đại phong kiến: Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, Lê, Mạc, Tây Sơn, Nguyễn',
    startYear: 938,
    endYear: 1858,
    image: '/images/periods/doc-lap.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/doc-lap.mp3',
    difficulty: 'hard',
    rewards: {
      experience: 300,
      items: ['artifact_2', 'achievement_2']
    },
    dataFile: 'Lịch sử Việt Nam Dataset - Giai đoạn 938-1858.csv'
  },
  {
    id: 'period-1858-1945',
    name: 'Thời kỳ Pháp thuộc (1858-1945)',
    description: 'Thời kỳ Việt Nam bị thực dân Pháp đô hộ, với các phong trào đấu tranh giải phóng dân tộc',
    startYear: 1858,
    endYear: 1945,
    image: '/images/periods/phap-thuoc.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/phap-thuoc.mp3',
    difficulty: 'hard',
    rewards: {
      experience: 300,
      items: ['artifact_3', 'achievement_3']
    },
    dataFile: 'Lịch sử Việt Nam Dataset - Giai đoạn 1858-1945.csv'
  },
  {
    id: 'period-1945-1954',
    name: 'Thời kỳ Kháng chiến chống Pháp (1945-1954)',
    description: 'Thời kỳ Việt Nam giành độc lập và tiến hành cuộc kháng chiến chống thực dân Pháp',
    startYear: 1945,
    endYear: 1954,
    image: '/images/periods/khang-chien-phap.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/khang-chien-phap.mp3',
    difficulty: 'medium',
    rewards: {
      experience: 250,
      items: ['artifact_4', 'achievement_4']
    },
    dataFile: 'Lịch sử Việt Nam Dataset - Giai đoạn 1945-1954.csv'
  },
  {
    id: 'period-1954-1975',
    name: 'Thời kỳ Kháng chiến chống Mỹ (1954-1975)',
    description: 'Thời kỳ Việt Nam tiến hành cuộc kháng chiến chống Mỹ cứu nước',
    startYear: 1954,
    endYear: 1975,
    image: '/images/periods/khang-chien-my.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/khang-chien-my.mp3',
    difficulty: 'medium',
    rewards: {
      experience: 250,
      items: ['artifact_5', 'achievement_5']
    },
    dataFile: 'Lịch sử Việt Nam Dataset - Giai đoạn 1954-1975.csv'
  },
  {
    id: 'period-1975-2000',
    name: 'Thời kỳ Đổi mới (1975-2000)',
    description: 'Thời kỳ Việt Nam thống nhất đất nước và tiến hành công cuộc đổi mới',
    startYear: 1975,
    endYear: 2000,
    image: '/images/periods/doi-moi.jpg',
    unlocked: false,
    completed: false,
    audio: '/audio/periods/doi-moi.mp3',
    difficulty: 'easy',
    rewards: {
      experience: 200,
      items: ['artifact_6', 'achievement_6']
    },
    dataFile: 'Lịch sử Việt Nam Dataset - Giai đoạn 1975-2000.csv'
  }
]; 