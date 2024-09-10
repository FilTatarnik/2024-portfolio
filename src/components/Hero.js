import React, { useState, useRef, useEffect } from 'react';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const modalRef = useRef(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setCurrentProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const projects = [
    {
      id: 1,
      title: 'LeashPals',
      description: 'LeashPals is a web app built with React.js, Node.js, Express.js, and PostgreSQL. Users can register as either a Dog Owner or a Walker. Owners can add dogs and schedule walks, while Walkers can accept and complete these walk requests. The app simplifies connecting Owners with reliable Walkers. Currently a work in progress.',
      url: '',
      githubUrl: 'https://github.com/FilTatarnik/Leashpals_back_nodejs',
    },
    {
      id: 2,
      title: 'PokeDex Reloaded',
      description: 'PokeDex Reloaded is a web app that lets users quickly find any Pokémon\'s color palette with a simple search. Built with ReactJS and NodeJS, it offers an intuitive and efficient way to explore Pokémon colors.',
      url: 'https://filtatarnik.github.io/PokeDex_Reloaded/',
      githubUrl: 'https://github.com/FilTatarnik/PokeDex_Reloaded',
    },
    {
      id: 3,
      title: 'Charm',
      description: 'Charm is a full-stack web app built with ReactJS, NodeJS, ExpressJS, and PostgreSQL. It lets users create profiles and discover matches nearby. Currently a work in progress.',
      url: '',
      githubUrl: 'https://github.com/FilTatarnik/Dating_app_Charm',
    },
    {
      id: 4,
      title: 'Munchy',
      description: `Munchy is a fun and interactive website blog that I set up to store all of my workouts, calendars, and recipes, making it a go-to hub for health and wellness. Built with ReactJS, Munchy makes it easy to find useful health tips, set wellness goals, and connect with a supportive community. It’s all about making healthy living enjoyable and achievable, while helping me stay on track with my fitness journey.`,
      url: 'https://filtatarnik.github.io/Munchy_healthy_eating_app/',
      githubUrl: 'https://github.com/FilTatarnik/Munchy_healthy_eating_app',
    },
    {
      id: 5,
      title: 'Window Wiz Installation',
      description: `Window Wiz Installation is a mock website for a window installation company, built with React. It highlights services, customer testimonials, and a contact form, simulating a real business's online presence. `,
      url: 'https://filtatarnik.github.io/WindowWizInstallation/',
      githubUrl: 'https://github.com/FilTatarnik/WindowWizInstallation',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-12 md:left-64">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <button onClick={() => openModal(project)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
            <p className="text-gray-700 mb-4">{currentProject.description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              {currentProject.url && (
                <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Visit Site
                </a>
              )}
              {currentProject.githubUrl && (
                <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                  View Code
                </a>
              )}
            </div>
            {currentProject.url && (
              <div className="mt-4 mb-4 overflow-hidden" style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                <iframe
                  src={currentProject.url}
                  title="Project Preview"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            )}
            <button onClick={closeModal} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;