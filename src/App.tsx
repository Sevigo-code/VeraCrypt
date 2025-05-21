import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Downloads from './components/Downloads';
import Donations from './components/Donations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
        <Documentation />
        <Downloads />
        <Donations />
      </main>
      <Footer />
    </div>
  );
}

export default App;