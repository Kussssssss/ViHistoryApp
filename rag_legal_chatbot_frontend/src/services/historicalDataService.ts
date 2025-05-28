import { CSVRow, HistoricalEra, HistoricalPeriod, HistoricalContent, Quiz, Challenge, Achievement } from '../types/historicalData';
import { historicalPeriods as rawHistoricalPeriods, Quiz as DataQuiz } from '../data/historicalPeriods'; // Import raw data
import { parse as parseCSV } from 'papaparse';
import fs from 'fs';

export interface HistoricalEvent {
  id: string;
  heading: string;
  context: string;
  question?: string;
  answer?: string;
  year?: number;
  period: string;
  description: string;
}

export interface HistoricalPeriod {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  events: HistoricalEvent[];
  difficulty: 'easy' | 'medium' | 'hard';
  unlocked: boolean;
  rewards: {
    experience: number;
    coins: number;
  };
}

// Assuming chunks are available at this path relative to the application root
const CHUNKS_BASE_PATH = '/data/chunks/';

export class HistoricalDataService {
  private static instance: HistoricalDataService;
  private eras: HistoricalEra[] = [];
  private periods: HistoricalPeriod[] = [];
  private contents: HistoricalContent[] = [];
  private challenges: Challenge[] = [];
  private achievements: Achievement[] = [];
  private isLoaded: boolean = false;
  private isLoading: boolean = false;
  private error: string | null = null;

  private constructor() {
    // Data will be loaded from chunks
  }

  static getInstance(): HistoricalDataService {
    if (!HistoricalDataService.instance) {
      HistoricalDataService.instance = new HistoricalDataService();
    }
    return HistoricalDataService.instance;
  }

  async loadData(): Promise<void> {
    if (this.isLoaded) return;
    if (this.isLoading) return;

    this.isLoading = true;
    this.error = null;

    console.log('HistoricalDataService: Starting data load from chunks...');

    try {
      const chunkFiles = await this.listChunkFiles();
      console.log('HistoricalDataService: Found chunk files:', chunkFiles);

      const allEvents: HistoricalEvent[] = [];
      for (const file of chunkFiles) {
        const chunkEvents = await this.loadEventsFromChunk(file);
        console.log(`HistoricalDataService: Loaded ${chunkEvents.length} events from ${file}`);
        allEvents.push(...chunkEvents);
      }
      console.log('HistoricalDataService: Total events loaded from all chunks:', allEvents.length);

      this.periods = this.groupEventsIntoPeriods(allEvents);
      console.log('HistoricalDataService: Grouped events into periods. Number of periods:', this.periods.length);
      console.log('HistoricalDataService: Created periods data:', this.periods);

      this.loadChallenges();
      this.loadAchievements();
      this.isLoaded = true;

    } catch (error: any) {
      console.error('HistoricalDataService: Error loading historical data chunks:', error);
      this.error = 'Không thể tải dữ liệu lịch sử từ các file chunk.';
    } finally {
      this.isLoading = false;
      console.log('HistoricalDataService: Finished data load.');
    }
  }

