import { useRef, useEffect, RefObject } from 'react';

interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onTap?: () => void;
  onDoubleTap?: () => void;
  onLongPress?: () => void;
  threshold?: number; // Minimum distance for swipe
  longPressDelay?: number; // Time for long press
}

interface TouchData {
  startX: number;
  startY: number;
  startTime: number;
  lastTapTime: number;
}

export function useTouchGestures<T extends HTMLElement>(
  options: TouchGestureOptions = {}
): RefObject<T> {
  const elementRef = useRef<T>(null);
  const touchDataRef = useRef<TouchData>({
    startX: 0,
    startY: 0,
    startTime: 0,
    lastTapTime: 0,
  });
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    onLongPress,
    threshold = 50,
    longPressDelay = 800,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const now = Date.now();
      
      touchDataRef.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        startTime: now,
        lastTapTime: touchDataRef.current.lastTapTime,
      };

      // Start long press timer
      if (onLongPress) {
        longPressTimerRef.current = setTimeout(() => {
          onLongPress();
        }, longPressDelay);
      }

      // Prevent default for better gesture handling
      e.preventDefault();
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Cancel long press on move
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const now = Date.now();
      const touchData = touchDataRef.current;
      
      // Clear long press timer
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
        longPressTimerRef.current = null;
      }

      const deltaX = touch.clientX - touchData.startX;
      const deltaY = touch.clientY - touchData.startY;
      const deltaTime = now - touchData.startTime;
      
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Check for swipe gestures
      if (absDeltaX > threshold || absDeltaY > threshold) {
        if (absDeltaX > absDeltaY) {
          // Horizontal swipe
          if (deltaX > 0) {
            onSwipeRight?.();
          } else {
            onSwipeLeft?.();
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            onSwipeDown?.();
          } else {
            onSwipeUp?.();
          }
        }
        return;
      }

      // Check for tap gestures (small movement, quick time)
      if (absDeltaX < 10 && absDeltaY < 10 && deltaTime < 300) {
        const timeSinceLastTap = now - touchData.lastTapTime;
        
        // Double tap detection
        if (timeSinceLastTap < 300 && onDoubleTap) {
          onDoubleTap();
          touchDataRef.current.lastTapTime = 0; // Reset to prevent triple tap
        } else {
          // Single tap (with delay to check for double tap)
          if (onTap && !onDoubleTap) {
            onTap();
          } else if (onTap && onDoubleTap) {
            setTimeout(() => {
              const currentTime = Date.now();
              if (currentTime - now > 250) {
                onTap();
              }
            }, 250);
          }
          touchDataRef.current.lastTapTime = now;
        }
      }
    };

    // Add event listeners with passive: false for preventDefault
    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      
      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current);
      }
    };
  }, [
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onDoubleTap,
    onLongPress,
    threshold,
    longPressDelay,
  ]);

  return elementRef;
}

// Specialized hook for quiz navigation
export function useQuizGestures(onNext: () => void, onPrevious: () => void) {
  return useTouchGestures({
    onSwipeLeft: onNext,
    onSwipeRight: onPrevious,
    threshold: 80, // Larger threshold for quiz navigation
  });
}

// Specialized hook for card interactions
export function useCardGestures(
  onTap: () => void,
  onLongPress?: () => void
) {
  return useTouchGestures({
    onTap,
    onLongPress,
    longPressDelay: 600,
  });
}
