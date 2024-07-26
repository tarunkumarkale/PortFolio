import React, { useState } from 'react';
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
      <header className="w-full flex flex-wrap md:flex-nowrap p-4">
        <div className="w-full md:w-3/5 flex justify-between items-center">
          <div className="text-xl font-bold text-green-600">My Portfolio</div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:w-2/5 bg-black p-4 md:flex md:items-center md:justify-center`}>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
          </nav>
        </div>
      </header>

      <div className="flex flex-1 flex-col sm:flex-row justify-between items-center p-11 mt-[-2rem] sm:mt-[-4rem]">
        <div className="w-full sm:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl mb-4 md:mb-6 font-bold text-green-400">
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
            className="text-2xl md:text-4xl mb-4 md:mb-6 text-green-300"
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
        <div className="w-full sm:w-1/2 flex items-center justify-center relative overflow-hidden">
          <img
            src={myphoto}
            alt="Your Image"
            className="w-[60%] h-auto rounded-full relative z-10 shadow-2xl mb-11"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
