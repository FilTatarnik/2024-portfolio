import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 md:left-64 right-0 bg-blue-900 text-white py-1 sm:py-2 px-3 sm:px-6 text-xs sm:text-sm md:text-base">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-1 sm:mb-0 text-center sm:text-left">
          <p className="hidden sm:inline">&copy; 2024 </p>
          <Link to="home" smooth={true} duration={500} className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
            Filip Tatarnik
          </Link>
          <span className="hidden sm:inline"> All rights reserved.</span>
        </div>
        <div className="mb-1 sm:mb-0 text-center">
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 mx-1 sm:mx-2 transition-colors">
            <span className="sm:hidden">Privacy</span>
            <span className="hidden sm:inline">Privacy Policy</span>
          </a>
          <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 mx-1 sm:mx-2 transition-colors">
            <span className="sm:hidden">Terms</span>
            <span className="hidden sm:inline">Terms of Service</span>
          </a>
        </div>
        <div className="flex justify-center sm:justify-end space-x-3">
          <a href="https://github.com/FilTatarnik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a href="https://www.linkedin.com/in/filiptatarnik/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a href="https://x.com/FilDamn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;