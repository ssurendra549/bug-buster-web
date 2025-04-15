
import { useEffect, useRef } from 'react';

export function AnimatedBugBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    let animationFrameId: number;
    
    // Animation logic
    const createBug = () => {
      const bug = document.createElement('div');
      bug.className = 'absolute w-4 h-4 bg-gray-700 rounded-full';
      
      // Random position at the left edge
      const topPosition = Math.random() * 100;
      bug.style.top = `${topPosition}%`;
      bug.style.left = '0';
      
      container.appendChild(bug);
      
      // Animate the bug crawling right
      let position = 0;
      const speed = 1 + Math.random() * 2;
      
      const moveBug = () => {
        position += speed;
        bug.style.left = `${position}%`;
        
        // When bug reaches ~80% of the way, "zap" it
        if (position > 80 && !bug.classList.contains('zapped')) {
          bug.classList.add('zapped');
          bug.classList.add('opacity-0', 'scale-150');
          
          // Remove bug after animation
          setTimeout(() => {
            if (container.contains(bug)) {
              container.removeChild(bug);
            }
          }, 300);
          
          return;
        }
        
        if (position < 80) {
          animationFrameId = requestAnimationFrame(moveBug);
        }
      };
      
      animationFrameId = requestAnimationFrame(moveBug);
    };
    
    // Create bugs at intervals
    const intervalId = setInterval(createBug, 2000);
    
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-24 relative overflow-hidden"
      aria-label="Animated bugs getting zapped"
    >
      {/* Magnifying glass zapper (static) */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 z-10">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#333" strokeWidth="3" />
          <line x1="40" y1="40" x2="55" y2="55" stroke="#333" strokeWidth="4" />
        </svg>
      </div>
      
      {/* Screen representation */}
      <div className="absolute right-0 h-full w-1/6 border-l-2 border-gray-300 bg-gray-100/50"></div>
    </div>
  );
}
