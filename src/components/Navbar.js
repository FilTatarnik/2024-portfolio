import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Home, User, Briefcase, Mail, X, GitHub, Linkedin, Twitter } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between p-6">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Filip Tatarnik</h1>
        <p className="text-sm text-gray-600 mb-12">Web Developer & Designer</p>
        <ul className="md:space-y-12">
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
          <li>
            <Link to="contact" smooth={true} duration={500} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
              <Mail size={20} className="mr-2" />Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-sm text-gray-500">FT</div>
    </nav>
  );
};

export default Navbar;