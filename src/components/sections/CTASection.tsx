import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-teal to-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Transform Your System Efficiency Today</h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Schedule a consultation with our thermal fluid system experts to optimize your operations—we'll respond within 1-2 business days.
        </p>
        <a 
          href="/contact?source=cta-section"
          className="bg-white text-teal px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-teal hover:text-white transform hover:scale-105 transition-all duration-200"
        >
          <span>Schedule Expert Consultation</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
