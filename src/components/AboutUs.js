// AboutUs.js
import React from "react";

const AboutUs = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center bg-blue-100 p-12 md:left-64"
  >
    <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">
      About Me
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Background</h3>
        <p className="text-gray-700">
          I'm a full-stack web developer building functional, user-focused
          applications using React, Node.js, and PostgreSQL. I'm currently
          expanding into mobile development with React Native and deepening my
          understanding of core programming fundamentals. I'm looking for a
          developer role where I can contribute to a collaborative team, learn
          from experienced engineers, and build clean, reliable software.
          <br />
          <br />
          When I'm not coding, I'm usually building PCs for friends, tweaking
          mechanical keyboards, making music in Ableton, or going down
          audiophile rabbit holes. I collect Yu-Gi-Oh! and Pokémon cards,
          snowboard when I can, and have been playing Old School RuneScape long
          enough to get genuinely excited watching other people get drops. I
          cook, I sauna, I collect Le Creuset from Goodwill, and I've been known
          to solve a Rubik's Cube or two. Family means everything to me, I still
          see mine every single day, and I have a 16.5 year old cat who's been
          with me through it all.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Skills</h3>
        <div className="text-gray-700 space-y-3">
          <div>
            <span className="font-semibold text-blue-600">Frontend:</span>{" "}
            React, JavaScript, HTML5, CSS3, Tailwind, Responsive Design
          </div>
          <div>
            <span className="font-semibold text-blue-600">
              Backend & Databases:
            </span>{" "}
            Node.js, Express, PostgreSQL, Sequelize, RESTful APIs
          </div>
          <div>
            <span className="font-semibold text-blue-600">
              Tools & Methodology:
            </span>{" "}
            Git, GitHub, Agile, Firebase, Cloudflare, GitHub Pages
          </div>
          <div>
            <span className="font-semibold text-blue-600">Systems:</span>{" "}
            Windows, Linux, macOS
          </div>
          <div>
            <span className="font-semibold text-blue-600">Other:</span> Python,
            Music Production, Rubik's Cube, PC Building
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Experience</h3>
        <p className="text-gray-700">
          My background combines formal immersive training with years of
          practical application development and independent business management.
          Running Fil's Flooring taught me how to manage complex project
          timelines, scope client requirements, and deliver on expectations. I
          bring that same owner-operator mindset to engineering, clear
          communication, practical solutions, and code that works.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-4 text-blue-700">Education</h3>
        <div className="text-gray-700">
          <p className="font-semibold text-blue-600 mb-2">
            General Assembly Chicago
          </p>
          <p className="font-medium mb-3">Full Stack Developer Bootcamp</p>
          <ul className="space-y-2 list-none">
            <li>
              ✓ Completed 200+ hours of intensive, hands-on technical training
            </li>
            <li>
              ✓ Focused on full-stack JavaScript development and modern
              engineering frameworks
            </li>
            <li>
              ✓ Collaborated in sprint teams to build, test, and deploy web
              applications
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
