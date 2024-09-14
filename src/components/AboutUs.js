// AboutUs.js
import React from 'react';

const AboutUs = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center bg-blue-100 p-12 md:left-64">
    <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">About Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Background</h3>
        <p className="text-gray-700">An enthusiastic web developer focused on crafting seamless, user-centered designs and robust, scalable solutions. After stepping away to support my family during an unexpected heart surgery, I'm now fully committed to resuming my programming career and driving impactful projects forward.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Skills</h3>
        <ul className="list-disc list-inside text-gray-700 list-none">
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js & Express</li>
          <li>Postgresql</li>
          <li>HTML5 & CSS3</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Experience</h3>
        <p className="text-gray-700">Four years of programming experience and one year of freelance work in full-stack web development following a bootcamp, I specialize in building scalable, maintainable applications.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Education</h3>
        <p className="text-gray-700">Finished General Assembly Chicago Full Stack Developer Bootcamp</p>
      </div>
      {/* <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">More</h3>
        <p className="text-gray-700"></p>
        <p className="text-gray-700"></p>
      </div> */}
    </div>
  </section>
);

export default AboutUs;