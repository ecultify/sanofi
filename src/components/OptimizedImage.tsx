import { useEffect, useState, memo } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized image component with progressive loading and error handling
 */
export const OptimizedImage = memo(({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = '', // Could be a base64 blur placeholder
  onLoad,
  onError,
}: ImageProps): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <img
      src={hasError ? placeholder || '/placeholder-image.png' : src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading={loading}
      onLoad={() => {
        setIsLoaded(true);
        onLoad?.();
      }}
      onError={() => {
        setHasError(true);
        onError?.();
      }}
    />
  );
});
