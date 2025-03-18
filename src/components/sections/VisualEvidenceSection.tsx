import React from 'react';
import { Award } from 'lucide-react';

const VisualEvidenceSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Industry Leaders</h2>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex items-center justify-center">
              <div className="w-full h-24 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-200 hover:border-primary hover:shadow-md">
                Client Logo {num}
              </div>
            </div>
          ))}
        </div>

        {/* ISO Certification Note */}
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