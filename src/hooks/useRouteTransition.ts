import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { preloadCriticalImages } from '../lib/preloader';

interface UseRouteTransitionOptions {
  preloadImages?: boolean;
  scrollToTop?: boolean;
  transitionDuration?: number;
}

/**
 * Hook for handling route transitions with loading states
 */
export const useRouteTransition = ({
  preloadImages = true,
  scrollToTop = true,
  transitionDuration = 300,
}: UseRouteTransitionOptions = {}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevPathname, setPrevPathname] = useState('');

  // Navigate with transition effect
  const navigateWithTransition = useCallback((to: string, options?: { state?: any }) => {
    setIsTransitioning(true);
    
    // Preload critical images for the new route
    if (preloadImages) {
      preloadCriticalImages();
    }
    
    // Add slight delay for transition effect
    setTimeout(() => {
      navigate(to, options);
      
      // Reset transition state after navigation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, transitionDuration);
  }, [navigate, preloadImages, transitionDuration]);

  // Handle route changes
  useEffect(() => {
    if (prevPathname !== location.pathname) {
      // Scroll to top on route change
      if (scrollToTop) {
        window.scrollTo(0, 0);
      }
      
      // Update previous pathname
      setPrevPathname(location.pathname);
      
      // Automatically end transition if it's still active
      if (isTransitioning) {
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }
    }
  }, [location.pathname, prevPathname, isTransitioning, scrollToTop]);

  return {
    isTransitioning,
    navigateWithTransition,
    currentPath: location.pathname,
  };
};
