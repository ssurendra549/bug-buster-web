
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HeroImage } from '@/components/hero-image';
import { PrimaryCta, SecondaryCta } from '@/components/ui/cta-button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const HeroPunchlines = [
  "We don't just test. We stop bugs before they're born.",
  "We don't just run scripts—we build smarter ways to make it bulletproof",
  "Your users deserve flawless. We deliver it.",
  "No more patching after launch. We catch it before release.",
  "From Provar to Playwright, we speak every QA language."
];

export function HeroSection() {
  const [currentPunchlineIndex, setCurrentPunchlineIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPunchlineIndex((prev) => (prev + 1) % HeroPunchlines.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center py-0 px-6 md:px-12 lg:px-20 bg-blue-50">     
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2 space-y-3">
          <h2 className="text-xl md:text-xl font-bold text-blue-900">
            Tired of bugs ruining your product releases?
          </h2>
          
          <p className="text-sm md:text-base text-gray-700">
            We're the QA experts who make sure bugs don't even get a chance to live.
          </p>
          <p className="text-sm md:text-base text-gray-700">
            We kill bugs before they're born.
          </p>
          
          <div className="h-20 mt-2">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              value={currentPunchlineIndex}
              onValueChange={(value) => setCurrentPunchlineIndex(value)}
            >
              <CarouselContent className="ml-0">
                {HeroPunchlines.map((line, index) => (
                  <CarouselItem key={index} className="pl-0 text-sm md:text-base">
                    <div className="p-1">
                      <h2 className="text-base md:text-lg font-bold text-blue-900">{line}</h2>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <PrimaryCta 
              asChild 
              className="bg-black hover:bg-gray-800 text-white text-sm py-2 px-3 h-auto"
            >
              <Link to="/contact">Talk to Our QA Squad</Link>
            </PrimaryCta>
            <SecondaryCta 
              asChild 
              className="border-black text-black hover:bg-gray-100 text-sm py-2 px-3 h-auto"
            >
              <Link to="/services">Get a Free Bug Audit</Link>
            </SecondaryCta>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
