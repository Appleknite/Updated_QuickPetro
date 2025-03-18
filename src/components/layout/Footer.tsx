import React from 'react';
import { 
  Award, 
  Clock,
  Mail
} from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Our Services', 'Testimonials', 'About Us', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {[
              'System Flushing',
              'Filtration Solutions',
              'Performance Testing',
              'Maintenance Services'
            ].map((service) => (
              <li key={service}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {service}
                </a>
              </li>
            ))}
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

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Expert Tips & Updates</h3>
          <p className="text-gray-400 mb-4">
            Subscribe for maintenance tips and industry insights
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
            />
            <button title="Subscribe" className="bg-secondary text-white p-2 rounded-lg hover:bg-[#FF5722] transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© 2024 QuickPetro. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
