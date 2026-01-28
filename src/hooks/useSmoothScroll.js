import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);
  const ease = 0.1; // Smoothness factor (lower = smoother, higher = faster)
  const rafRef = useRef(null);

  useEffect(() => {
    let scrollCurrent = window.scrollY;
    let scrollTarget = window.scrollY;

    const updateScroll = () => {
      scrollTarget = window.scrollY;
      scrollCurrentRef.current = scrollTarget;
    };

    const smoothScroll = () => {
      scrollCurrent += (scrollTarget - scrollCurrent) * ease;
      
      if (Math.abs(scrollTarget - scrollCurrent) < 0.05) {
        scrollCurrent = scrollTarget;
      }

      // Apply smooth scroll transform
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${scrollCurrent}px`
      );

      rafRef.current = requestAnimationFrame(smoothScroll);
    };

    // Add scroll listener
    window.addEventListener('scroll', updateScroll, { passive: true });
    
    // Start animation loop
    smoothScroll();

    return () => {
      window.removeEventListener('scroll', updateScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
};
