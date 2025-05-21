import React from 'react';
import { 
  Heart, 
  DollarSign, 
  Bitcoin, 
  CreditCard, 
  Lock, 
  Github 
} from 'lucide-react';

const Donations = () => {
  return (
    <section id="donate" className="py-16 bg-gradient-to-br from-purple-700 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 mx-auto mb-6 text-pink-300" />
            <h2 className="text-3xl font-bold mb-4">Support VeraCrypt Development</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              VeraCrypt is free and open-source software. Your donations help maintain the project, 
              improve security, and develop new features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <div className="bg-white/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">One-time Donation</h3>
              <p className="text-blue-100 mb-4">
                Support the project with a single contribution of any amount
              </p>
              <button className="bg-white text-purple-700 py-2 px-6 rounded-md font-medium hover:bg-blue-100 transition-colors w-full">
                Donate Now
              </button>
            </div>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-white/30 hover:bg-white/20 transition-colors relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-bold">
                Popular
              </div>
              <div className="bg-white/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Monthly Sponsor</h3>
              <p className="text-blue-100 mb-4">
                Become a regular supporter with a monthly contribution
              </p>
              <button className="bg-white text-purple-700 py-2 px-6 rounded-md font-medium hover:bg-blue-100 transition-colors w-full">
                Become a Sponsor
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
              <div className="bg-white/20 rounded-full p-4 inline-flex items-center justify-center mb-4">
                <Bitcoin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cryptocurrency</h3>
              <p className="text-blue-100 mb-4">
                Donate using Bitcoin, Ethereum, or other cryptocurrencies
              </p>
              <button className="bg-white text-purple-700 py-2 px-6 rounded-md font-medium hover:bg-blue-100 transition-colors w-full">
                Crypto Donation
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Why Your Support Matters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                    <span>Maintaining and enhancing security features</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                    <span>Professional security audits and reviews</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                    <span>Development of new encryption methods</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                    <span>Support for new platforms and operating systems</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                    <span>Improved documentation and user guides</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    <span>View our open source code on GitHub</span>
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-white/5 p-6 rounded-lg border border-white/20">
                <h4 className="text-xl font-bold mb-4 text-center">Donation Goal</h4>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current: $42,500</span>
                    <span>Goal: $75,000</span>
                  </div>
                  <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '56%' }}></div>
                  </div>
                  <p className="text-center mt-2 text-sm text-blue-100">
                    56% of our yearly goal
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="mb-4 text-blue-100">
                    Join <strong>328</strong> supporters who have already contributed
                  </p>
                  <button className="bg-white text-purple-700 py-3 px-8 rounded-md font-bold hover:bg-blue-100 transition-colors">
                    Support VeraCrypt Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;