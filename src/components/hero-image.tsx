
import { useState, useEffect } from 'react';

export function HeroImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img 
        src="/image-uploads/hero-image.png" 
        alt="FLY HIGH TECHNOLOGIES Hero Image" 
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
