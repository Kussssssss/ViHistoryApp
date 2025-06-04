import { HistoricalEra, HistoricalPeriod, HistoricalContent, Challenge, Achievement, HistoricalEvent } from '../types/historicalData';
import { parse as parseCSV } from 'papaparse';
import { MAIN_PERIODS_CONFIG } from '../components/Explore';
import { STATIC_HISTORICAL_EVENTS } from '../data/staticEvents'; // NEW: Import static events

interface MainPeriodConfigItem {
  id: string;
  name: string;
  years: string;
  color: string;
  rewards: { experience: number; coins: number; };
}

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
      let loadedEvents: HistoricalEvent[] = [];

      // First try to load processed data
      const processedData = await this.loadProcessedData();
      if (processedData) {
        loadedEvents = processedData.events;
        this.lastUpdated = processedData.lastUpdated;
        console.log('HistoricalDataService: Loaded processed data with', loadedEvents.length, 'events');
      } else {
        // Fallback to loading from chunks
        const chunkFiles = await this.listChunkFiles();
        console.log('HistoricalDataService: Found chunk files:', chunkFiles);

        for (const file of chunkFiles) {
          const chunkEvents = await this.loadEventsFromChunk(file);
          console.log(`HistoricalDataService: Loaded ${chunkEvents.length} events from ${file}`);
          loadedEvents.push(...chunkEvents);
        }
        console.log('HistoricalDataService: Total events loaded from all chunks:', loadedEvents.length);
      }

      // NEW: Add static events to the loaded events
      this.allEvents = [...loadedEvents, ...STATIC_HISTORICAL_EVENTS];
      console.log('HistoricalDataService: Added static events. Total events now:', this.allEvents.length);


      // Initialize periods first
      this.periods = this.groupEventsIntoPeriods(this.allEvents);
      console.log('HistoricalDataService: Grouped events into periods. Number of periods:', this.periods.length);
      
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

  // NOTE: This generateQuestionsFromEvent is much more detailed than generateBasicQuestions.
  // You might want to unify them or decide which one to use based on your data source.
  // For CSV data, generateBasicQuestions might be sufficient if the raw data is simple.
  // For hand-crafted events, the detailed version is better.
  // For now, generateBasicQuestions is called for CSV events, and static events have pre-defined questions.
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
    if (event.description && event.description.length > 0) { // Check if description exists
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
      // console.log(`HistoricalDataService: Raw CSV content from ${filePath}:`, csvText.substring(0, 200) + '...'); // Too verbose for production

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
      const headingDataMap = new Map<string, { contexts: Set<string>; period: string; year: number | undefined; type: string; }>();

      data.forEach((row, index) => {
        const heading = row.heading;
        const context = row.context;
        const period = row.period;

        // Log the first few rows for debugging (consider removing for production)
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

        const year = this.extractYearFromPeriod(period);

        if (!headingDataMap.has(heading)) {
          headingDataMap.set(heading, { contexts: new Set(), period: period, year: year, type: 'other' }); // Default type to 'other'
        }
        headingDataMap.get(heading)?.contexts.add(context);
      });

      for (const [heading, { contexts, period, year, type }] of headingDataMap) {
        const combinedContext = Array.from(contexts).join('\n\n');

        const event: HistoricalEvent = {
          id: `event-${heading.replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 4)}`, // More unique ID
          heading: heading,
          context: combinedContext,
          description: '', // If CSV doesn't provide description, leave empty or derive.
          year: year,
          period: period,
          type: type as HistoricalEvent['type'], // Cast to ensure type safety. You might need a more sophisticated mapping for types.
          characters: undefined,
          locations: undefined,
          artifacts: undefined,
          image: undefined,
          audioUrl: undefined,
          hiddenImage: undefined
        };

        // Generate basic questions for CSV-parsed events
        event.questions = this.generateBasicQuestions(event); // Using the simplified version for CSV

        events.push(event);
      }

      console.log(`HistoricalDataService: Processed ${events.length} unique events from ${filePath}`);

      // Log the first few events for debugging (consider removing for production)
      if (events.length > 0) {
        console.log('HistoricalDataService: First few processed CSV events:',
          events.slice(0, 2).map(e => ({
            heading: e.heading,
            contextLength: e.context.length,
            year: e.year,
            period: e.period,
            questionsCount: e.questions?.length
          }))
        );
      }

      // No longer need debugProcessedEvents here. It's for development.
      // this.debugProcessedEvents(events);

      return events;
    } catch (error: unknown) {
      console.error(`HistoricalDataService: Error loading or parsing chunk ${filePath}:`, error instanceof Error ? error.message : error);
      return [];
    }
  }

  // Simplified question generation for CSV data where details might be sparse
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
        ].sort(() => Math.random() - 0.5), // Shuffle options
        correctAnswer: 0, // This will be wrong after shuffle, need to find index
        explanation: `Sự kiện "${event.heading}" diễn ra vào năm ${event.year}.`
      });
      // Correct the correctAnswer after shuffle
      questions[questions.length - 1].correctAnswer = questions[questions.length - 1].options.indexOf(event.year.toString());
    }

    if (event.type && event.type !== 'other') { // Only add if type is specific
      const typeDisplay = event.type === 'battle' ? 'Trận đánh' :
                          event.type === 'rebellion' ? 'Khởi nghĩa' :
                          event.type === 'dynasty' ? 'Triều đại' :
                          event.type === 'cultural' ? 'Văn hóa' : 'Khác';
      const options = [
        typeDisplay,
        'Không xác định',
        'Không có thông tin',
        'Không thuộc nhóm nào'
      ].sort(() => Math.random() - 0.5);
      questions.push({
        question: `Loại sự kiện "${event.heading}" thuộc nhóm nào?`,
        options: options,
        correctAnswer: options.indexOf(typeDisplay),
        explanation: `Sự kiện "${event.heading}" thuộc nhóm ${typeDisplay}.`
      });
    }

    if (event.context) {
      const contextSnippet = event.context.length > 100 ? event.context.substring(0, 100) + '...' : event.context;
      const options = [
        contextSnippet,
        'Không có bối cảnh',
        'Không xác định',
        'Không có thông tin'
      ].sort(() => Math.random() - 0.5);
      questions.push({
        question: `Bối cảnh của sự kiện "${event.heading}" là gì?`,
        options: options,
        correctAnswer: options.indexOf(contextSnippet),
        explanation: `Bối cảnh của sự kiện là: ${event.context}.`
      });
    }

    return questions;
  }

  private groupEventsIntoPeriods(events: HistoricalEvent[]): HistoricalPeriod[] {
    console.log('HistoricalDataService: Starting to group events into periods. Total events:', events.length);

    const periods: HistoricalPeriod[] = MAIN_PERIODS_CONFIG.map((configPeriod: MainPeriodConfigItem) => {
      const configYearsMatch = configPeriod.years.match(/^(\d+)\s*–\s*(\d+)$/);
      let configStartYear = 0;
      let configEndYear = 0;

      if (configYearsMatch) {
        configStartYear = parseInt(configYearsMatch[1]);
        configEndYear = parseInt(configYearsMatch[2]);
      } else {
        console.warn(`HistoricalDataService: Could not parse year range for period config: ${configPeriod.years}`);
      }

      // Filter events that belong to this period based on year range OR period name
      const periodEvents = events.filter(event => {
        if (event.year !== undefined) {
          return event.year >= configStartYear && event.year <= configEndYear;
        }
        // Fallback: If year is undefined, try to match by period name or ID
        return event.period?.toLowerCase() === configPeriod.id.toLowerCase() ||
               event.period?.toLowerCase().includes(configPeriod.name.toLowerCase());
      });

      console.log(`HistoricalDataService: Period '${configPeriod.name}' (${configPeriod.id}) has ${periodEvents.length} events.`);

      return {
        id: configPeriod.id,
        name: configPeriod.name,
        startYear: configStartYear,
        endYear: configEndYear,
        description: `Thông tin về thời kỳ ${configPeriod.name}`,
        events: periodEvents, // Events are assigned here during initial grouping
        difficulty: 'medium',
        unlocked: true,
        completed: false,
        rewards: configPeriod.rewards,
        color: configPeriod.color,
        quests: [], // Quests can be generated dynamically later
        artifacts: [],
        characters: [],
        mapLocations: []
      };
    });

    return periods;
  }

  private loadChallenges(): void {
    console.log('HistoricalDataService: Loading challenges...');
    this.challenges = [
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

  private loadAchievements(): void {
    console.log('HistoricalDataService: Loading achievements...');
    this.achievements = [
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
        unlockedAt: ''
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
        unlockedAt: ''
      }
    ];
    console.log('HistoricalDataService: Loaded', this.achievements.length, 'achievements');
  }

  // Getters
  getEras(): HistoricalEra[] {
    return []; // Placeholder - consider if you actually need 'eras' or if 'periods' are sufficient
  }

  getPeriods(): HistoricalPeriod[] {
    return this.periods;
  }

  getContents(): HistoricalContent[] {
    return []; // Placeholder - if contents are separate from events/quests
  }

  getEraById(_id: string): HistoricalEra | undefined {
    return undefined; // Placeholder
  }

  getPeriodById(id: string): HistoricalPeriod | undefined {
    return this.periods.find(period => period.id === id);
  }

  getContentById(_id: string): HistoricalContent | undefined {
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

  public async getPeriodWithEvents(periodId: string): Promise<HistoricalPeriod | undefined> {
      if (!this.isLoaded) {
          await this.loadData();
      }
      // Since groupEventsIntoPeriods already filters and assigns events to periods,
      // we can just return the found period directly.
      const targetPeriod = this.periods.find(p => p.id === periodId);
      // No need for a separate filter here if events are grouped correctly on load.
      // If there's a possibility that `period.events` isn't fully populated,
      // then you'd need the filter again.
      // targetPeriod.events = this.allEvents.filter(event => event.period === periodId);
      // However, the `groupEventsIntoPeriods` logic already does this.
      if (targetPeriod) {
          console.log(`HistoricalDataService: Retrieved period '${periodId}' with ${targetPeriod.events.length} events.`);
      } else {
          console.warn(`HistoricalDataService: Period with ID ${periodId} not found.`);
      }
      return targetPeriod;
  }

  getEventsByPeriod(periodId: string): HistoricalEvent[] {
     const period = this.periods.find(p => p.id === periodId);
     return period ? period.events : [];
  }

}