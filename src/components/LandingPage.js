import React from 'react';
import { Link } from 'react-scroll';

const LandingPage = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 text-white p-4 md:p-8 w-full">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">Filip Tatarnik</h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">Crafting Digital Experiences</p>
      <Link to="projects" smooth={true} duration={500}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 animate-bounce">
          View My Work
        </button>
      </Link>
    </div>
  </section>
);

export default LandingPage;