import React from 'react';

const ServicesOverviewSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comprehensive Services Overview</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">System Flushing Solutions</h3>
            <p className="text-gray-600">
              Our advanced flushing process removes harmful contaminants and deposits, 
              ensuring optimal system performance and extended equipment life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Filtration Excellence</h3>
            <p className="text-gray-600">
              State-of-the-art filtration systems that significantly reduce downtime 
              and maintain peak operational efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Reliable System Maintenance</h3>
            <p className="text-gray-600">
              Comprehensive preventive maintenance programs designed to maximize 
              system longevity and minimize unexpected downtimes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-primary">Performance Testing Insights</h3>
            <p className="text-gray-600">
              Detailed analysis and reporting ensure your systems meet industry 
              standards and operate at peak efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;