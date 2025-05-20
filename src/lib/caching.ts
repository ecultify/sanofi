/**
 * Simplified data fetching and caching utility
 */
interface Cache {
  [key: string]: any;
}

// Simple in-memory cache
const cache: Cache = {};

/**
 * Fetch data with caching
 * @param {string} key - A unique key for the data
 * @param {() => Promise<any>} fetchFn - Function that returns a promise with the data
 * @param {object} options - Options for the fetch
 * @returns {Promise<any>} The fetched data
 */
export async function fetchWithCache(
  key: string,
  fetchFn: () => Promise<any>,
  options: { revalidate?: boolean } = {}
): Promise<any> {
  const { revalidate = false } = options;

  // Return cached data if available and not revalidating
  if (!revalidate && cache[key]) {
    return Promise.resolve(cache[key]);
  }

  try {
    // Fetch fresh data
    const data = await fetchFn();
    
    // Update cache
    cache[key] = data;
    
    return data;
  } catch (error) {
    // If we have cached data, return it on error
    if (cache[key]) {
      return cache[key];
    }
    throw error;
  }
}

/**
 * Prefetch data and store in cache
 * @param {string} key - A unique key for the data
 * @param {() => Promise<any>} fetchFn - Function that returns a promise with the data
 */
export function prefetch(key: string, fetchFn: () => Promise<any>): void {
  if (!cache[key]) {
    fetchWithCache(key, fetchFn).catch(() => {
      // Silently fail for prefetch
    });
  }
}

/**
 * Clear all cache or specific keys
 * @param {string[]} keys - Optional keys to clear. If not provided, clears all cache.
 */
export function clearCache(keys?: string[]): void {
  if (keys) {
    keys.forEach(key => {
      delete cache[key];
    });
  } else {
    Object.keys(cache).forEach(key => {
      delete cache[key];
    });
  }
}
