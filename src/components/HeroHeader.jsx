import React, { useState, memo } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { myphoto } from '../Constant/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeroHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-screen flex flex-col bg-black text-white">
      <header className="w-full flex flex-wrap md:flex-nowrap p-4 items-center justify-between">
        <div className="text-2xl font-bold text-green-600">My Portfolio</div>
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
              className="cursor-pointer text-xl font-bold text-green-600 transition-colors hover:text-green-400"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-xl font-bold text-green-600 transition-colors hover:text-green-400"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-xl font-bold text-green-600 transition-colors hover:text-green-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <div className="flex flex-1 flex-col sm:flex-row justify-between items-center p-8">
        <div className="w-full sm:w-1/2 flex flex-col items-start justify-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 animate-bounce">
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
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-4xl text-green-300"
          />
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-green-400" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-green-400" />
            </a>
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-green-400" />
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-green-400" />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-center relative">
          <img
            src={myphoto}
            alt="Your Image"
            className="relative w-[60%] h-auto rounded-full shadow-2xl z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(HeroHeader);
