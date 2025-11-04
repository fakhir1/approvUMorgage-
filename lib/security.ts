/**
 * Security Utilities for Admin Panel
 * Input validation, sanitization, and security helpers
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * Remove potentially dangerous HTML/JS
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Remove script tags and their content
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers
  sanitized = sanitized.replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/on\w+\s*=\s*[^\s>]*/gi, '');
  
  // Remove javascript: protocols
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Remove data: protocols (can be used for XSS)
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  
  return sanitized;
}

/**
 * Sanitize user input (escape special characters)
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Canadian format)
 */
export function isValidPhone(phone: string): boolean {
  // Accepts formats: (123) 456-7890, 123-456-7890, 1234567890
  const phoneRegex = /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate slug format (URL-safe string)
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Generate URL-safe slug from string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Validate file upload
 */
export interface FileValidationOptions {
  maxSize?: number; // in bytes
  allowedTypes?: string[]; // MIME types
  allowedExtensions?: string[]; // file extensions
}

export function validateFile(
  file: File,
  options: FileValidationOptions = {}
): { valid: boolean; error?: string } {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
  } = options;

  // Check file size
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`,
    };
  }

  // Check MIME type
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type must be one of: ${allowedTypes.join(', ')}`,
    };
  }

  // Check file extension
  const extension = '.' + file.name.split('.').pop()?.toLowerCase();
  if (!allowedExtensions.includes(extension)) {
    return {
      valid: false,
      error: `File extension must be one of: ${allowedExtensions.join(', ')}`,
    };
  }

  return { valid: true };
}

/**
 * Rate limiting helper (client-side)
 * Tracks API calls and prevents excessive requests
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  /**
   * Check if request is allowed
   * @param key Unique identifier for the rate limit (e.g., endpoint name)
   * @param limit Maximum number of requests
   * @param windowMs Time window in milliseconds
   */
  isAllowed(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    // Remove old requests outside the window
    const recentRequests = requests.filter(time => now - time < windowMs);
    
    if (recentRequests.length >= limit) {
      return false;
    }
    
    // Add current request
    recentRequests.push(now);
    this.requests.set(key, recentRequests);
    
    return true;
  }

  /**
   * Reset rate limit for a key
   */
  reset(key: string): void {
    this.requests.delete(key);
  }

  /**
   * Clear all rate limits
   */
  clearAll(): void {
    this.requests.clear();
  }
}

export const rateLimiter = new RateLimiter();

/**
 * Password strength validation
 */
export interface PasswordStrength {
  score: number; // 0-4
  feedback: string[];
  isStrong: boolean;
}

export function validatePasswordStrength(password: string): PasswordStrength {
  let score = 0;
  const feedback: string[] = [];

  if (password.length < 8) {
    feedback.push('Password should be at least 8 characters');
  } else {
    score++;
  }

  if (password.length >= 12) {
    score++;
  }

  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('Use both uppercase and lowercase letters');
  }

  if (/\d/.test(password)) {
    score++;
  } else {
    feedback.push('Include at least one number');
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('Include at least one special character');
  }

  return {
    score: Math.min(score, 4),
    feedback,
    isStrong: score >= 3,
  };
}

/**
 * CSRF Token management
 * Note: This is client-side only. Server-side implementation required for full protection.
 */
export const CSRFToken = {
  /**
   * Generate a random CSRF token
   */
  generate(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  /**
   * Store CSRF token in sessionStorage
   */
  store(token: string): void {
    sessionStorage.setItem('csrf_token', token);
  },

  /**
   * Get CSRF token from sessionStorage
   */
  get(): string | null {
    return sessionStorage.getItem('csrf_token');
  },

  /**
   * Get or create CSRF token
   */
  getOrCreate(): string {
    let token = this.get();
    if (!token) {
      token = this.generate();
      this.store(token);
    }
    return token;
  },

  /**
   * Clear CSRF token
   */
  clear(): void {
    sessionStorage.removeItem('csrf_token');
  },
};

/**
 * Secure headers for API requests
 */
export function getSecureHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add CSRF token if available
  const csrfToken = CSRFToken.get();
  if (csrfToken) {
    headers['X-CSRF-Token'] = csrfToken;
  }

  return headers;
}

/**
 * Content Security Policy helpers
 */
export const CSP = {
  /**
   * Get recommended CSP header value
   */
  getPolicy(): string {
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires unsafe-inline/eval in dev
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');
  },
};

/**
 * Input length limits for security
 */
export const InputLimits = {
  SHORT_TEXT: 100,      // Names, titles
  MEDIUM_TEXT: 500,     // Descriptions
  LONG_TEXT: 2000,      // Blog excerpts
  RICH_TEXT: 50000,     // Full blog posts
  URL: 2000,            // URLs
  EMAIL: 254,           // Email addresses (RFC 5321)
  PHONE: 20,            // Phone numbers
  SLUG: 100,            // URL slugs
} as const;

/**
 * Validate input length
 */
export function validateLength(
  value: string,
  max: number,
  min = 0
): { valid: boolean; error?: string } {
  if (value.length < min) {
    return { valid: false, error: `Minimum length is ${min} characters` };
  }
  
  if (value.length > max) {
    return { valid: false, error: `Maximum length is ${max} characters` };
  }
  
  return { valid: true };
}
