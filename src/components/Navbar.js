import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Briefcase, Mail, Menu, X, ChartColumnIncreasing, Cat, Minus, BriefcaseBusiness, ArrowBigUp } from 'lucide-react';
import ContactFormModal from './ContactFormModal';  // Import the new component
import OsrsStats from './OsrsStats';
import PokemonCards from './PokemonCards';

const Navbar = ({ isOpen, setIsOpen }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isOsrsModalOpen, setIsOsrsModalOpen] = useState(false);
  const [isPokemonModalOpen, setIsPokemonModalOpen] = useState(false);

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
  };

  const toggleOsrsModal = () => {
    setIsOsrsModalOpen(!isOsrsModalOpen);
  };

  const togglePokemonModal = () => {
    setIsPokemonModalOpen(!isPokemonModalOpen);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-4 right-4 z-50 md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600">
            <Link to="home" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
              Filip Tatarnik
            </Link>
          </h1>
          <p className="text-xs md:text-sm text-gray-600 mb-8 md:mb-12">Web Developer & Designer</p>
          <ul className="space-y-6 md:space-y-12">
            <li>
              <Link to="home" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <Home size={20} className="mr-2" />Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <User size={20} className="mr-2" />About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <Briefcase size={20} className="mr-2" />Projects
              </Link>
            </li>
            {/* <li>
              <Link to="#" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <BriefcaseBusiness size={20} className="mr-2" />Wordpress Sites
              </Link>
            </li> */}
            <li>
              <button onClick={toggleContactModal} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <Mail size={20} className="mr-2" />Contact
              </button>
            </li>
            <li>
              <Minus />
            </li>
            <li>
              <button onClick={toggleOsrsModal} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <ChartColumnIncreasing size={20} className="mr-2" />Osrs Stats
              </button>
            </li>
            <li>
              <button onClick={togglePokemonModal} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                <Cat size={20} className="mr-2" />Pokemon Cards I Need
              </button>
            </li>
            <li>
              {/* <img src="https://ghchart.rshah.org/FilTatarnik" alt="GitHub Contributions" class="contribution-chart" /> */}
            </li>
          </ul>
        </div>
        <div className="text-sm text-gray-500">
            <Link to="home" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
              FT
            </Link>
        </div>
      </nav>
      <ContactFormModal isOpen={isContactModalOpen} onClose={toggleContactModal} />
      <PokemonCards isOpen={isPokemonModalOpen} onClose={togglePokemonModal} />
      <OsrsStats isOpen={isOsrsModalOpen} onClose={toggleOsrsModal} />

    </>
  );
};

export default Navbar;