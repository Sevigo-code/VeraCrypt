import React, { useState } from 'react';
import { Download, AppWindow as Windows, Apple, Link as Linux, Server, Shield, ChevronDown, ChevronUp, HardDrive, Cpu } from 'lucide-react';

interface DownloadOption {
  name: string;
  description: string;
  version: string;
  size: string;
  date: string;
  link: string;
}

interface OSData {
  name: string;
  icon: React.ReactNode;
  description: string;
  primaryDownload: DownloadOption;
  otherDownloads: DownloadOption[];
  color: string;
}

const Downloads = () => {
  const [activeOS, setActiveOS] = useState<number>(0);
  const [showAllVersions, setShowAllVersions] = useState<boolean>(false);

  const osData: OSData[] = [
    {
      name: 'Windows',
      icon: <Windows className="h-8 w-8" />,
      description: 'For Windows 11, 10, 8.1, 8, 7',
      color: 'blue',
      primaryDownload: {
        name: 'VeraCrypt 1.26.7 Setup',
        description: 'Standard installer for all Windows versions',
        version: '1.26.7',
        size: '39.5 MB',
        date: 'September 15, 2023',
        link: '#'
      },
      otherDownloads: [
        {
          name: 'VeraCrypt 1.26.7 Portable',
          description: 'No installation required',
          version: '1.26.7',
          size: '36.2 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt 1.26.7 MSI Installer',
          description: 'For enterprise deployments',
          version: '1.26.7',
          size: '40.3 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt Legacy (1.24)',
          description: 'For older Windows versions',
          version: '1.24',
          size: '28.1 MB',
          date: 'October 31, 2020',
          link: '#'
        },
      ]
    },
    {
      name: 'macOS',
      icon: <Apple className="h-8 w-8" />,
      description: 'For macOS 11+ and Intel/Apple Silicon',
      color: 'gray',
      primaryDownload: {
        name: 'VeraCrypt 1.26.7 macOS',
        description: 'Universal binary (Intel/Apple Silicon)',
        version: '1.26.7',
        size: '45.2 MB',
        date: 'September 15, 2023',
        link: '#'
      },
      otherDownloads: [
        {
          name: 'VeraCrypt 1.26.7 Intel Only',
          description: 'For Intel-based Macs',
          version: '1.26.7',
          size: '38.7 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt 1.26.7 Apple Silicon',
          description: 'Optimized for M1/M2/M3 chips',
          version: '1.26.7',
          size: '42.1 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt Legacy (1.24)',
          description: 'For macOS 10.13-10.15',
          version: '1.24',
          size: '31.5 MB',
          date: 'October 31, 2020',
          link: '#'
        },
      ]
    },
    {
      name: 'Linux',
      icon: <Linux className="h-8 w-8" />,
      description: 'For Ubuntu, Debian, Fedora and others',
      color: 'green',
      primaryDownload: {
        name: 'VeraCrypt 1.26.7 Linux',
        description: 'Setup files for common distributions',
        version: '1.26.7',
        size: '33.8 MB',
        date: 'September 15, 2023',
        link: '#'
      },
      otherDownloads: [
        {
          name: 'VeraCrypt 1.26.7 .deb (Ubuntu/Debian)',
          description: 'For Debian-based distributions',
          version: '1.26.7',
          size: '28.3 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt 1.26.7 .rpm (Fedora/RHEL)',
          description: 'For RedHat-based distributions',
          version: '1.26.7',
          size: '29.1 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt 1.26.7 Source Code',
          description: 'Build from source',
          version: '1.26.7',
          size: '24.7 MB',
          date: 'September 15, 2023',
          link: '#'
        },
      ]
    },
    {
      name: 'Other',
      icon: <HardDrive className="h-8 w-8" />,
      description: 'FreeBSD, Raspberry Pi and source code',
      color: 'purple',
      primaryDownload: {
        name: 'VeraCrypt 1.26.7 FreeBSD',
        description: 'For FreeBSD systems',
        version: '1.26.7',
        size: '30.2 MB',
        date: 'September 15, 2023',
        link: '#'
      },
      otherDownloads: [
        {
          name: 'VeraCrypt 1.26.7 Raspberry Pi',
          description: 'For Raspberry Pi OS',
          version: '1.26.7',
          size: '22.6 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt 1.26.7 Source Code',
          description: 'Full source code',
          version: '1.26.7',
          size: '24.7 MB',
          date: 'September 15, 2023',
          link: '#'
        },
        {
          name: 'VeraCrypt Legacy (1.24)',
          description: 'For older systems',
          version: '1.24',
          size: '19.8 MB',
          date: 'October 31, 2020',
          link: '#'
        },
      ]
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500 hover:bg-blue-600';
      case 'gray': return 'bg-gray-700 hover:bg-gray-800';
      case 'green': return 'bg-green-600 hover:bg-green-700';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700';
      default: return 'bg-blue-600 hover:bg-blue-700';
    }
  };

  return (
    <section id="downloads" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloads</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download VeraCrypt for your platform. All downloads are free and open source.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* OS Selector Tabs */}
            <div className="flex border-b overflow-x-auto">
              {osData.map((os, index) => (
                <button
                  key={os.name}
                  className={`px-6 py-4 flex-1 flex flex-col items-center transition-colors ${
                    activeOS === index 
                      ? 'bg-gray-100 border-b-2 border-blue-600' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveOS(index)}
                >
                  <div className={`mb-2 ${activeOS === index ? 'text-blue-600' : 'text-gray-500'}`}>
                    {os.icon}
                  </div>
                  <span className={`font-medium ${activeOS === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {os.name}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Selected OS Download Section */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  {osData[activeOS].icon}
                  <span className="ml-2">{osData[activeOS].name}</span>
                </h3>
                <p className="text-gray-600">{osData[activeOS].description}</p>
              </div>
              
              {/* Primary Download */}
              <div className="mb-8 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="font-bold text-gray-900">{osData[activeOS].primaryDownload.name}</h4>
                    <p className="text-sm text-gray-600">{osData[activeOS].primaryDownload.description}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        v{osData[activeOS].primaryDownload.version}
                      </span>
                      <span className="text-xs text-gray-500">{osData[activeOS].primaryDownload.size}</span>
                      <span className="text-xs text-gray-500">{osData[activeOS].primaryDownload.date}</span>
                    </div>
                  </div>
                  <a
                    href={osData[activeOS].primaryDownload.link}
                    className={`${getColorClass(osData[activeOS].color)} text-white px-6 py-3 rounded-md font-medium flex items-center justify-center space-x-2 transition-colors`}
                  >
                    <Download className="h-5 w-5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
              
              {/* Toggle Other Versions */}
              <button
                className="w-full flex items-center justify-between p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors mb-4"
                onClick={() => setShowAllVersions(!showAllVersions)}
              >
                <span className="font-medium text-gray-700">
                  {showAllVersions ? 'Hide' : 'Show'} alternative downloads
                </span>
                {showAllVersions ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              
              {/* Other Downloads */}
              {showAllVersions && (
                <div className="space-y-3">
                  {osData[activeOS].otherDownloads.map((download) => (
                    <div 
                      key={download.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="mb-3 sm:mb-0">
                        <h4 className="font-medium text-gray-900">{download.name}</h4>
                        <p className="text-sm text-gray-600">{download.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            v{download.version}
                          </span>
                          <span className="text-xs text-gray-500">{download.size}</span>
                          <span className="text-xs text-gray-500">{download.date}</span>
                        </div>
                      </div>
                      <a
                        href={download.link}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Verification Section */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-start space-x-3">
                <div className="text-blue-600 pt-1">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Verify your download</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Always verify the integrity and authenticity of your download using PGP signatures and checksums.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                    Learn how to verify downloads →
                  </a>
                </div>
              </div>
              
              {/* System Requirements */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                  <Cpu className="h-4 w-4 mr-2 text-gray-500" />
                  System Requirements
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• OS: {osData[activeOS].name} (see specific version requirements above)</li>
                  <li>• RAM: 128 MB minimum</li>
                  <li>• Processor: 1 GHz or faster</li>
                  <li>• Free disk space: 50 MB + space for encrypted volumes</li>
                  <li>• Admin rights required for system encryption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;