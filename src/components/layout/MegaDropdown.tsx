import React from 'react';
import { Droplet, Settings, Phone, ChevronRight, FlaskRound as Flask, Wrench, LineChart, Cog } from 'lucide-react';

interface MegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Desktop Dropdown */}
      <div 
        className="absolute top-full left-0 w-full hidden md:block z-50"
        onMouseLeave={onClose}
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg mt-1 grid grid-cols-3 gap-8 p-8">
            {/* Products Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flask className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg text-gray-900">Products</h3>
              </div>
              <div className="space-y-4">
                <a href="/products/flushing-fluid" className="block group">
                  <div className="flex items-start space-x-3">
                    <Droplet className="w-5 h-5 text-gray-600 group-hover:text-secondary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-secondary">Flushing Fluid</p>
                      <p className="text-sm text-gray-600">Enhance system longevity and performance</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg text-gray-900">Thermal Fluid System Services</h3>
              </div>
              <div className="space-y-4">
                <a href="/services/cleaning-flushing" className="block group">
                  <div className="flex items-start space-x-3">
                    <Cog className="w-5 h-5 text-gray-600 group-hover:text-secondary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-secondary">
                        Thermic Fluid System Cleaning & Flushing
                      </p>
                      <p className="text-sm text-gray-600">Professional system maintenance services</p>
                    </div>
                  </div>
                </a>
                <a href="/services/oil-testing" className="block group">
                  <div className="flex items-start space-x-3">
                    <Flask className="w-5 h-5 text-gray-600 group-hover:text-secondary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-secondary">
                        Industrial Heat Transfer Oil Testing
                      </p>
                      <p className="text-sm text-gray-600">Comprehensive fluid analysis</p>
                    </div>
                  </div>
                </a>
                <a href="/services/system-design" className="block group">
                  <div className="flex items-start space-x-3">
                    <LineChart className="w-5 h-5 text-gray-600 group-hover:text-secondary mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-secondary">
                        Custom Thermal System Design & Optimization
                      </p>
                      <p className="text-sm text-gray-600">Tailored solutions for your needs</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg text-gray-900">Expert Consultation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Discuss your specific requirements for industrial heat transfer systems with our experts.
              </p>
              <a 
                href="/contact?source=mega-menu" 
                className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-[#FF5722] transition-colors duration-200"
              >
                <span>Schedule Expert Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <div className="px-4 py-2 space-y-4 bg-white border-t">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
              <Flask className="w-5 h-5" />
              <span>Products</span>
            </h3>
            <a href="/products/flushing-fluid" className="block px-4 py-2 text-gray-600 hover:text-secondary">
              Flushing Fluid
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Thermal Fluid System Services</span>
            </h3>
            <a href="/services/cleaning-flushing" className="block px-4 py-2 text-gray-600 hover:text-secondary">
              Thermic Fluid System Cleaning & Flushing
            </a>
            <a href="/services/oil-testing" className="block px-4 py-2 text-gray-600 hover:text-secondary">
              Industrial Heat Transfer Oil Testing
            </a>
            <a href="/services/system-design" className="block px-4 py-2 text-gray-600 hover:text-secondary">
              Custom Thermal System Design & Optimization
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Expert Consultation</span>
            </h3>
            <p className="px-4 py-2 text-gray-600">
              Discuss your specific requirements for industrial heat transfer systems.
            </p>
            <a 
              href="/contact?source=mega-menu-mobile" 
              className="block mx-4 text-center bg-secondary text-white px-6 py-3 rounded-lg hover:bg-[#FF5722] transition-colors duration-200"
            >
              Schedule Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaDropdown;
