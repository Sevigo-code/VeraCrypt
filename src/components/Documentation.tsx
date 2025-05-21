import React from 'react';
import { FileText, Book, Shield, Server, HardDrive, Users, Code, Key, Lock, Terminal, Database, Cpu } from 'lucide-react';

const Documentation = () => {
  const categories = [
    {
      title: "Basic Operation",
      items: [
        { name: "Beginner's Tutorial", description: "Step-by-step guide for new users" },
        { name: "Creating New Volume", description: "How to create and configure encrypted volumes" },
        { name: "Mounting VeraCrypt Volume", description: "Access your encrypted data" },
        { name: "System Encryption", description: "Full disk encryption guide" },
        { name: "Volume Format Specification", description: "Understanding volume structure" },
        { name: "Favorite Volumes", description: "Managing frequently used volumes" }
      ],
      icon: Book
    },
    {
      title: "Advanced Topics",
      items: [
        { name: "Hidden Volume", description: "Create and use hidden encrypted volumes" },
        { name: "Security Requirements", description: "Best practices for maximum security" },
        { name: "Keyfiles", description: "Using keyfiles for additional security" },
        { name: "Plausible Deniability", description: "Advanced security features" },
        { name: "Hidden Operating System", description: "Creating and using hidden OS" },
        { name: "Parallelization", description: "Performance optimization" }
      ],
      icon: Shield
    },
    {
      title: "Technical Details",
      items: [
        { name: "Encryption Scheme", description: "Details about encryption algorithms" },
        { name: "Header Key Derivation", description: "Technical implementation details" },
        { name: "Random Number Generator", description: "Cryptographic security measures" },
        { name: "Parallelization", description: "Performance optimization details" },
        { name: "Data Leak Protection", description: "Preventing sensitive data exposure" },
        { name: "Security Model", description: "Core security principles" }
      ],
      icon: Code
    },
    {
      title: "Security Model",
      items: [
        { name: "Security Requirements", description: "Essential security practices" },
        { name: "Memory Protection", description: "RAM security measures" },
        { name: "Keys in RAM", description: "Memory handling of encryption keys" },
        { name: "Physical Security", description: "Protection against physical attacks" },
        { name: "Encryption Algorithms", description: "Supported ciphers and modes" },
        { name: "Header Protection", description: "Volume header security" }
      ],
      icon: Key
    },
    {
      title: "Platform Specific",
      items: [
        { name: "Windows", description: "Windows-specific features and guides" },
        { name: "macOS", description: "macOS integration and usage" },
        { name: "Linux", description: "Linux implementation details" },
        { name: "Command Line", description: "Command line usage guide" },
        { name: "FreeBSD", description: "FreeBSD support details" },
        { name: "Raspberry Pi", description: "Running on Raspberry Pi" }
      ],
      icon: HardDrive
    },
    {
      title: "Enterprise Usage",
      items: [
        { name: "Deployment Guide", description: "Enterprise deployment strategies" },
        { name: "Group Policies", description: "Windows domain integration" },
        { name: "Mass Deployment", description: "Large-scale implementation" },
        { name: "Best Practices", description: "Enterprise security guidelines" },
        { name: "Backup Considerations", description: "Enterprise backup strategies" },
        { name: "Compliance", description: "Meeting security standards" }
      ],
      icon: Server
    }
  ];

  const additionalResources = [
    {
      title: "Release Notes",
      description: "Latest updates and changes",
      icon: FileText
    },
    {
      title: "Community Forum",
      description: "Get help from the community",
      icon: Users
    },
    {
      title: "Security Guide",
      description: "Security best practices",
      icon: Shield
    },
    {
      title: "Command Reference",
      description: "Complete command documentation",
      icon: Terminal
    },
    {
      title: "Volume Recovery",
      description: "Data recovery procedures",
      icon: Database
    },
    {
      title: "Performance Guide",
      description: "Optimization techniques",
      icon: Cpu
    }
  ];

  return (
    <section id="documentation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation covering everything from basic usage to advanced security features and enterprise deployment.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <div key={category.title} className="mb-12">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <a 
                    key={item.name}
                    href="#" 
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalResources.map((resource) => (
                <a 
                  key={resource.title}
                  href="#" 
                  className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <resource.icon className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;