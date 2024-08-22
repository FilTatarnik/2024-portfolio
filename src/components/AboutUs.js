// AboutUs.js
import React from 'react';

const AboutUs = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center bg-gray-100 p-12">
    <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">About Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Background</h3>
        <p className="text-gray-700">A passionate web developer with a keen eye for design and a drive for creating intuitive user experiences.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Skills</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React & Redux</li>
          <li>JavaScript (ES6+)</li>
          <li>Node.js & Express</li>
          <li>HTML5 & CSS3</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Experience</h3>
        <p className="text-gray-700">5+ years of professional experience in full-stack web development, with a focus on creating scalable and maintainable applications.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Education</h3>
        <p className="text-gray-700">Bachelor's degree in Computer Science from XYZ University, graduating with honors in 2018.</p>
      </div>
    </div>
  </section>
);

export default AboutUs;