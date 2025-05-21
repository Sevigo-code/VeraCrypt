import React from 'react';
import { Shield, Download, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-purple-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              VeraCrypt Documentation
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Comprehensive guides and resources for securely encrypting your sensitive data
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#documentation" 
                className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Browse Documentation</span>
              </a>
              <a 
                href="#download" 
                className="bg-transparent hover:bg-blue-600 border-2 border-white transition-colors px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download VeraCrypt</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-white/30 rounded-full blur-xl"></div>
              <Shield className="h-48 w-48 text-white relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;