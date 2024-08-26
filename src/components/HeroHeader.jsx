import React, { useState, memo } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { myphoto } from '../Constant/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const HeroHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-green-900 text-white">
      <header className="w-full flex flex-wrap md:flex-nowrap p-4 items-center justify-between">
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 tracking-widest">
          Tarun Kale
        </div>
        <button 
          className="md:hidden text-white focus:outline-none" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110"
              onClick={toggleMenu}
            >
              About Me
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300"></span>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110"
              onClick={toggleMenu}
            >
                  Skills
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300"></span>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110"
              onClick={toggleMenu}
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300"></span>
            </Link>
            <Link
              to="contactme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative cursor-pointer text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110"
              onClick={toggleMenu}
            >
              Contacts
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300"></span>
            </Link>




          </div>
        </nav>
      </header>

      <div className="flex flex-1 flex-col sm:flex-row justify-between items-center p-8">
        <div className="w-full sm:w-1/2 flex flex-col items-start justify-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-teal-400 animate-pulse">
            Hi, I'm Tarun Kale
          </h1>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "JavaScript and React.js Specialist",
              2000,
              "UI Designer",
              2000,
              "Prompt Engineering",
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-green-300"
          />
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/tarunkumarkale" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-green-400" />
            </a>
            <a href="https://www.linkedin.com/in/webdev-tarunkale" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-green-400" />
            </a>
            <a href="https://twitter.com/TarunKale255963" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-green-400" />
            </a>
            <a href="mailto:tarunkale01@gmail.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-green-400" />
            </a>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20 rounded-full blur-xl animate-spin-slow"></div>
          <img
            src={myphoto}
            alt="Your Image"
            className="relative w-[65%] h-auto rounded-full shadow-2xl z-10"
          />
          <a 
            href="/resume.pdf"  // Link to your resume file in the public folder
            download
            className="absolute bottom-1 left-0 sm:bottom-7 sm:left-6 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-200 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faDownload} className='md:text-3xl text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroHeader);
