/**
 * Utility for dynamically loading scripts
 */

interface ScriptAttributes {
  async?: boolean;
  defer?: boolean;
  id?: string;
  crossOrigin?: string;
  integrity?: string;
  type?: string;
  noModule?: boolean;
}

/**
 * Load a script dynamically and return a promise that resolves when the script is loaded
 */
export const loadScript = (
  src: string,
  attributes: ScriptAttributes = {}
): Promise<HTMLScriptElement> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve(existingScript as HTMLScriptElement);
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = src;
    
    // Add attributes
    if (attributes.async) script.async = true;
    if (attributes.defer) script.defer = true;
    if (attributes.id) script.id = attributes.id;
    if (attributes.crossOrigin) script.crossOrigin = attributes.crossOrigin;
    if (attributes.integrity) script.integrity = attributes.integrity;
    if (attributes.type) script.type = attributes.type;
    if (attributes.noModule) script.noModule = true;
    
    // Handle loading events
    script.onload = () => resolve(script);
    script.onerror = (error) => reject(error);
    
    // Add to document
    document.body.appendChild(script);
  });
};

/**
 * Preload scripts for later use
 */
export const preloadScript = (src: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Load multiple scripts in parallel
 */
export const loadScripts = (
  sources: string[],
  attributes: ScriptAttributes = {}
): Promise<HTMLScriptElement[]> => {
  return Promise.all(sources.map(src => loadScript(src, attributes)));
};
