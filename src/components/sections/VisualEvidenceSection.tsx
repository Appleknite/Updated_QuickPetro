import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

// Dynamic import of all images from the VisualEvidence folder
const images = import.meta.glob('/src/assets/VisualEvidence/*.webp', {
  eager: true,
  import: 'default'
});

const VisualEvidenceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Transform imported images into client logos array
  const clientLogos = useMemo(() => {
    return Object.entries(images).map(([path, src], index) => {
      const fileName = path.split('/').pop()?.replace('.webp', '') || '';
      return {
        id: index + 1,
        src: src as string,
        alt: `${fileName} - Trusted Partner of QuickPetro`,
        name: fileName
      };
    });
  }, []);

  const totalLogos = clientLogos.length;
  const logosPerView = 4;
  const maxIndex = Math.max(0, Math.ceil(totalLogos / logosPerView) - 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
      setIsAutoPlaying(false);
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
      setIsAutoPlaying(false);
    }
  };

  // Create all slides
  const slides = useMemo(() => {
    const allSlides = [];
    for (let i = 0; i <= maxIndex; i++) {
      const startIndex = i * logosPerView;
      const slideLogos = clientLogos.slice(startIndex, startIndex + logosPerView);
      allSlides.push(slideLogos);
    }
    return allSlides;
  }, [clientLogos, maxIndex, logosPerView]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trusted by Industry Leaders
        </h2>
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:border-secondary hover:text-secondary transition-all duration-300"
            aria-label="Previous logos"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:border-secondary hover:text-secondary transition-all duration-300"
            aria-label="Next logos"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(maxIndex + 1) * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / (maxIndex + 1)}%)`
              }}
            >
              {slides.map((slideLogos, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-shrink-0"
                  style={{ width: `${100 / (maxIndex + 1)}%` }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    {slideLogos.map((logo) => (
                      <figure
                        key={logo.id}
                        className="group relative aspect-[2/1] bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,64,128,0.2)] hover:border-secondary"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-90"
                          loading="lazy"
                        />
                        <figcaption className="sr-only">{logo.name}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-secondary w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ISO Certification Badge */}
        <div className="flex items-center justify-center space-x-3 text-center">
          <Award className="w-6 h-6 text-primary" />
          <p className="text-gray-700">
            ISO 9001 certified for excellence in quality management and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualEvidenceSection;
