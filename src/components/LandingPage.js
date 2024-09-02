import React from 'react';
import { Link } from 'react-scroll';

const LandingPage = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-blue-700 text-white p-4 md:p-8 w-full md:left-64 ">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">Filip Tatarnik</h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">Let's get some work done</p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
  <Link to="about" smooth={true} duration={500}>
    <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full transition-colors duration-300 border-2 border-blue-600 transform hover:scale-105">
      About Me
    </button>
  </Link>
  <Link to="projects" smooth={true} duration={500}>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105">
      View My Work
    </button>
  </Link>
</div>
    </div>
  </section>
);

export default LandingPage;