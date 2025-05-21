import React, { useState, useEffect } from 'react';
import { Shield, Lock, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-700" />
          <span className="font-bold text-2xl text-gray-900">VeraCrypt</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Documentation', 'Downloads', 'Donate'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#download" 
            className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-800 transition-colors"
          >
            <Lock className="h-4 w-4" />
            <span>Download</span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'Documentation', 'Downloads', 'Donate'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#download" 
              className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-800 transition-colors w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Lock className="h-4 w-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;