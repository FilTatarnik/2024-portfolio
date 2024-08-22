import React, { useState } from 'react';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center bg-gray-900 p-12">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Munchy</h3>
          <p className="text-gray-300 mb-4">Munchy is a playful web app that helps users build healthier eating habits through gamification. Built with ReactJS, it features an engaging interface for tracking progress and connecting with a supportive community, making healthier living enjoyable and sustainable.</p>
          <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project Details
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">PokeDex Reloaded</h3>
          <p className="text-gray-300 mb-4">PokeDex Reloaded is a web app that lets users quickly find any Pokémon's color palette with a simple search. Built with ReactJS and NodeJS, it offers an intuitive and efficient way to explore Pokémon colors.</p>
          <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project Details
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Charm</h3>
          <p className="text-gray-300 mb-4">Charm is a full-stack web app built with ReactJS, NodeJS, ExpressJS, and PostgreSQL. It lets users create profiles and discover matches nearby. Currently a work in progress.npm</p>
          <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project Details
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Project 2</h3>
          <p className="text-gray-300 mb-4">Description of Project 2...</p>
          <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project Details
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Project 1</h3>
          <p className="text-gray-300 mb-4">Description of Project 1...</p>
          <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project Details
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Project 2</h3>
          <p className="text-gray-300 mb-4">Description of Project 2...</p>
          <button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Project Details
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">Project Details</h2>
            <p className="text-gray-300">This is where you'll showcase your project details.</p>
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;