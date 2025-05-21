import React, { useState } from 'react';
import { Book, FileText, HardDrive, Server, Shield, Users, Code, Key } from 'lucide-react';

interface DocCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  description: string;
}

const DocumentationCategories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: DocCategory[] = [
    {
      title: 'Getting Started',
      icon: <Book className="h-6 w-6" />,
      description: 'Essential information for new users on installation and basic usage',
      items: [
        'Beginner\'s Tutorial',
        'Installation Guide',
        'Quick Start Guide',
        'User Interface Tour',
        'Creating First Volume'
      ]
    },
    {
      title: 'Basic Concepts',
      icon: <FileText className="h-6 w-6" />,
      description: 'Core concepts and fundamentals of encryption',
      items: [
        'Volume Types',
        'Encryption Algorithms',
        'Hash Algorithms',
        'Password/Keyfiles',
        'Hidden Volumes',
        'System Encryption'
      ]
    },
    {
      title: 'Advanced Usage',
      icon: <Key className="h-6 w-6" />,
      description: 'Advanced features and techniques for power users',
      items: [
        'PIM Values',
        'Keyfiles',
        'Hidden Operating Systems',
        'Plausible Deniability',
        'Header Backup and Recovery',
        'Parallelization'
      ]
    },
    {
      title: 'Technical Details',
      icon: <Code className="h-6 w-6" />,
      description: 'In-depth technical information about implementation',
      items: [
        'Encryption Scheme',
        'Security Model',
        'Header Format',
        'Volume Format Specification',
        'Random Number Generators',
        'Keys and Passwords'
      ]
    },
    {
      title: 'Platform Specific',
      icon: <HardDrive className="h-6 w-6" />,
      description: 'Platform-specific features and limitations',
      items: [
        'Windows',
        'macOS',
        'Linux',
        'FreeBSD',
        'Raspberry Pi',
        'Virtual Machines'
      ]
    },
    {
      title: 'Security',
      icon: <Shield className="h-6 w-6" />,
      description: 'Security considerations and best practices',
      items: [
        'Security Model',
        'Attacks and Weaknesses',
        'Hardware-based Attacks',
        'Cold Boot Attacks',
        'Evil Maid Attack',
        'Keys in RAM'
      ]
    },
    {
      title: 'Enterprise',
      icon: <Server className="h-6 w-6" />,
      description: 'Enterprise deployment and management',
      items: [
        'Group Policy',
        'Deployment',
        'Management',
        'Compliance',
        'Backup Considerations',
        'Key Management'
      ]
    },
    {
      title: 'Community',
      icon: <Users className="h-6 w-6" />,
      description: 'Community resources and contributions',
      items: [
        'Forums',
        'Bug Reports',
        'Feature Requests',
        'Contributing',
        'Third-party Tools',
        'Research Papers'
      ]
    }
  ];

  return (
    <section id="documentation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find comprehensive guides and documentation to help you start working with VeraCrypt as quickly as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={category.title}
              className={`p-4 rounded-lg transition-all flex flex-col items-center text-center ${
                activeCategory === index 
                  ? 'bg-blue-700 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              <div className={`mb-2 ${activeCategory === index ? 'text-white' : 'text-blue-700'}`}>
                {category.icon}
              </div>
              <h3 className="font-medium text-sm md:text-base">
                {category.title}
              </h3>
            </button>
          ))}
        </div>

        <div className="bg-gray-100 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row mb-6">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {categories[activeCategory].title}
              </h3>
              <p className="text-gray-600">
                {categories[activeCategory].description}
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories[activeCategory].items.map((item) => (
                  <a 
                    key={item}
                    href="#"
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col"
                  >
                    <span className="text-blue-700 mb-1">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-gray-800">{item}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-blue-700 hover:text-blue-800 flex items-center transition-colors">
              <span>View all documentation</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationCategories;