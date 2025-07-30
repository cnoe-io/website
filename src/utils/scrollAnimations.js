/**
 * Scroll-based animation utilities for CNOE website
 * Implements intersection observer for reveal animations
 */

// Intersection Observer for scroll-based animations
export const createScrollObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, defaultOptions);
  }
  return null;
};

// Initialize scroll animations for elements
export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = createScrollObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.scrollAnimation || 'fade-in-up';
        const delay = element.dataset.animationDelay || '0';
        
        // Add animation class with delay
        setTimeout(() => {
          element.classList.add(`cnoe-animate-${animationType}`);
          element.classList.add('cnoe-animate-visible');
        }, parseInt(delay));
        
        // Stop observing this element
        observer.unobserve(element);
      }
    });
  });

  // Find all elements with scroll animation attributes
  const animatedElements = document.querySelectorAll('[data-scroll-animation]');
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

// Staggered animation utility for card grids
export const initStaggeredAnimations = (containerSelector, itemSelector, delay = 100) => {
  if (typeof window === 'undefined') return;

  const containers = document.querySelectorAll(containerSelector);
  
  containers.forEach((container) => {
    const items = container.querySelectorAll(itemSelector);
    
    const observer = createScrollObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const containerElement = entry.target;
          const items = containerElement.querySelectorAll(itemSelector);
          
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('cnoe-animate-fade-in-up');
              item.classList.add('cnoe-animate-visible');
            }, index * delay);
          });
          
          observer.unobserve(containerElement);
        }
      });
    });
    
    observer.observe(container);
  });
};

// React hook for scroll animations
export const useScrollAnimation = (ref, animationType = 'fade-in-up', delay = 0) => {
  if (typeof window === 'undefined') return;

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.classList.add('cnoe-animate-visible');
      return;
    }

    const observer = createScrollObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add(`cnoe-animate-${animationType}`);
            element.classList.add('cnoe-animate-visible');
          }, delay);
          observer.unobserve(element);
        }
      });
    });

    observer.observe(element);

    return () => {
      if (observer) {
        observer.unobserve(element);
      }
    };
  }, [ref, animationType, delay]);
};