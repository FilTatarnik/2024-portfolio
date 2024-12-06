// AboutUs.js
import React from 'react';

const AboutUs = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center bg-blue-100 p-12 md:left-64">
    <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">About Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Background</h3>
        <p className="text-gray-700">I'm a developer who likes building useful web apps that solve actual problems. Right now I run Fil's Flooring as the owner/operator, but I've kept coding and creating web solutions on the side. After getting my business established and taking some time to help family through a health situation, I'm looking to get more involved in software development. I bring both coding skills and real business experience to the table.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Skills</h3>
        <ul className="list-disc list-inside text-gray-700 list-none">
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js & Express</li>
          <li>Postgresql</li>
          <li>HTML5 & CSS3</li>
          <li>Git & Version Control</li>
          <li>Responsive Design</li>
          <li>RESTful API's</li>
          <li></li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Experience</h3>
        <p className="text-gray-700">My background includes bootcamp training and hands-on experience building websites, plus running my own flooring business. Managing Fil's Flooring has taught me a ton about working with clients and managing projects, while I've kept growing my coding skills through development work. I'm good at figuring out what needs to be built and finding practical solutions, focusing on writing clean code that works.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Education</h3>
        <p className="text-gray-700">
          <h4>General Assembly Chicago Full Stack Developer Bootcamp.</h4>
          <p>200+ hours of intensive hands-on training</p>
          <p>Full-stack JavaScript development</p>
          <p>Collaborated on team projects using modern frameworks.</p>
        </p>
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