import React from 'react';
import { Shield, Download, BookOpen, Lock, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: "Military-Grade Encryption",
      description: "AES, Serpent, and Twofish algorithms with up to 512-bit keys"
    },
    {
      title: "Cross-Platform",
      description: "Available for Windows, macOS, and Linux"
    },
    {
      title: "Hidden Volumes",
      description: "Create hidden encrypted containers within volumes"
    },
    {
      title: "System Encryption",
      description: "Full disk encryption including system partitions"
    }
  ];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-700 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto py-16 md:py-24">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Secure Your Data with VeraCrypt
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Free open-source disk encryption software for Windows, Mac OS X, and Linux. Create encrypted containers or encrypt entire drives with military-grade security.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#documentation" 
                className="bg-white text-blue-700 hover:bg-blue-50 transition-colors px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Documentation</span>
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

        {/* Features Section */}
        <div className="max-w-6xl mx-auto py-16 border-t border-white/20">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle className="h-8 w-8 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Info */}
        <div className="max-w-6xl mx-auto py-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Advanced Security</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Lock className="h-5 w-5 mr-3 mt-1" />
                  <span>On-the-fly encryption transparently encrypts files without user intervention</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-5 w-5 mr-3 mt-1" />
                  <span>Plausible deniability in case of adversary forcing password reveal</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-5 w-5 mr-3 mt-1" />
                  <span>Pre-boot authentication for system encryption</span>
                </li>
                <li className="flex items-start">
                  <Lock className="h-5 w-5 mr-3 mt-1" />
                  <span>Multiple encryption algorithms can be cascaded</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose VeraCrypt?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1" />
                  <span>Based on TrueCrypt 7.1a with security enhancements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1" />
                  <span>Actively maintained and regularly updated</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1" />
                  <span>Free and open-source software</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1" />
                  <span>Independent security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;