import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BottomCTA = () => {
  return (
    <section className="bg-gradient-to-r from-[#004080] to-[#002244] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
          Ready to Restore Efficiency and Protect Your System?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Don't let deposits and contaminants compromise your system's performance. 
          Schedule a consultation with our experts and discover how our LEGA series 
          flushing fluids can transform your operations.
        </p>
        <Link 
          to="/contact?source=flushing-fluids-bottom"
          className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
        >
          <span>Schedule a Flushing Service Today</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default BottomCTA;
