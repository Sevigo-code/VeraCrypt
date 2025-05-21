import React from 'react';
import { 
  Shield, 
  Github, 
  Twitter, 
  Facebook, 
  Mail, 
  Heart, 
  ExternalLink 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl text-white">VeraCrypt</span>
            </div>
            <p className="mb-4">
              Free open source disk encryption software for Windows, Mac, and Linux.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Getting Started</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">User Guide</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Technical Details</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Security Model</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Release Notes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Downloads</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Source Code</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Community Forum</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Report Bugs</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Feature Requests</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Third-party Tools</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Donate</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Sponsorships</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Security Issues</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contributing</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} VeraCrypt. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:text-white transition-colors mb-2 md:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors mb-2 md:mb-0">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors mb-2 md:mb-0">
              License
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
              <Heart className="h-4 w-4 mr-1 text-red-500" />
              <span>Donate</span>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            VeraCrypt is based on TrueCrypt 7.1a. The original TrueCrypt was discontinued in May 2014.
          </p>
          <p className="mt-2 flex items-center justify-center">
            <span>Visit the official VeraCrypt website:</span>
            <a 
              href="https://veracrypt.io"
              className="text-blue-400 hover:text-blue-300 ml-1 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              veracrypt.io
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;