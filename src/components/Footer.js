import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 md:left-64 right-0 bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/4 text-left">
          <p>&copy; 2024 Filip Tatarnik. All rights reserved.</p>
        </div>
        <div className="text-center">
          <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 mx-2 transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 mx-2 transition-colors">Terms of Service</a>
        </div>
        <div className="w-1/4 text-right">
          <a href="https://github.com/FilTatarnik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 mx-2 transition-colors">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/filiptatarnik/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 mx-2 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://x.com/FilDamn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 mx-2 transition-colors">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;