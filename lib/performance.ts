/**
 * React Query Configuration & Performance Optimizations
 * Centralized configuration for caching, refetching, and query management
 */

import { QueryClient, DefaultOptions } from '@tanstack/react-query';

/**
 * Optimized React Query default options
 */
export const queryClientConfig: DefaultOptions = {
  queries: {
    // Stale time: Data is considered fresh for 5 minutes
    staleTime: 5 * 60 * 1000,
    
    // Cache time: Keep unused data in cache for 10 minutes
    gcTime: 10 * 60 * 1000,
    
    // Retry failed requests 3 times with exponential backoff
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    
    // Refetch on window focus for admin pages (keep data fresh)
    refetchOnWindowFocus: true,
    
    // Don't refetch on mount if data is still fresh
    refetchOnMount: false,
    
    // Refetch on reconnect to ensure data is up-to-date
    refetchOnReconnect: true,
  },
  mutations: {
    // Retry mutations once on failure
    retry: 1,
  },
};

/**
 * Create optimized QueryClient instance
 */
export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: queryClientConfig,
  });
}

/**
 * Query keys factory for consistent cache key management
 */
export const QueryKeys = {
  // Pages
  pages: {
    all: ['pages'] as const,
    list: (filters?: Record<string, string>) => 
      ['pages', 'list', filters] as const,
    detail: (id: string) => ['pages', 'detail', id] as const,
  },
  
  // Blog
  blog: {
    all: ['blog'] as const,
    list: (filters?: Record<string, string>) => 
      ['blog', 'list', filters] as const,
    detail: (slug: string) => ['blog', 'detail', slug] as const,
  },
  
  // Agents
  agents: {
    all: ['agents'] as const,
    list: (filters?: Record<string, string>) => 
      ['agents', 'list', filters] as const,
    detail: (id: string) => ['agents', 'detail', id] as const,
  },
  
  // Lenders
  lenders: {
    all: ['lenders'] as const,
    list: (filters?: Record<string, string>) => 
      ['lenders', 'list', filters] as const,
    detail: (id: string) => ['lenders', 'detail', id] as const,
  },
  
  // Rates
  rates: {
    all: ['rates'] as const,
    list: (filters?: Record<string, string>) => 
      ['rates', 'list', filters] as const,
    detail: (id: string) => ['rates', 'detail', id] as const,
  },
  
  // Applications
  applications: {
    all: ['applications'] as const,
    list: (filters?: Record<string, string>) => 
      ['applications', 'list', filters] as const,
    detail: (id: string) => ['applications', 'detail', id] as const,
  },
  
  // Contacts
  contacts: {
    all: ['contacts'] as const,
    list: (filters?: Record<string, string>) => 
      ['contacts', 'list', filters] as const,
    detail: (id: string) => ['contacts', 'detail', id] as const,
  },
  
  // Users
  users: {
    all: ['users'] as const,
    list: (filters?: Record<string, string>) => 
      ['users', 'list', filters] as const,
    detail: (id: string) => ['users', 'detail', id] as const,
  },
} as const;

/**
 * Prefetch helpers for better UX
 */
export async function prefetchQuery<T>(
  queryClient: QueryClient,
  queryKey: readonly unknown[],
  queryFn: () => Promise<T>
): Promise<void> {
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
}

/**
 * Invalidate queries helper
 */
export function invalidateQueries(
  queryClient: QueryClient,
  queryKey: readonly unknown[]
): Promise<void> {
  return queryClient.invalidateQueries({ queryKey });
}

/**
 * Optimistic update helper
 */
export function setOptimisticData<T>(
  queryClient: QueryClient,
  queryKey: readonly unknown[],
  updater: (old: T | undefined) => T
): void {
  queryClient.setQueryData(queryKey, updater);
}

/**
 * Image optimization utilities
 */
export const ImageOptimization = {
  /**
   * Get optimized image URL with Next.js Image Optimization
   */
  getOptimizedUrl(src: string, width?: number, quality = 75): string {
    if (!src) return '';
    
    // If it's already a full URL, return as-is
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }
    
    // Use Next.js image optimization
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('q', quality.toString());
    
    return `/_next/image?url=${encodeURIComponent(src)}&${params}`;
  },
  
  /**
   * Lazy load images with Intersection Observer
   */
  lazyLoadSetup() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }
    
    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.lazy;
          if (src) {
            img.src = src;
            img.removeAttribute('data-lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    images.forEach((img) => imageObserver.observe(img));
  },
};

/**
 * Pagination helpers
 */
export const Pagination = {
  /**
   * Calculate pagination metadata
   */
  getMeta(total: number, page: number, perPage: number) {
    const totalPages = Math.ceil(total / perPage);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;
    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, total);
    
    return {
      total,
      page,
      perPage,
      totalPages,
      hasNext,
      hasPrev,
      startIndex,
      endIndex,
    };
  },
  
  /**
   * Get page numbers for pagination UI
   */
  getPageNumbers(currentPage: number, totalPages: number, maxButtons = 5): number[] {
    if (totalPages <= maxButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxButtons - 1, totalPages);
    
    if (end - start + 1 < maxButtons) {
      start = Math.max(end - maxButtons + 1, 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  },
};

/**
 * Debounced search hook
 */
export function useDebouncedSearch(
  callback: (value: string) => void,
  delay = 300
): (value: string) => void {
  let timeout: NodeJS.Timeout;
  
  return (value: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(value), delay);
  };
}

/**
 * Local storage cache with expiry
 */
export const LocalStorageCache = {
  set(key: string, value: any, expiryMinutes = 60): void {
    const item = {
      value,
      expiry: Date.now() + expiryMinutes * 60 * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  get<T>(key: string): T | null {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    
    try {
      const item = JSON.parse(itemStr);
      if (Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }
      return item.value as T;
    } catch {
      return null;
    }
  },
  
  remove(key: string): void {
    localStorage.removeItem(key);
  },
  
  clear(): void {
    localStorage.clear();
  },
};