  // Placeholder to list chunk files. Requires backend or specific setup.
  // In a real scenario, you'd fetch a manifest or query a backend.
  private async listChunkFiles(): Promise<string[]> {
    console.warn('Using placeholder listChunkFiles. Implement actual file listing or manifest fetching.');
    // Dummy implementation based on the chunk naming convention used in the script
    // This assumes you know the number of chunks or have a way to discover them.
    // For the split_csv.py example that created chunk_0000.csv and chunk_0001.csv:
    return [
      `${CHUNKS_BASE_PATH}chunk_0000.csv`,
      `${CHUNKS_BASE_PATH}chunk_0001.csv`,
      `${CHUNKS_BASE_PATH}chunk_0002.csv`,
      `${CHUNKS_BASE_PATH}chunk_0003.csv`,
      `${CHUNKS_BASE_PATH}chunk_0004.csv`,
      `${CHUNKS_BASE_PATH}chunk_0005.csv`,
      `${CHUNKS_BASE_PATH}chunk_0006.csv`,
      `${CHUNKS_BASE_PATH}chunk_0007.csv`,
      `${CHUNKS_BASE_PATH}chunk_0008.csv`,
      `${CHUNKS_BASE_PATH}chunk_0009.csv`,
      `${CHUNKS_BASE_PATH}chunk_0010.csv`,
      `${CHUNKS_BASE_PATH}chunk_0011.csv`,
      `${CHUNKS_BASE_PATH}chunk_0012.csv`,
      `${CHUNKS_BASE_PATH}chunk_0013.csv`,
      `${CHUNKS_BASE_PATH}chunk_0014.csv`,
      `${CHUNKS_BASE_PATH}chunk_0015.csv`,
      `${CHUNKS_BASE_PATH}chunk_0016.csv`,
      `${CHUNKS_BASE_PATH}chunk_0017.csv`,
      `${CHUNKS_BASE_PATH}chunk_0018.csv`,
      `${CHUNKS_BASE_PATH}chunk_0019.csv`,
      `${CHUNKS_BASE_PATH}chunk_0020.csv`,
      `${CHUNKS_BASE_PATH}chunk_0021.csv`,
      `${CHUNKS_BASE_PATH}chunk_0022.csv`,
      `${CHUNKS_BASE_PATH}chunk_0023.csv`,
      `${CHUNKS_BASE_PATH}chunk_0024.csv`,
      `${CHUNKS_BASE_PATH}chunk_0025.csv`,
      `${CHUNKS_BASE_PATH}chunk_0026.csv`,
      `${CHUNKS_BASE_PATH}chunk_0027.csv`,
      `${CHUNKS_BASE_PATH}chunk_0028.csv`,
      `${CHUNKS_BASE_PATH}chunk_0029.csv`,
      `${CHUNKS_BASE_PATH}chunk_0030.csv`,

      // Add more files if your script created more chunks
    ];
  }

