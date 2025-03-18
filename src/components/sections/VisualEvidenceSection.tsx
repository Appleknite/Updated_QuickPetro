import React, { useState, useEffect, useCallback } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const clientLogos = [
  { id: 1, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=ThermalTech", alt: "ThermalTech Industries - Trusted Partner in Industrial Heat Transfer Solutions", name: "ThermalTech Industries" },
  { id: 2, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=PetroSys", alt: "PetroSys Global - Leading Petrochemical Processing Partner", name: "PetroSys Global" },
  { id: 3, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=IndusTech", alt: "IndusTech Solutions - Industrial Automation Excellence Partner", name: "IndusTech Solutions" },
  { id: 4, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=HeatFlow", alt: "HeatFlow Systems - Premium Industrial Heating Solutions Provider", name: "HeatFlow Systems" },
  { id: 5, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=EnergyPro", alt: "EnergyPro Corp - Energy Efficiency Solutions Partner", name: "EnergyPro Corp" },
  { id: 6, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=FluidTech", alt: "FluidTech Industries - Industrial Fluid Management Expert", name: "FluidTech Industries" },
  { id: 7, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=ProcessPro", alt: "ProcessPro Solutions - Industrial Process Optimization Partner", name: "ProcessPro Solutions" },
  { id: 8, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=TempMaster", alt: "TempMaster Systems - Temperature Control Solutions Expert", name: "TempMaster Systems" },
  { id: 9, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=MechPro", alt: "MechPro Industries - Industrial Mechanical Solutions Provider", name: "MechPro Industries" },
  { id: 10, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=CoolStream", alt: "CoolStream Inc - Advanced Cooling Solutions Partner", name: "CoolStream Inc" },
  { id: 11, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=PrimeFluid", alt: "PrimeFluid Solutions - Innovative Fluid Management Experts", name: "PrimeFluid Solutions" },
  { id: 12, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=PowerFlow", alt: "PowerFlow Technologies - Leading Flow Technology Provider", name: "PowerFlow Technologies" },
  { id: 13, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=AeroHeat", alt: "AeroHeat Systems - Cutting-edge Aerothermal Solutions", name: "AeroHeat Systems" },
  { id: 14, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=QuantumFluid", alt: "Quantum Fluidics - Advanced Fluid Dynamics Partner", name: "Quantum Fluidics" },
  { id: 15, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=NovaTherm", alt: "NovaTherm Dynamics - Innovative Thermal Solutions Provider", name: "NovaTherm Dynamics" },
  { id: 16, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=EcoFluid", alt: "EcoFluid Solutions - Sustainable Fluid Management Partner", name: "EcoFluid Solutions" },
  { id: 17, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=TechFlow", alt: "TechFlow Innovations - Pioneering Flow and Heat Solutions", name: "TechFlow Innovations" },
  { id: 18, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=IndustCool", alt: "Industrial Cooling Co - Trusted Cooling Technology Experts", name: "Industrial Cooling Co" },
  { id: 19, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=DynamiHeat", alt: "Dynamic Heat Partners - Excellence in Thermal Management", name: "Dynamic Heat Partners" },
  { id: 20, src: "https://placehold.co/200x100/e5e7eb/1a365d?text=FusionEnergy", alt: "Fusion Energy Systems - Integrated Energy and Heat Solutions", name: "Fusion Energy Systems" }
];

const VisualEvidenceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalLogos = clientLogos.length;
  const logosPerView = 4;
  const maxIndex = Math.ceil(totalLogos / logosPerView) - 1;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchStart - touchEnd < -75) prevSlide();
  };

  const getVisibleLogos = () => {
    const startIndex = currentIndex * logosPerView;
    return clientLogos.slice(startIndex, startIndex + logosPerView);
  };

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
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {getVisibleLogos().map((logo) => (
                  <figure
                    key={logo.id}
                    className="group relative aspect-[2/1] bg-gray-50 rounded-lg border border-gray-200 p-4 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,64,128,0.2)] hover:border-secondary"
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
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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
