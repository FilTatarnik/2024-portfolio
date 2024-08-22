// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <main className="lg:ml-64">
        <LandingPage />
        <AboutUs />
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;