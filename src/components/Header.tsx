import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import MegaDropdown from './MegaDropdown';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white shadow-sm z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-end space-x-6">
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-[#8B4513] font-bold text-3xl tracking-wider">
            QUICKPETRO
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {/* Main Menu */}
            <nav className="flex items-center space-x-6">
              {/* Services Dropdown Button with Chevron */}
              <button 
                className="text-gray-700 hover:text-gray-900 transition-colors flex items-center space-x-1 relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <a href="/oil-filtration-machine" className="text-gray-700 hover:text-gray-900 transition-colors">
                Oil Filtration Machine
              </a>
            </nav>

            {/* CTA Button */}
            <button className="bg-[#FF4500] text-white px-6 py-2 rounded-md hover:bg-[#FF5722] transition-colors duration-200 flex items-center space-x-2 transform hover:scale-105">
              <Phone size={18} />
              <span>Talk to an Expert</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Dropdown */}
      <MegaDropdown 
        isOpen={isDropdownOpen} 
        onClose={() => setIsDropdownOpen(false)} 
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <MegaDropdown 
            isOpen={true} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        </div>
      )}
    </header>
  );
};

export default Header;
