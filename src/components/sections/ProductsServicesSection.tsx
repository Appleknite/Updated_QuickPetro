import React from 'react';
import { Droplets, Filter, Wrench, LineChart } from 'lucide-react';

const ProductsServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Products Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Premium Flushing Fluids</h3>
                  <p className="text-gray-600">
                    Our LEGA-11 and LEGA-36 flushing fluids feature deep hydro-finished base stocks, 
                    delivering superior oxidation stability and comprehensive system protection with 
                    advanced anti-rust and anti-wear properties.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Filter className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">System Cleaner</h3>
                  <p className="text-gray-600">
                    Our specialized system cleaner ensures thorough removal of contaminants, 
                    sludge, and deposits, restoring optimal system performance and extending 
                    equipment life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">System Flushing & Maintenance</h3>
                  <p className="text-gray-600">
                    Expert clean-out services with controlled heating and circulation, 
                    complemented by comprehensive system inspections for preventive maintenance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <LineChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Filtration & Performance Testing</h3>
                  <p className="text-gray-600">
                    Advanced contaminant removal through our ISO 9001 certified filtration service, 
                    coupled with detailed efficiency analysis and performance testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsServicesSection;