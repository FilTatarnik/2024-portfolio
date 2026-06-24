import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Triangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 md:left-64 right-0 bg-blue-900 text-white py-1 sm:py-2 px-3 sm:px-6 text-xs sm:text-sm md:text-base">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors"
        >
          <span className="hidden sm:inline">&copy; 2026 </span>Filip Tatarnik
          <span className="hidden sm:inline"> All rights reserved.</span>
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="sm:hidden">Privacy</span>
            <span className="hidden sm:inline">Privacy Policy</span>
          </a>
          <a
            href="/terms-of-service"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="sm:hidden">Terms</span>
            <span className="hidden sm:inline">Terms of Service</span>
          </a>
        </div>
        <div className="flex items-baseline space-x-3">
          <a
            href="https://github.com/FilTatarnik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/in/filiptatarnik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href="https://x.com/FilDamn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a
            href="https://fmhy.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 transition-colors opacity-0"
            title="Looks like you've found me matey 🏴‍☠️"
          >
            <Triangle size={22} strokeWidth={1} className="rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
