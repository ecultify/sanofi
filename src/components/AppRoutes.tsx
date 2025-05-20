import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoadingFallback } from './LoadingFallback';
import { preloadCriticalImages } from '../lib/preloader';

// Lazy load route components
const Final = lazy(() => import('../screens/Final/Final').then(module => ({ default: module.Final })));
const Privacy = lazy(() => import('../screens/Privacy/Privacy').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('../screens/Terms/Terms').then(module => ({ default: module.Terms })));

export const AppRoutes = () => {
  const location = useLocation();
  
  // Handle route changes
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Preload critical images on route change
    preloadCriticalImages();
    
    // Log route for analytics (can be replaced with actual analytics)
    console.log(`Route changed to: ${location.pathname}`);
  }, [location]);
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Final />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Suspense>
  );
};
