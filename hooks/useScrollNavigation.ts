'use client';

import { useEffect, useRef } from 'react';

type NavigationDirection = 'up' | 'down';

interface ScrollRef {
  lastScrollTop: number;
  scrollTimeout: NodeJS.Timeout | null;
  isScrolling: boolean;
  lastWheelTime: number;
}

export function useScrollNavigation(
  onNavigate: (direction: NavigationDirection) => void,
  isEnabled: boolean = true
) {
  const scrollRef = useRef<ScrollRef>({
    lastScrollTop: 0,
    scrollTimeout: null,
    isScrolling: false,
    lastWheelTime: 0,
  });

  useEffect(() => {
    if (!isEnabled) return;

    const handleWheel = (e: WheelEvent) => {
      const scrollingElement = document.scrollingElement || document.documentElement;
      const { scrollTop, scrollHeight, clientHeight } = scrollingElement;
      const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 2;
      const isAtTop = scrollTop < 2;
      const now = Date.now();
      
      // Prevent rapid successive wheel events
      if (now - scrollRef.current.lastWheelTime < 500) {
        return;
      }

      // Handle navigation at page extremes
      if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
        e.preventDefault();
        scrollRef.current.lastWheelTime = now;
        
        // Special handling for contact page
        const isContactPage = document.querySelector('[data-section="contact"]') !== null;
        
        if (isAtBottom && isContactPage) {
          // When at bottom of contact page, go to home
          onNavigate('down'); // Using down to trigger the wrap-around logic
        } else {
          onNavigate(e.deltaY > 0 ? 'down' : 'up');
        }
      }
    };

    const handleScroll = () => {
      if (scrollRef.current.scrollTimeout) {
        clearTimeout(scrollRef.current.scrollTimeout);
      }

      scrollRef.current.isScrolling = true;

      scrollRef.current.scrollTimeout = setTimeout(() => {
        scrollRef.current.isScrolling = false;
        
        // Store last scroll position for reference
        const scrollingElement = document.scrollingElement || document.documentElement;
        scrollRef.current.lastScrollTop = scrollingElement.scrollTop;
      }, 150);
    };

    // Add event listeners with proper type casting for handleWheel
    window.addEventListener('wheel', handleWheel as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel as EventListener);
      window.removeEventListener('scroll', handleScroll);
      if (scrollRef.current.scrollTimeout) {
        clearTimeout(scrollRef.current.scrollTimeout);
      }
    };
  }, [onNavigate, isEnabled]);
}
