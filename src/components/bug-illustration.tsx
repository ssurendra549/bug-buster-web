
import { useEffect, useRef } from 'react';

export function BugIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (svgRef.current) {
      // Animation logic could be added here
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg 
        ref={svgRef}
        viewBox="0 0 400 300" 
        className="w-full h-auto"
        aria-label="Bug with magnifying glass illustration"
      >
        {/* Bug Body */}
        <ellipse cx="200" cy="150" rx="80" ry="70" fill="#8E9196" stroke="#333" strokeWidth="2" />
        <ellipse cx="200" cy="120" rx="60" ry="50" fill="#A0A4A9" stroke="#333" strokeWidth="2" />
        
        {/* Bug Eyes */}
        <circle cx="180" cy="110" r="10" fill="#333" />
        <circle cx="220" cy="110" r="10" fill="#333" />
        
        {/* Bug Antennae */}
        <path d="M160 90 L140 50" stroke="#333" strokeWidth="3" fill="none" />
        <path d="M240 90 L260 50" stroke="#333" strokeWidth="3" fill="none" />
        
        {/* Bug Legs */}
        <path d="M140 140 L80 120" stroke="#333" strokeWidth="3" fill="none" />
        <path d="M140 160 L80 170" stroke="#333" strokeWidth="3" fill="none" />
        <path d="M140 180 L90 210" stroke="#333" strokeWidth="3" fill="none" />
        <path d="M260 140 L320 120" stroke="#333" strokeWidth="3" fill="none" />
        <path d="M260 160 L320 170" stroke="#333" strokeWidth="3" fill="none" />
        <path d="M260 180 L310 210" stroke="#333" strokeWidth="3" fill="none" />
        
        {/* Magnifying Glass */}
        <circle cx="320" cy="150" r="40" fill="none" stroke="#333" strokeWidth="4" />
        <line x1="350" y1="180" x2="390" y2="220" stroke="#333" strokeWidth="6" />
        <circle cx="320" cy="150" r="35" fill="rgba(255,255,255,0.7)" />
      </svg>
    </div>
  );
}
