import { UserProgress } from '../types/userProgress';

export class ProgressService {
  private static instance: ProgressService;
  private readonly XP_PER_LEVEL = 1000;
  private readonly XP_MULTIPLIER = 1.5;

  private constructor() {}

  public static getInstance(): ProgressService {
    if (!ProgressService.instance) {
      ProgressService.instance = new ProgressService();
    }
    return ProgressService.instance;
  }

  public calculateLevel(experience: number): number {
    return Math.floor(experience / this.XP_PER_LEVEL) + 1;
  }

  public calculateProgressToNextLevel(experience: number): {
    currentLevel: number;
    nextLevel: number;
    currentXP: number;
    nextLevelXP: number;
    progress: number;
  } {
    const currentLevel = this.calculateLevel(experience);
    const nextLevel = currentLevel + 1;
    const currentLevelXP = (currentLevel - 1) * this.XP_PER_LEVEL;
    const nextLevelXP = currentLevel * this.XP_PER_LEVEL;
    const progress = ((experience - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

    return {
      currentLevel,
      nextLevel,
      currentXP: experience - currentLevelXP,
      nextLevelXP: nextLevelXP - currentLevelXP,
      progress
    };
  }

  public calculateRewards(level: number, baseXP: number, baseCoins: number): {
    experience: number;
    coins: number;
  } {
    const levelMultiplier = 1 + (level - 1) * 0.1; // 10% increase per level
    return {
      experience: Math.floor(baseXP * levelMultiplier),
      coins: Math.floor(baseCoins * levelMultiplier)
    };
  }

  public updateProgress(
    currentProgress: UserProgress,
    newExperience: number,
    newCoins: number
  ): UserProgress {
    const totalExperience = currentProgress.experience + newExperience;
    const totalCoins = currentProgress.coins + newCoins;
    const levelInfo = this.calculateProgressToNextLevel(totalExperience);

    return {
      ...currentProgress,
      level: levelInfo.currentLevel,
      experience: totalExperience,
      coins: totalCoins,
      lastActive: new Date().toISOString()
    };
  }

  public getLevelTitle(level: number): string {
    const titles = [
      'Người mới bắt đầu',
      'Người học hỏi',
      'Nhà sử học trẻ',
      'Nhà nghiên cứu lịch sử',
      'Bậc thầy lịch sử',
      'Sử gia xuất sắc',
      'Bậc thầy vĩ đại'
    ];
    return titles[Math.min(Math.floor(level / 5), titles.length - 1)];
  }

  public getLevelColor(level: number): string {
    const colors = [
      'from-gray-400 to-gray-500',
      'from-blue-400 to-blue-500',
      'from-green-400 to-green-500',
      'from-purple-400 to-purple-500',
      'from-yellow-400 to-yellow-500',
      'from-red-400 to-red-500',
      'from-indigo-400 to-indigo-500'
    ];
    return colors[Math.min(Math.floor(level / 5), colors.length - 1)];
  }
} 