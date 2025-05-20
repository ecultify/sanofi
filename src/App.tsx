import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./components/AppRoutes";
import { preloadCriticalImages } from "./lib/preloader";

export const App = (): JSX.Element => {
  useEffect(() => {
    // Preload critical images on app initialization
    preloadCriticalImages();
    
    // Add page load time metrics
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};