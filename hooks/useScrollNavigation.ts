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

    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const now = Date.now();

      // Prevent rapid successive touch events
      if (now - scrollRef.current.lastWheelTime < 500) {
        return;
      }

      const touchDiff = touchStartY - touchEndY;
      const minSwipeDistance = 50; // minimum distance for swipe

      if (Math.abs(touchDiff) >= minSwipeDistance) {
        const scrollingElement = document.scrollingElement || document.documentElement;
        const { scrollTop, scrollHeight, clientHeight } = scrollingElement;
        const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 2;
        const isAtTop = scrollTop < 2;

        // Only navigate if at the top or bottom
        if ((touchDiff > 0 && isAtBottom) || (touchDiff < 0 && isAtTop)) {
          scrollRef.current.lastWheelTime = now;
          onNavigate(touchDiff > 0 ? 'down' : 'up');
        }
      }
    };

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
      }, 100);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('scroll', handleScroll);
      if (scrollRef.current.scrollTimeout) {
        clearTimeout(scrollRef.current.scrollTimeout);
      }
    };
  }, [isEnabled, onNavigate]);
}
