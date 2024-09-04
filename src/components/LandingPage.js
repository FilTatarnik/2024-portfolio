import React from 'react';
import { Link } from 'react-scroll';

const LandingPage = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 text-white p-4 md:p-8 w-full">
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-down">Filip Tatarnik</h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up">Let's get some work done</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
        <Link to="about" smooth={true} duration={500}>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-colors duration-300 border-2 border-blue-600 transform hover:scale-105">
            About Me
          </button>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
            View My Work
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default LandingPage;