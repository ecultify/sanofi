/**
 * Utility for preloading images to improve perceived performance
 */
import { prefetch } from './caching';

// List of critical images to preload (banner, logo, etc.)
const criticalImages = [
  '/image-24.png',          // Logo
  '/HeroBannerBG.png',      // Hero background
  '/layer-2-gigapixel-very-compressed-scalse-4-00x.png', // Hero image  
];

/**
 * Preload critical images as soon as possible
 */
export const preloadCriticalImages = (): void => {
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
    
    // Also cache the image URL
    prefetch(`image:${src}`, () => Promise.resolve(src));
  });
};

/**
 * Preload an image when needed
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if image is already in the browser cache
    const img = new Image();
    img.onload = () => {
      // Also cache the image URL
      prefetch(`image:${src}`, () => Promise.resolve(src));
      resolve();
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload a group of images for a specific section
 * @param {string} sectionName - Name of the section for tracking
 * @param {string[]} imagePaths - Array of image paths to preload
 */
export const preloadSectionImages = (sectionName: string, imagePaths: string[]): void => {
  // Log for debugging
  console.log(`Preloading images for section: ${sectionName}`);
  
  // Preload all images in the section
  imagePaths.forEach(path => {
    preloadImage(path).catch(() => {
      // Silently fail for preload
    });
  });
};
