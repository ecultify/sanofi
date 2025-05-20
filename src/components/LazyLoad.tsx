import { useRef, useEffect, useState, ReactNode, memo } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { preloadSectionImages } from "../lib/preloader";

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  sectionName?: string;
  imagesToPreload?: string[];
}

export const LazyLoad = memo(({
  children,
  threshold = 0.1,
  rootMargin = "200px 0px",
  placeholder = <div className="min-h-[100px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#416AF6] border-t-transparent rounded-full animate-spin"></div>
  </div>,
  sectionName,
  imagesToPreload = []
}: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { observe, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (ref.current) {
      const cleanup = observe(ref.current);
      return cleanup;
    }
  }, [observe]);
  
  useEffect(() => {
    if (hasIntersected) {
      setIsVisible(true);
      
      // If we have images to preload for this section
      if (sectionName && imagesToPreload.length > 0) {
        preloadSectionImages(sectionName, imagesToPreload);
      }
    }
  }, [hasIntersected, sectionName, imagesToPreload]);

  return (
    <div ref={ref}>
      {isVisible ? children : placeholder}
    </div>
  );
});
