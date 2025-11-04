/**
 * API Error Handling Utilities for Admin Panel
 * Provides consistent error handling and user feedback
 */

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface ErrorResponse {
  error: string;
  code?: string;
  details?: any;
}

/**
 * Handle API response errors consistently
 */
export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage = 'An error occurred';
    let errorCode: string | undefined;

    try {
      const errorData: ErrorResponse = await response.json();
      errorMessage = errorData.error || errorMessage;
      errorCode = errorData.code;
    } catch {
      // If response is not JSON, use status text
      errorMessage = response.statusText || errorMessage;
    }

    throw new ApiError(errorMessage, response.status, errorCode);
  }

  return response.json();
}

/**
 * Get user-friendly error message from error object
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return 'An unexpected error occurred';
}

/**
 * Common error messages for admin operations
 */
export const ErrorMessages = {
  // Network errors
  NETWORK_ERROR: 'Network error. Please check your connection.',
  TIMEOUT: 'Request timed out. Please try again.',
  
  // Auth errors
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  
  // CRUD errors
  CREATE_FAILED: 'Failed to create item. Please try again.',
  UPDATE_FAILED: 'Failed to update item. Please try again.',
  DELETE_FAILED: 'Failed to delete item. Please try again.',
  FETCH_FAILED: 'Failed to load data. Please refresh the page.',
  
  // Validation errors
  INVALID_INPUT: 'Invalid input. Please check your data.',
  REQUIRED_FIELDS: 'Please fill in all required fields.',
  
  // File upload errors
  FILE_TOO_LARGE: 'File is too large. Maximum size is 5MB.',
  INVALID_FILE_TYPE: 'Invalid file type. Please upload a valid file.',
  UPLOAD_FAILED: 'Failed to upload file. Please try again.',
} as const;

/**
 * Success messages for admin operations
 */
export const SuccessMessages = {
  CREATED: 'Item created successfully',
  UPDATED: 'Item updated successfully',
  DELETED: 'Item deleted successfully',
  SAVED: 'Changes saved successfully',
  UPLOADED: 'File uploaded successfully',
} as const;

/**
 * Retry failed API calls with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> {
  let lastError: Error;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (i < maxRetries - 1) {
        const delay = baseDelay * Math.pow(2, i);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError!;
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Validate required fields in form data
 */
export function validateRequiredFields(
  data: Record<string, any>,
  requiredFields: string[]
): { isValid: boolean; missingFields: string[] } {
  const missingFields = requiredFields.filter(
    field => !data[field] || (typeof data[field] === 'string' && data[field].trim() === '')
  );

  return {
    isValid: missingFields.length === 0,
    missingFields,
  };
}

/**
 * Format error for logging
 */
export function formatErrorForLogging(error: unknown, context?: string): string {
  const timestamp = new Date().toISOString();
  const errorMessage = getErrorMessage(error);
  const stack = error instanceof Error ? error.stack : 'No stack trace';
  
  return `[${timestamp}] ${context ? `[${context}] ` : ''}${errorMessage}\n${stack}`;
}

/**
 * Check if error is a network error
 */
export function isNetworkError(error: unknown): boolean {
  if (error instanceof TypeError && error.message.includes('fetch')) {
    return true;
  }
  
  if (error instanceof Error && error.message.toLowerCase().includes('network')) {
    return true;
  }
  
  return false;
}

/**
 * Check if error requires authentication
 */
export function isAuthError(error: unknown): boolean {
  if (error instanceof ApiError) {
    return error.statusCode === 401 || error.statusCode === 403;
  }
  
  return false;
}