  // Placeholder to load events from a single chunk file.
  // Requires fetching the file content and parsing it.
  private async loadEventsFromChunk(filePath: string): Promise<HistoricalEvent[]> {
    console.log(`HistoricalDataService: Loading chunk: ${filePath}`);
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to fetch chunk: ${response.statusText}`);
      }
      const csvText = await response.text();
      
      // Use papaparse for robust CSV parsing
      const parsedData = parseCSV(csvText, {
        header: true, // Treat the first row as headers
        skipEmptyLines: true,
        dynamicTyping: true, // Attempt to convert strings to numbers/booleans
      });

      if (parsedData.errors.length > 0) {
          console.error('HistoricalDataService: Papaparse errors:', parsedData.errors);
          // Optionally, handle parsing errors more specifically
      }

      const events: HistoricalEvent[] = [];
      
      // Add log here to inspect parsed data structure and values
      console.log('HistoricalDataService: Parsed data from Papaparse:', parsedData.data);

      // Filter out rows that don't have essential data after parsing
      parsedData.data.forEach((rowData: any, index) => {
          // Use the actual column names identified by papaparse from the log
          const id = rowData['id'] || `event-${index}-${rowData['index'] || 'unknown'}`; // Use 'id' if available, fallback using 'index' column
          const year = rowData['index']; // 'index' column seems to be the year
          const periodName = rowData['period']; // 'period' column
          const heading = rowData['heading']; // 'heading' column
          const context = rowData['context']; // 'context' column
          const question = rowData['question']; // 'question' column
          const answer = rowData['answer']; // 'answer' column
          const description = rowData['description']; // 'description' column (if it exists)

          // Check if essential data is present using the mapped values
          // We require at least id (or can generate one), heading, context, and period
          if (!id || !heading || !context || !periodName) {
               console.warn(`HistoricalDataService: Skipping row with missing essential data after parsing:`, rowData);
               return; // Skip this row
          }
          
          // Add the parsed event to the list
          events.push({
            id: String(id), // Ensure id is string
            heading: String(heading || ''),
            context: String(context || ''),
            question: question ? String(question) : undefined,
            answer: answer ? String(answer) : undefined,
            // Ensure year is a number, handle potential parsing issues
            year: typeof year === 'number' ? year : (year !== undefined && year !== null && !isNaN(Number(year)) ? Number(year) : undefined),
            period: String(periodName || ''),
            description: description ? String(description) : '', // Use the mapped description if it exists
          });
      });

      console.log(`HistoricalDataService: Successfully parsed ${events.length} valid events from ${filePath} using Papaparse.`);
      return events;
    } catch (error) {
      console.error(`HistoricalDataService: Error loading or parsing chunk ${filePath}:`, error);
      return [];
    }
  }

  private groupEventsIntoPeriods(events: HistoricalEvent[]): HistoricalPeriod[] {
    console.log('HistoricalDataService: Starting to group events into periods. Total events:', events.length);
    const periodsMap: { [key: string]: HistoricalPeriod } = {};

    events.forEach(event => {
      if (!event || !event.period) {
          console.warn('HistoricalDataService: Skipping event with missing period:', event);
          return; // Skip this iteration
      }

      const periodId = event.period.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''); // Sanitize period ID

      if (!periodsMap[periodId]) {
        periodsMap[periodId] = {
          id: periodId,
          name: event.period, // Use original period name from event
          startYear: event.year || 0,
          endYear: event.year || 0,
          description: event.description || '', // Use description from event if available
          events: [],
          difficulty: 'medium', // Default difficulty
          unlocked: true,
          rewards: {
            experience: 100,
            coins: 50
          }
        };
        console.log(`HistoricalDataService: Created new period entry for ID: ${periodId} (Name: ${event.period})`);
      }
      // Update start and end years if event year is available
      if (event.year !== undefined && event.year !== null) {
        if (periodsMap[periodId].startYear === 0 || event.year < periodsMap[periodId].startYear) {
          periodsMap[periodId].startYear = event.year;
        }
        if (periodsMap[periodId].endYear === 0 || event.year > periodsMap[periodId].endYear) {
          periodsMap[periodId].endYear = event.year;
        }
      }
      periodsMap[periodId].events.push(event);
    });

    // Convert map to array and sort
    const periodsArray = Object.values(periodsMap);

    console.log('HistoricalDataService: Finished grouping. Final number of periods:', periodsArray.length);

    // Sort periods by start year
    periodsArray.sort((a, b) => a.startYear - b.startYear);
    console.log('HistoricalDataService: Periods sorted by start year.');

    // Add default descriptions if missing and set difficulty
    periodsArray.forEach(period => {
        if (!period.description) {
            switch(period.name) {
                case 'Thời kỳ Bắc thuộc':
                    period.description = 'Giai đoạn lịch sử Việt Nam bị các triều đại phong kiến phương Bắc đô hộ.';
                    period.difficulty = 'easy';
                    break;
                case 'Thời kỳ độc lập':
                    period.description = 'Thời kỳ Việt Nam giành lại độc lập và xây dựng chế độ phong kiến.';
                    period.difficulty = 'medium';
                    break;
                case 'Thời kỳ Pháp thuộc':
                    period.description = 'Giai đoạn Việt Nam bị thực dân Pháp xâm lược và đô hộ.';
                    period.difficulty = 'hard';
                    break;
                case 'Kháng chiến chống Pháp':
                    period.description = 'Cuộc kháng chiến chống lại sự tái xâm lược của thực dân Pháp.';
                    period.difficulty = 'hard';
                    break;
                case 'Kháng chiến chống Mỹ':
                    period.description = 'Cuộc kháng chiến chống lại sự can thiệp của Mỹ và chính quyền Sài Gòn.';
                    period.difficulty = 'hard';
                    break;
                case 'Thời kỳ Đổi mới':
                    period.description = 'Giai đoạn cải cách kinh tế và hội nhập quốc tế.';
                    period.difficulty = 'medium';
                    break;
                default:
                    period.description = 'Thời kỳ lịch sử Việt Nam.';
                    period.difficulty = 'medium';
            }
        }
    });


    return periodsArray;
  }

  private loadChallenges(): void {
    // Daily challenges
    this.challenges.push(
      {
        id: 'daily-1',
        title: 'Học 3 bài học mới',
        description: 'Hoàn thành 3 bài học mới trong ngày',
        type: 'daily',
        requirements: {
          action: 'complete_lessons',
          target: 3,
          current: 0
        },
        rewards: {
          experience: 100,
          coins: 50,
          items: ['Huy hiệu học tập'],
          badges: ['daily_learner']
        },
        completed: false
      },
      {
        id: 'daily-2',
        title: 'Đạt điểm cao trong bài kiểm tra',
        description: 'Đạt ít nhất 80% trong một bài kiểm tra',
        type: 'daily',
        requirements: {
          action: 'high_score_quiz',
          target: 1,
          current: 0
        },
        rewards: {
          experience: 150,
          coins: 75,
          items: ['Huy hiệu xuất sắc'],
          badges: ['quiz_master']
        },
        completed: false
      }
    );

    // Weekly challenges
    this.challenges.push(
      {
        id: 'weekly-1',
        title: 'Hoàn thành một thời kỳ lịch sử',
        description: 'Hoàn thành tất cả bài học trong một thời kỳ',
        type: 'weekly',
        requirements: {
          action: 'complete_era',
          target: 1,
          current: 0
        },
        rewards: {
          experience: 500,
          coins: 250,
          items: ['Huy hiệu thời kỳ'],
          badges: ['era_master']
        },
        completed: false
      },
      {
        id: 'weekly-2',
        title: 'Thu thập 5 thành tích',
        description: 'Mở khóa 5 thành tích mới trong tuần',
        type: 'weekly',
        requirements: {
          action: 'unlock_achievements',
          target: 5,
          current: 0
        },
        rewards: {
          experience: 300,
          coins: 150,
          items: ['Huy hiệu thành tích'],
          badges: ['achievement_hunter']
        },
        completed: false
      }
    );
  }

  private loadAchievements(): void {
    this.achievements = [
      {
        id: 'achievement-1',
        title: 'Nhà sử học mới',
        description: 'Hoàn thành bài học đầu tiên',
        type: 'progress',
        rarity: 'common',
        requirements: {
          action: 'complete_lesson',
          target: 1,
          current: 0
        },
        rewards: {
          experience: 50,
          coins: 25,
          items: ['Huy hiệu người mới'],
          badges: ['first_step']
        },
        unlocked: false,
        unlockedAt: '', // Initialize with empty string
      },
      {
        id: 'achievement-2',
        title: 'Nhà sử học xuất sắc',
        description: 'Hoàn thành 10 bài học với điểm số cao',
        type: 'progress',
        rarity: 'rare',
        requirements: {
          action: 'complete_lessons_high_score',
          target: 10,
          current: 0
        },
        rewards: {
          experience: 200,
          coins: 100,
          items: ['Huy hiệu xuất sắc'],
          badges: ['excellent_learner']
        },
        unlocked: false,
        unlockedAt: '', // Initialize with empty string
      },
      {
        id: 'achievement-3',
        title: 'Bậc thầy lịch sử',
        description: 'Hoàn thành tất cả các thời kỳ lịch sử',
        type: 'collection',
        rarity: 'epic',
        requirements: {
          action: 'complete_all_eras',
          target: 1,
          current: 0
        },
        rewards: {
          experience: 1000,
          coins: 500,
          items: ['Huy hiệu bậc thầy'],
          badges: ['history_master']
        },
        unlocked: false,
        unlockedAt: '', // Initialize with empty string
      },
      {
        id: 'achievement-4',
        title: 'Nhà sưu tầm',
        description: 'Thu thập tất cả các huy hiệu',
        type: 'collection',
        rarity: 'legendary',
        requirements: {
          action: 'collect_all_badges',
          target: 1,
          current: 0
        },
        rewards: {
          experience: 2000,
          coins: 1000,
          items: ['Huy hiệu sưu tầm'],
          badges: ['collector_master']
        },
        unlocked: false,
        unlockedAt: '', // Initialize with empty string
      }
    ];
  }

  // Getters
  getEras(): HistoricalEra[] {
    // If you implement eras based on periods, generate them here
    return []; // Placeholder
  }

  getPeriods(): HistoricalPeriod[] {
    return this.periods;
  }

  getContents(): HistoricalContent[] {
    // If you transform events into contents, return them here
    return []; // Placeholder
  }

  getEraById(id: string): HistoricalEra | undefined {
    // If you implement eras, find them here
    return undefined; // Placeholder
  }

  getPeriodById(id: string): HistoricalPeriod | undefined {
    return this.periods.find(period => period.id === id);
  }

  getContentById(id: string): HistoricalContent | undefined {
    // If you transform events into contents, find them here
    return undefined; // Placeholder
  }

  isLoadingData(): boolean {
    return this.isLoading;
  }

  hasErrorLoading(): boolean {
    return this.error !== null;
  }

  getLoadingError(): string | null {
    return this.error;
  }

  getChallenges(): Challenge[] {
    return this.challenges;
  }

  getAchievements(): Achievement[] {
    return this.achievements;
  }

  getDailyChallenges(): Challenge[] {
    return this.challenges.filter(challenge => challenge.type === 'daily');
  }

  getWeeklyChallenges(): Challenge[] {
    return this.challenges.filter(challenge => challenge.type === 'weekly');
  }

  updateChallengeProgress(challengeId: string, progress: number): void {
    const challenge = this.challenges.find(c => c.id === challengeId);
    if (challenge) {
      challenge.requirements.current = progress;
      if (challenge.requirements.current >= challenge.requirements.target) {
        challenge.completed = true;
      }
    }
  }

  updateAchievementProgress(achievementId: string, progress: number): void {
    const achievement = this.achievements.find(a => a.id === achievementId);
    if (achievement) {
      achievement.requirements.current = progress;
      if (achievement.requirements.current >= achievement.requirements.target) {
        achievement.unlocked = true;
        // achievement.unlockedAt = new Date(); // Uncomment if you store Date objects
      }
    }
  }
  
  // Method to get a specific period by ID and load its content if not already loaded
  // This approach loads ALL events for the period once requested.
  // For very large periods spread across many chunks, a more advanced streaming/lazy loading might be needed.
  public async getPeriodWithEvents(periodId: string): Promise<HistoricalPeriod | undefined> {
      // Ensure initial period structure (without all events loaded) is available
      if (!this.isLoaded) {
          await this.loadData(); // This loads the basic period structure
      }

      const targetPeriod = this.periods.find(p => p.id === periodId);

      if (targetPeriod && (!targetPeriod.events || targetPeriod.events.length === 0)) {
          console.log(`Loading events for period: ${periodId}`);
          try {
              // In a real application, you'd identify which chunks belong to this period.
              // For this example, we'll re-filter all loaded events.
              if (!this.isLoaded) {
                 // This case should ideally not happen if loadData() is awaited, but as a safeguard:
                 console.warn("Data not fully loaded when trying to get period events.");
                 return undefined; // Cannot proceed without loaded data
              }

              // Re-loading and filtering all events to get the ones for this period.
              // A more efficient way would be to load only relevant chunks.
              const chunkFiles = await this.listChunkFiles(); // Get all chunk files again
              const allEvents: HistoricalEvent[] = [];
              for (const file of chunkFiles) {
                 const chunkEvents = await this.loadEventsFromChunk(file);
                 allEvents.push(...chunkEvents);
              }

              // Filter events that belong to the target period
              targetPeriod.events = allEvents.filter(event => event.period.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === periodId);

              console.log(`Loaded ${targetPeriod.events.length} events for period ${periodId}.`);

          } catch (error) {
              console.error(`Error loading events for period ${periodId}:`, error);
              targetPeriod.events = []; // Indicate loading failed
          }
      }
      
      return targetPeriod;
  }

  // Keep getEventsByPeriod for compatibility if needed, but getPeriodWithEvents is preferred for loading.
  getEventsByPeriod(periodId: string): HistoricalEvent[] {
     // This will only return events if they were already loaded by getPeriodWithEvents or loadData (if all events were loaded initially)
     const period = this.periods.find(p => p.id === periodId);
     return period ? period.events : [];
  }
}

// Define the structure of the raw data periods for clarity
interface DataHistoricalPeriod {
  id: string;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  image: string; // Assuming image is always string in raw data
  unlocked: boolean;
  completed: boolean;
  audio?: string;
  video?: string;
  quiz?: DataQuiz[];
  difficulty: 'easy' | 'medium' | 'hard';
  rewards: {
    experience: number;
    items: string[];
  };
  dataFile: string; // Path to the CSV file for this period's content
}

// Define the structure of Quiz in the raw data for clarity
interface DataQuiz {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
} 