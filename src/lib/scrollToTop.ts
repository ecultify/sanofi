/**
 * Custom hook to scroll to top of page when component mounts
 */
import { useEffect } from 'react';

/**
 * ScrollToTop is a utility function that scrolls the window to the top
 * when the component mounts.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
