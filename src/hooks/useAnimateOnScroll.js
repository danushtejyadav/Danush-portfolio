import { useState, useEffect } from 'react';

// --- (1.5) CUSTOM HOOK for ANIMATIONS ---
export const useAnimateOnScroll = (options = { threshold: 0.1, triggerOnce: true }) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce && ref) {
          observer.unobserve(ref);
        }
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
};