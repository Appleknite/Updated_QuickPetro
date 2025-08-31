import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004080] mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "QuickPetro's flushing service restored our system's efficiency in under 48 hours. 
              The results were immediate and exceeded our expectations. Our heat transfer rates 
              improved significantly, and we've seen a noticeable reduction in energy consumption."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-[#004080] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">PM</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Plant Manager</p>
                <p className="text-gray-600">Chemicals Industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
