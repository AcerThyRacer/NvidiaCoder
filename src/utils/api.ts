/**
 * NVIDIA NIM API Client
 * Handles all API communications with NVIDIA NIM endpoints
 */

import axios, { AxiosInstance, AxiosError } from 'axios';
import { getApiKey } from './config';

const BASE_URL = 'https://integrate.api.nvidia.com/v1';
const EXPERIMENTAL_BASE_URL = 'https://integrate.api.nvidia.com/experimental';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  stream?: boolean;
}

export interface ChatCompletionResponse {
  id: string;
  choices: Array<{
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface EmbeddingRequest {
  model: string;
  input: string | string[];
  encoding_format?: 'float' | 'base64';
}

export interface EmbeddingResponse {
  data: Array<{
    index: number;
    embedding: number[];
  }>;
  usage: {
    prompt_tokens: number;
    total_tokens: number;
  };
}

export interface VisionMessageContent {
  type: 'text' | 'image_url';
  text?: string;
  image_url?: {
    url: string;
  };
}

export interface VisionMessage {
  role: 'user' | 'assistant';
  content: string | VisionMessageContent[];
}

export class NVIDIAAPIClient {
  private client: AxiosInstance;
  private experimentalClient: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: 120000, // 2 minutes
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.experimentalClient = axios.create({
      baseURL: EXPERIMENTAL_BASE_URL,
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add auth interceptor
    this.client.interceptors.request.use((config) => {
      const apiKey = getApiKey();
      if (apiKey) {
        config.headers.Authorization = `Bearer ${apiKey}`;
      }
      return config;
    });

    this.experimentalClient.interceptors.request.use((config) => {
      const apiKey = getApiKey();
      if (apiKey) {
        config.headers.Authorization = `Bearer ${apiKey}`;
      }
      return config;
    });
  }

  async chatCompletion(request: ChatCompletionRequest): Promise<ChatCompletionResponse> {
    try {
      const response = await this.client.post<ChatCompletionResponse>(
        '/chat/completions',
        request
      );
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async embeddings(request: EmbeddingRequest): Promise<EmbeddingResponse> {
    try {
      const response = await this.client.post<EmbeddingResponse>(
        '/embeddings',
        request
      );
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async visionCompletion(
    model: string,
    messages: VisionMessage[]
  ): Promise<ChatCompletionResponse> {
    try {
      const response = await this.client.post<ChatCompletionResponse>(
        '/chat/completions',
        {
          model,
          messages,
        }
      );
      return response.data;
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async healthCheck(): Promise<{
    status: string;
    models?: string[];
  }> {
    try {
      const response = await this.client.get('/health/ready');
      return {
        status: 'healthy',
      };
    } catch (error) {
      if (this.isAuthError(error)) {
        throw new Error('Invalid API key. Please run `nvidia-cli config set` to configure your API key.');
      }
      throw this.handleApiError(error);
    }
  }

  async listModels(): Promise<string[]> {
    try {
      const response = await this.client.get<{
        data: Array<{ id: string }>;
      }>('/models');
      return response.data.data.map(m => m.id);
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  private handleApiError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ error?: { message?: string } }>;
      
      if (axiosError.response) {
        const status = axiosError.response.status;
        const message = axiosError.response.data?.error?.message || axiosError.message;

        if (status === 401) {
          return new Error('Invalid API key. Please run `nvidia-cli config set` to configure your API key.');
        } else if (status === 403) {
          return new Error('API key lacks permission. Check your NVIDIA API key settings.');
        } else if (status === 429) {
          return new Error('Rate limit exceeded. Please wait before making more requests.');
        } else if (status === 404) {
          return new Error('Model not found. Use `nvidia-cli list` to see available models.');
        } else if (status >= 500) {
          return new Error(`NVIDIA API server error (${status}). Please try again later.`);
        }
        
        return new Error(`API Error: ${message}`);
      }
      
      return new Error(`Network Error: ${axiosError.message}`);
    }
    
    return error instanceof Error ? error : new Error('Unknown error occurred');
  }

  private isAuthError(error: unknown): boolean {
    if (axios.isAxiosError(error)) {
      return error.response?.status === 401 || error.response?.status === 403;
    }
    return false;
  }
}

export const apiClient = new NVIDIAAPIClient();
