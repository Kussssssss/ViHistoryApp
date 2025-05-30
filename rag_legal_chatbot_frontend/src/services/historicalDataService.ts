import { HistoricalEra, HistoricalPeriod, HistoricalContent, Challenge, Achievement, HistoricalEvent } from '../types/historicalData';
import { parse as parseCSV } from 'papaparse';
// import fs from 'fs'; // Removed unused import
import { MAIN_PERIODS_CONFIG } from '../components/Explore';

// Interface for the structure of items in MAIN_PERIODS_CONFIG
interface MainPeriodConfigItem {
  id: string;
  name: string;
  years: string;
  color: string;
  rewards: { experience: number; coins: number; };
}

// Update the CSV row interface to match actual data structure
interface CSVRow {
  index: number;
  period: string;
  heading: string;
  context: string;
  question: string;
  [key: string]: unknown;
}

// Update the paths to be relative to the public directory
const CHUNKS_BASE_PATH = './data/chunks/';
const PROCESSED_DATA_PATH = './data/processed/processed_historical_data.json';

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
  private allEvents: HistoricalEvent[] = []; // Store all loaded events
  private lastUpdated: string | null = null;

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
    if (this.isLoaded || this.isLoading) return;

    this.isLoading = true;
    this.error = null;

    console.log('HistoricalDataService: Starting data load...');

    try {
      // First try to load processed data
      const processedData = await this.loadProcessedData();
      if (processedData) {
        this.allEvents = processedData.events;
        this.lastUpdated = processedData.lastUpdated;
        console.log('HistoricalDataService: Loaded processed data with', this.allEvents.length, 'events');
      } else {
        // Fallback to loading from chunks
        const chunkFiles = await this.listChunkFiles();
        console.log('HistoricalDataService: Found chunk files:', chunkFiles);

        this.allEvents = [];
        for (const file of chunkFiles) {
          const chunkEvents = await this.loadEventsFromChunk(file);
          console.log(`HistoricalDataService: Loaded ${chunkEvents.length} events from ${file}`);
          this.allEvents.push(...chunkEvents);
        }
        console.log('HistoricalDataService: Total events loaded from all chunks:', this.allEvents.length);
      }

      // Initialize periods first
      this.periods = this.groupEventsIntoPeriods(this.allEvents);
      console.log('HistoricalDataService: Grouped events into periods. Number of periods:', this.periods.length);

      // Add test event for Hai Ba Trung after periods are initialized
      this.addHaiBaTrungEvent();
      console.log('HistoricalDataService: Added Hai Ba Trung test event');

      this.loadChallenges();
      this.loadAchievements();

      this.isLoaded = true;

    } catch (error: unknown) {
      console.error('HistoricalDataService: Error loading historical data:', error instanceof Error ? error.message : error);
      this.error = 'Không thể tải dữ liệu lịch sử.';
    } finally {
      this.isLoading = false;
      console.log('HistoricalDataService: Finished data load.');
    }
  }

  private async loadProcessedData(): Promise<{ events: HistoricalEvent[]; lastUpdated: string } | null> {
    try {
      const response = await fetch(PROCESSED_DATA_PATH);
      if (!response.ok) {
        console.warn(`HistoricalDataService: Failed to fetch processed data: ${response.statusText}`);
        return null;
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn('HistoricalDataService: Received non-JSON response for processed data');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.warn('HistoricalDataService: Could not load processed data, falling back to chunks:', error);
      return null;
    }
  }

  // Placeholder to list chunk files. Requires backend or specific setup.
  // In a real scenario, you'd fetch a manifest or query a backend.
  private async listChunkFiles(): Promise<string[]> {
    try {
      // In a browser environment, we'll fetch a manifest file that lists all available chunks
      const manifestPath = `${CHUNKS_BASE_PATH}manifest.json`;
      const response = await fetch(manifestPath);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch manifest: ${response.statusText}`);
      }

      const manifest = await response.json();
      
      if (!Array.isArray(manifest.chunks)) {
        throw new Error('Invalid manifest format: chunks array not found');
      }

      // Map chunk names to full paths
      const chunkFiles = manifest.chunks.map((chunk: string) => 
        `${CHUNKS_BASE_PATH}${chunk}`
      );

      console.log('HistoricalDataService: Found chunk files:', chunkFiles);
      return chunkFiles;
    } catch (error) {
      console.error('HistoricalDataService: Error loading chunk manifest:', error);
      
      // Fallback to default chunks if manifest loading fails
      console.warn('HistoricalDataService: Using fallback chunk list');
      return [
        `${CHUNKS_BASE_PATH}chunk_0000.csv`,
        `${CHUNKS_BASE_PATH}chunk_0001.csv`
      ];
    }
  }

  private extractYearFromPeriod(period: string): number | null {
    // First try to extract year from period name format like "Thời kỳ X (Giai đoạn YYYY – ZZZZ)"
    const periodMatch = period.match(/Giai đoạn\s+(\d+)\s*–\s*(\d+)/);
    if (periodMatch) {
      return parseInt(periodMatch[1]);
    }

    // Try to extract year from period name format like "Thời kỳ X (YYYY – ZZZZ)"
    const simpleMatch = period.match(/\((\d+)\s*–\s*(\d+)\)/);
    if (simpleMatch) {
      return parseInt(simpleMatch[1]);
    }

    // Try to extract year from period name format like "Thời kỳ X YYYY – ZZZZ"
    const yearMatch = period.match(/(\d{4})\s*–\s*(\d{4})/);
    if (yearMatch) {
      return parseInt(yearMatch[1]);
    }

    return null;
  }

  private generateQuestionsFromEvent(event: HistoricalEvent): {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[] {
    const questions: {
      question: string;
      options: string[];
      correctAnswer: number;
      explanation: string;
    }[] = [];

    // Question 1: Year of the event
    if (event.year) {
      const yearOptions = [
        event.year.toString(),
        (event.year + 1).toString(),
        (event.year - 1).toString(),
        (event.year + 2).toString()
      ].sort(() => Math.random() - 0.5); // Shuffle options
      questions.push({
        question: `Sự kiện "${event.heading}" diễn ra vào năm nào?`,
        options: yearOptions,
        correctAnswer: yearOptions.indexOf(event.year.toString()),
        explanation: ''
      });
    }

    // Question 2: Event type
    const typeOptions = [
      event.type === 'battle' ? 'Trận đánh' :
      event.type === 'rebellion' ? 'Khởi nghĩa' :
      event.type === 'dynasty' ? 'Triều đại' :
      event.type === 'cultural' ? 'Văn hóa' : 'Khác',
      'Không xác định',
      'Không có thông tin',
      'Không thuộc nhóm nào'
    ].sort(() => Math.random() - 0.5);
    questions.push({
      question: `Loại sự kiện "${event.heading}" thuộc nhóm nào?`,
      options: typeOptions,
      correctAnswer: typeOptions.indexOf(
        event.type === 'battle' ? 'Trận đánh' :
        event.type === 'rebellion' ? 'Khởi nghĩa' :
        event.type === 'dynasty' ? 'Triều đại' :
        event.type === 'cultural' ? 'Văn hóa' : 'Khác'
      ),
      explanation: ''
    });

    // Question 3: Context understanding
    const contextSentences = event.context.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (contextSentences.length > 0) {
      const mainContext = contextSentences[0].trim();
      const contextOptions = [
        mainContext,
        'Không có bối cảnh',
        'Không xác định',
        'Không có thông tin'
      ].sort(() => Math.random() - 0.5);
      questions.push({
        question: `Bối cảnh của sự kiện "${event.heading}" là gì?`,
        options: contextOptions,
        correctAnswer: contextOptions.indexOf(mainContext),
        explanation: ''
      });
    }

    // Question 4: Description understanding
    const descriptionSentences = event.description.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (descriptionSentences.length > 0) {
      const mainDescription = descriptionSentences[0].trim();
      const descriptionOptions = [
        mainDescription,
        'Không có mô tả',
        'Không xác định',
        'Không có thông tin'
      ].sort(() => Math.random() - 0.5);
      questions.push({
        question: `Mô tả nào sau đây đúng về sự kiện "${event.heading}"?`,
        options: descriptionOptions,
        correctAnswer: descriptionOptions.indexOf(mainDescription),
        explanation: ''
      });
    }

    // Question 5: Related characters or locations
    if (event.characters && event.characters.length > 0) {
      const characterOptions = [
        event.characters[0],
        'Không có nhân vật',
        'Không xác định',
        'Không có thông tin'
      ].sort(() => Math.random() - 0.5);
      questions.push({
        question: `Nhân vật nào sau đây liên quan đến sự kiện "${event.heading}"?`,
        options: characterOptions,
        correctAnswer: characterOptions.indexOf(event.characters[0]),
        explanation: ''
      });
    } else if (event.locations && event.locations.length > 0) {
      const locationOptions = [
        event.locations[0],
        'Không có địa điểm',
        'Không xác định',
        'Không có thông tin'
      ].sort(() => Math.random() - 0.5);
      questions.push({
        question: `Địa điểm nào sau đây liên quan đến sự kiện "${event.heading}"?`,
        options: locationOptions,
        correctAnswer: locationOptions.indexOf(event.locations[0]),
        explanation: ''
      });
    }

    return questions;
  }

  private async loadEventsFromChunk(filePath: string): Promise<HistoricalEvent[]> {
    console.log(`HistoricalDataService: Loading chunk: ${filePath}`);
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        console.warn(`HistoricalDataService: Failed to fetch chunk ${filePath}: ${response.statusText}`);
        return [];
      }

      const csvText = await response.text();
      console.log(`HistoricalDataService: Raw CSV content from ${filePath}:`, csvText.substring(0, 200) + '...');

      const events: HistoricalEvent[] = [];

      // Parse CSV using PapaParse with more specific options
      const { data, errors } = parseCSV<CSVRow>(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header: string) => header.trim().toLowerCase(),
        dynamicTyping: true
      });

      if (errors.length > 0) {
        console.warn('HistoricalDataService: CSV parsing warnings:', errors);
      }

      console.log(`HistoricalDataService: Parsed ${data.length} rows from ${filePath}`);

      // Create a map to store unique contexts for each heading
      const headingContextMap = new Map<string, Set<string>>();

      // First pass: collect all unique contexts for each heading
      data.forEach((row, index) => {
        const heading = row.heading;
        const context = row.context;
        const period = row.period;

        // Log the first few rows for debugging
        if (index < 3) {
          console.log(`HistoricalDataService: Processing row ${index}:`, {
            heading,
            context: context?.substring(0, 50) + '...',
            period
          });
        }

        // Validate required fields
        if (!heading || !context || !period) {
          console.warn(`HistoricalDataService: Skipping row ${index} with missing required fields:`, {
            heading: !!heading,
            context: !!context,
            period: !!period
          });
          return;
        }

        // Extract year from period
        const year = this.extractYearFromPeriod(period);
        console.log(`HistoricalDataService: Extracted year from period "${period}":`, year);

        // Add to heading context map
        if (!headingContextMap.has(heading)) {
          headingContextMap.set(heading, new Set());
        }
        headingContextMap.get(heading)?.add(context);
      });

      // Second pass: create events from unique headings
      for (const [heading, contexts] of headingContextMap) {
        const combinedContext = Array.from(contexts).join('\n\n');
        const period = data.find(row => row.heading === heading)?.period || '';
        const year = this.extractYearFromPeriod(period);
        
        const event: HistoricalEvent = {
          id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          heading: heading,
          context: combinedContext,
          description: '', // We don't need description for now
          year: year || undefined,
          period: period,
          type: 'other',
          characters: undefined,
          locations: undefined,
          artifacts: undefined,
          image: undefined,
          audioUrl: undefined,
          hiddenImage: undefined
        };

        // Generate basic questions
        event.questions = this.generateBasicQuestions(event);

        events.push(event);
      }

      console.log(`HistoricalDataService: Processed ${events.length} unique events from ${filePath}`);
      
      // Log the first few events for debugging
      if (events.length > 0) {
        console.log('HistoricalDataService: First few processed events:', 
          events.slice(0, 2).map(e => ({
            heading: e.heading,
            contextLength: e.context.length,
            year: e.year,
            period: e.period,
            questionsCount: e.questions?.length
          }))
        );
      }

      this.debugProcessedEvents(events);

      return events;
    } catch (error: unknown) {
      console.error(`HistoricalDataService: Error loading or parsing chunk ${filePath}:`, error instanceof Error ? error.message : error);
      return [];
    }
  }

  private generateBasicQuestions(event: HistoricalEvent) {
    const questions = [];

    if (event.year) {
      questions.push({
        question: `Sự kiện "${event.heading}" diễn ra vào năm nào?`,
        options: [
          event.year.toString(),
          (event.year + 1).toString(),
          (event.year - 1).toString(),
          (event.year + 2).toString()
        ],
        correctAnswer: 0
      });
    }

    if (event.type) {
      questions.push({
        question: `Loại sự kiện "${event.heading}" thuộc nhóm nào?`,
        options: [
          event.type,
          'Không xác định',
          'Không có thông tin',
          'Không thuộc nhóm nào'
        ],
        correctAnswer: 0
      });
    }

    if (event.context) {
      questions.push({
        question: `Bối cảnh của sự kiện "${event.heading}" là gì?`,
        options: [
          event.context.substring(0, 100) + '...',
          'Không có bối cảnh',
          'Không xác định',
          'Không có thông tin'
        ],
        correctAnswer: 0
      });
    }

    return questions;
  }

  private groupEventsIntoPeriods(events: HistoricalEvent[]): HistoricalPeriod[] {
    console.log('HistoricalDataService: Starting to group events into periods. Total events:', events.length);
    
    // Create periods based on MAIN_PERIODS_CONFIG and populate with events
    const periods: HistoricalPeriod[] = MAIN_PERIODS_CONFIG.map((configPeriod: MainPeriodConfigItem) => {
      // Parse the year range from the config period
      const configYearsMatch = configPeriod.years.match(/^(\d+)\s*–\s*(\d+)$/);
      let configStartYear = 0;
      let configEndYear = 0;

      if (configYearsMatch) {
        configStartYear = parseInt(configYearsMatch[1]);
        configEndYear = parseInt(configYearsMatch[2]);
      } else {
        console.warn(`HistoricalDataService: Could not parse year range for period config: ${configPeriod.years}`);
      }

      // Find events that belong to this period based on year range
      const periodEvents = events.filter(event => {
        if (event.year === undefined) {
          // If year is undefined, try to match by period name
          return event.period.toLowerCase().includes(configPeriod.name.toLowerCase());
        }
        return event.year >= configStartYear && event.year <= configEndYear;
      });

      console.log(`HistoricalDataService: Period '${configPeriod.name}' (${configPeriod.id}) has ${periodEvents.length} events.`);

      return {
        id: configPeriod.id,
        name: configPeriod.name,
        startYear: configStartYear,
        endYear: configEndYear,
        description: `Thông tin về thời kỳ ${configPeriod.name}`,
        events: periodEvents,
        difficulty: 'medium',
        unlocked: true,
        completed: false,
        rewards: configPeriod.rewards,
        color: configPeriod.color,
        quests: [],
        artifacts: [],
        characters: [],
        mapLocations: []
      };
    });

    return periods;
  }

  // loadContents and loadQuizzes methods are likely redundant if quests are generated in Explore component
  // Based on the Explore component's generateQuestsFromEvents, these might not be needed here.
  /*
  private async loadContents(): Promise<HistoricalContent[]> {
    console.log('HistoricalDataService: Loading contents...');
    // Transform events into contents (if needed separately from quests)
    // ... implementation ...
    console.log('HistoricalDataService: Loaded', 0, 'contents'); // Update count if implemented
    return []; // Return actual contents if implemented
  }

  private async loadQuizzes(): Promise<Quiz[]> {
    console.log('HistoricalDataService: Loading quizzes...');
    // Create quizzes based on events (if needed separately from quests)
    // ... implementation ...
     console.log('HistoricalDataService: Loaded', 0, 'quizzes'); // Update count if implemented
    return []; // Return actual quizzes if implemented
  }
  */

  private loadChallenges(): void { // Changed to void as it's synchronous
    console.log('HistoricalDataService: Loading challenges...');
    this.challenges = [ // Assign directly to this.challenges
      {
        id: 'daily-1',
        title: 'Học 3 bài học mới',
        description: 'Hoàn thành 3 bài học mới trong ngày',
        type: 'daily',
        requirements: {
          current: 0,
          target: 3
        },
        rewards: {
          experience: 150,
          coins: 75
        },
        completed: false
      }, {
        id: 'weekly-1',
        title: 'Hoàn thành 5 bài kiểm tra',
        description: 'Hoàn thành 5 bài kiểm tra trong tuần',
        type: 'weekly',
        requirements: {
          current: 0,
          target: 5
        },
        rewards: {
          experience: 300,
          coins: 150
        },
        completed: false
      }
    ];
    console.log('HistoricalDataService: Loaded', this.challenges.length, 'challenges');
  }

  private loadAchievements(): void { // Changed to void as it's synchronous
    console.log('HistoricalDataService: Loading achievements...');
    this.achievements = [ // Assign directly to this.achievements
      {
        id: 'achievement-1',
        title: 'Nhà sử học mới',
        description: 'Hoàn thành 10 bài học đầu tiên',
        requirements: {
          current: 0,
          target: 10
        },
        rewards: {
          experience: 500,
          coins: 250
        },
        unlocked: false,
        unlockedAt: '' // Consider using Date object or null
      },
      {
        id: 'achievement-2',
        title: 'Nhà sử học xuất sắc',
        description: 'Hoàn thành 50 bài học',
        requirements: {
          current: 0,
          target: 50
        },
        rewards: {
          experience: 1000,
          coins: 500
        },
        unlocked: false,
        unlockedAt: '' // Consider using Date object or null
      }
    ];
    console.log('HistoricalDataService: Loaded', this.achievements.length, 'achievements');
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
    // Currently, contents are not being loaded/generated in this service
    return []; // Placeholder
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getEraById(_id: string): HistoricalEra | undefined { // Fixed: prefixed with _ to indicate unused parameter
    // If you implement eras, find them here
    return undefined; // Placeholder
  }

  getPeriodById(id: string): HistoricalPeriod | undefined {
    return this.periods.find(period => period.id === id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getContentById(_id: string): HistoricalContent | undefined { // Fixed: prefixed with _ to indicate unused parameter
    // If you transform events into contents, find them here
     // Currently, contents are not being loaded/generated in this service
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
      if (!this.isLoaded) {
          await this.loadData(); // This loads the basic period structure and all events
      }

      const targetPeriod = this.periods.find(p => p.id === periodId);

      if (targetPeriod) {
          console.log(`Filtering events for period: ${periodId}`);
          // Filter events that belong to the target period from the allEvents array
          targetPeriod.events = this.allEvents.filter(event => event.period === periodId);
          console.log(`Found ${targetPeriod.events.length} events for period ${periodId}.`);
      } else {
          console.warn(`Period with ID ${periodId} not found in loaded periods.`);
      }
      
      return targetPeriod;
  }

  // Keep getEventsByPeriod for compatibility if needed, but getPeriodWithEvents is preferred for loading.
  getEventsByPeriod(periodId: string): HistoricalEvent[] {
     // This will only return events if they were already loaded by getPeriodWithEvents or loadData
     const period = this.periods.find(p => p.id === periodId);
     return period ? period.events : [];
  }

  // Add this method after loadEventsFromChunk
  private debugProcessedEvents(events: HistoricalEvent[]): void {
    console.log('Debug: Processed Events Overview');
    events.forEach(event => {
      console.log(`\nHeading: ${event.heading}`);
      console.log('Contexts:');
      const contexts = event.context.split('\n\n');
      contexts.forEach((context, index) => {
        console.log(`${index + 1}. ${context.substring(0, 100)}...`);
      });
    });
  }

  // Add new historical event for Hai Bà Trưng uprising
  private addHaiBaTrungEvent(): void {
    const haiBaTrungEvent: HistoricalEvent = {
      id: 'event_hai_ba_trung',
      heading: 'Nước Âu Lạc đầu Công nguyên và Khởi nghĩa Hai Bà Trưng',
      year: 40,
      type: 'rebellion',
      context: 'Đầu Công nguyên, nước Âu Lạc chịu sự đô hộ của nhà Hán. Chính quyền đô hộ truyền bá Nho giáo và lập trường học nhằm đào tạo tay sai bản địa. Tuy nhiên, chính sách cai trị ngày càng hà khắc, đặc biệt dưới thời Thái thú Tô Định (từ năm 34) nổi tiếng tham lam, tàn bạo, đã làm gia tăng mâu thuẫn. Tô Định áp bức kinh tế, thu hẹp quyền lực của Lạc hầu, Lạc tướng, và khủng bố người dân. Việc Tô Định giết Thi Sách, chồng bà Trưng Trắc (con gái Lạc tướng Mê Linh), đã trở thành nguyên nhân trực tiếp thổi bùng ngọn lửa khởi nghĩa.',
      description: 'Mùa xuân năm Canh Tý (40 SCN), Hai Bà Trưng (Trưng Trắc và Trưng Nhị) phất cờ khởi nghĩa tại cửa sông Hát (Mê Linh), nhận được sự hưởng ứng rộng rãi của nhân dân các quận Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố. Lời thề của Hai Bà thể hiện ý chí giành lại non sông, báo thù nhà, nợ nước. Nghĩa quân nhanh chóng đánh chiếm các quận huyện, bao gồm cả thủ phủ Luy Lâu, buộc Tô Định phải bỏ chạy. Hai Bà chiếm được 65 thành (có thuyết nói 56 thành), Trưng Trắc xưng Vương, đóng đô ở Mê Linh, xá thuế cho dân trong 2 năm và ban hành luật lệ riêng, khẳng định nền độc lập tự chủ.\n\nNhà Hán cử Mã Viện, một lão tướng dày dạn kinh nghiệm, mang 2 vạn quân sang đàn áp. Quân Trưng Vương dù chiến đấu dũng cảm nhưng do chênh lệch lực lượng và kinh nghiệm, đã thất bại trong các trận đánh lớn như ở Lãng Bạc. Hai Bà lui về Cấm Khê cố thủ nhưng cuối cùng bị đánh bại và anh dũng hy sinh vào năm 43 (có truyền thuyết nói Hai Bà tuẫn tiết ở sông Hát). Dù cuộc khởi nghĩa thất bại, các tướng lĩnh và nhân dân vẫn tiếp tục chống cự ở nhiều nơi, đặc biệt là ở Cửu Chân dưới sự lãnh đạo của Đô Dương và Chu Bá, nhưng cuối cùng cũng bị Mã Viện đàn áp khốc liệt.\n\nCuộc khởi nghĩa Hai Bà Trưng là cuộc nổi dậy lớn đầu tiên của nhân dân ta chống lại ách đô hộ phương Bắc, khẳng định mạnh mẽ ý chí độc lập, tự chủ và vai trò to lớn của người phụ nữ Việt Nam trong lịch sử đấu tranh của dân tộc.',
      period: 'period_1',
      characters: ['Trưng Trắc', 'Trưng Nhị', 'Tô Định', 'Mã Viện', 'Thi Sách', 'Đô Dương', 'Chu Bá'],
      locations: ['Mê Linh', 'Cửa sông Hát', 'Luy Lâu', 'Cấm Khê', 'Lãng Bạc'],
      questions: [
        {
          question: 'Ai là Thái thú Giao Chỉ nổi tiếng gian tham, tàn bạo, mà hành động giết Thi Sách đã trở thành nguyên nhân trực tiếp dẫn đến cuộc khởi nghĩa Hai Bà Trưng?',
          options: ['Tích Quang', 'Nhâm Diên', 'Tô Định', 'Mã Viện'],
          correctAnswer: 2,
          explanation: 'Tô Định là Thái thú Giao Chỉ từ năm 34, nổi tiếng tham lam, tàn bạo. Việc ông giết Thi Sách, chồng của Trưng Trắc, đã trở thành nguyên nhân trực tiếp dẫn đến cuộc khởi nghĩa.'
        },
        {
          question: 'Hai Bà Trưng phất cờ khởi nghĩa vào mùa xuân năm Canh Tý (năm 40 SCN) tại địa điểm nào?',
          options: ['Thành Cổ Loa', 'Thành Luy Lâu', 'Cửa sông Hát (Mê Linh)', 'Vùng Cấm Khê'],
          correctAnswer: 2,
          explanation: 'Hai Bà Trưng phất cờ khởi nghĩa tại cửa sông Hát (Mê Linh) vào mùa xuân năm Canh Tý (40 SCN), đây là nơi phát động cuộc khởi nghĩa đầu tiên.'
        },
        {
          question: 'Sau khi đánh đuổi quân Đông Hán, Trưng Trắc xưng Vương và đóng đô ở đâu?',
          options: ['Cổ Loa', 'Luy Lâu', 'Hát Môn', 'Mê Linh'],
          correctAnswer: 3,
          explanation: 'Sau khi đánh đuổi quân Đông Hán, Trưng Trắc xưng Vương và đóng đô ở Mê Linh, đây là quê hương của Hai Bà.'
        },
        {
          question: 'Tướng nhà Hán nào được cử sang đàn áp cuộc khởi nghĩa Hai Bà Trưng?',
          options: ['Tô Định', 'Lưu Long', 'Mã Viện', 'Đoàn Chí'],
          correctAnswer: 2,
          explanation: 'Mã Viện là một lão tướng dày dạn kinh nghiệm của nhà Hán, được cử mang 2 vạn quân sang đàn áp cuộc khởi nghĩa.'
        },
        {
          question: 'Ý nghĩa lịch sử quan trọng nhất của cuộc khởi nghĩa Hai Bà Trưng là gì?',
          options: [
            'Chấm dứt hoàn toàn ách đô hộ của phong kiến phương Bắc.',
            'Mở ra một thời kỳ phát triển rực rỡ của Nho giáo ở Việt Nam.',
            'Là cuộc khởi nghĩa lớn đầu tiên, thể hiện ý chí độc lập và vai trò to lớn của phụ nữ.',
            'Đánh dấu sự sụp đổ của chế độ Lạc tướng, Lạc hầu.'
          ],
          correctAnswer: 2,
          explanation: 'Cuộc khởi nghĩa Hai Bà Trưng là cuộc nổi dậy lớn đầu tiên của nhân dân ta chống lại ách đô hộ phương Bắc, khẳng định mạnh mẽ ý chí độc lập, tự chủ và vai trò to lớn của người phụ nữ Việt Nam trong lịch sử đấu tranh của dân tộc.'
        }
      ],
      rewards: {
        experience: 500,
        coins: 250
      }
    };

    // Add the event to the service's events array
    this.allEvents.push(haiBaTrungEvent);
    
    // Update the period's events array
    const period = this.periods.find(p => p.id === 'period_1');
    if (period) {
      period.events.push(haiBaTrungEvent);
    }
  }
}// Removed unused interface DataHistoricalPeriod
// Removed unused interface DataQuiz 

