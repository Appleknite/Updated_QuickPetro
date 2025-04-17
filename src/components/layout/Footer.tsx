import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <a href="/#services" className="text-gray-400 hover:text-white transition-colors">
                Our Services
              </a>
            </li>
            <li>
              <a href="/#testimonial" className="text-gray-400 hover:text-white transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/services/thermic-fluid-cleaning-flushing" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                System Flushing
              </Link>
            </li>
            <li>
              <Link 
                to="/services/industrial-heat-transfer-oil-testing" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Filtration Solutions
              </Link>
            </li>
            <li>
              <Link 
                to="/services/industrial-heat-transfer-oil-testing" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Performance Testing
              </Link>
            </li>
            <li>
              <Link 
                to="/services/system-design" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Maintenance Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Evidence */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Why QuickPetro</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-gray-400">ISO 9001 Certified</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-gray-400">30+ Years Experience</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© 2024 QuickPetro. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
