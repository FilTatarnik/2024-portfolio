import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="App flex flex-col min-h-screen">
      <div className="flex flex-grow relative">
        <Navbar isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
        <main className={`flex-grow transition-all duration-300 ${isNavbarOpen ? 'md:ml-64' : 'ml-0'}`}>
          <LandingPage />
          <AboutUs />
          <Hero />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;