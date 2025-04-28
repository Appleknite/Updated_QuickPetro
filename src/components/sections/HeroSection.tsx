import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(../../Assets/BackgroudImages/Architecture.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Welcome to QuickPetro</h1>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-white mb-8">
            Based in Ahmedabad, India, QuickPetro brings over 30 years of expertise in industrial filtration solutions. 
            Our flagship products, LEGA-11 and LEGA-36, set industry standards for system cleaning, filtration, and 
            performance testing. As an ISO 9001 certified company, we're committed to sustainable practices while 
            delivering exceptional results for our clients worldwide.
          </p>
          
          {/* CTA Button */}
          <a 
            href="/contact?source=hero"
            className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF5722] transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <span>Schedule Expert Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
