import { useRef, useEffect, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Custom hook that uses the Intersection Observer API
 * to track when an element enters or exits the viewport
 */
export const useIntersectionObserver = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false,
}: UseIntersectionObserverOptions = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<Element | null>(null);

  const frozenRef = useRef({
    root,
    rootMargin,
    threshold,
    triggerOnce,
  });

  // Update the ref when options change
  useEffect(() => {
    frozenRef.current = {
      root,
      rootMargin,
      threshold,
      triggerOnce,
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  // Callback for intersection observer
  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);
      
      // If this is the first intersection and we only want to trigger once
      if (entry.isIntersecting) {
        setHasIntersected(true);
        
        if (frozenRef.current.triggerOnce && observerRef.current && elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
        }
      }
    },
    []
  );

  // Setup/teardown observer
  const observe = useCallback((element: Element | null) => {
    if (element && !hasIntersected) {
      elementRef.current = element;
      
      // Create new observer if needed
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(handleIntersect, {
          root: frozenRef.current.root,
          rootMargin: frozenRef.current.rootMargin,
          threshold: frozenRef.current.threshold,
        });
      }
      
      observerRef.current.observe(element);
    }
    
    // Return cleanup function
    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
        elementRef.current = null;
      }
    };
  }, [handleIntersect, hasIntersected]);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        if (elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
        }
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    observe,
    isIntersecting,
    hasIntersected,
    entry,
  };
};
