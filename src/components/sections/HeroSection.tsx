import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to QuickPetro</h1>
      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Based in Ahmedabad, India, QuickPetro brings over 30 years of expertise in industrial filtration solutions. 
          Our flagship products, LEGA-11 and LEGA-36, set industry standards for system cleaning, filtration, and 
          performance testing. As an ISO 9001 certified company, we're committed to sustainable practices while 
          delivering exceptional results for our clients worldwide.
        </p>
        
        {/* CTA Button */}
        <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 hover:bg-[#FF5722] transform hover:scale-105 transition-all duration-200 shadow-lg">
          <span>Get a Free Consultation</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
