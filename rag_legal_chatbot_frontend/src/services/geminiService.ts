import axios from 'axios';

const API_ENDPOINT = '/api/generate-questions';

export class GeminiService {
  private static instance: GeminiService;

  private constructor() {}

  static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  async generateQuestionsFromEvent(event: {
    heading: string;
    context: string;
    description: string;
    year?: number;
    type?: string;
    characters?: string[];
    locations?: string[];
  }) {
    try {
      const response = await axios.post(API_ENDPOINT, {
        event: {
          heading: event.heading,
          context: event.context,
          description: event.description,
          year: event.year,
          type: event.type,
          characters: event.characters,
          locations: event.locations
        }
      });

      return response.data.questions;
    } catch (error) {
      console.error('Error generating questions:', error);
      // Fallback to basic questions if API call fails
      return this.generateBasicQuestions(event);
    }
  }

  private generateBasicQuestions(event: {
    heading: string;
    context: string;
    description: string;
    year?: number;
    type?: string;
    characters?: string[];
    locations?: string[];
  }) {
    // Fallback to basic question generation if API fails
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
} 