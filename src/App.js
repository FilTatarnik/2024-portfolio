import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { SnowOverlay } from 'react-snow-overlay';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
          <SnowOverlay />

      <Navbar isOpen={isNavbarOpen} setIsOpen={setIsNavbarOpen} />
      <div className="flex-grow pl-0 md:pl-64"> {/* Main content wrapper */}
        <main className="flex-grow">
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