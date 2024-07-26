import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { myphoto } from '../Constant/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col sm:flex-row justify-between ">
      <div className="w-full sm:w-1/2 bg-black text-white flex flex-col items-start justify-center p-11 ">
        <h1 className="text-3xl md:text-5xl mb-4 md:mb-6 font-bold text-green-600">
          Hi, I'm Tarun Kale
        </h1>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000, // Waits 1s
            "JavaScript and React.js Specialist",
            1000, // Waits 1s
            "UI Designer",
            1000, // Waits 1s
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-2xl md:text-4xl mb-4 md:mb-6 text-green-500"
        />
        <div className="flex space-x-4 mt-3 gap-3 justify-center items-center">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-green-600">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-green-600">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="text-green-600">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="text-green-600">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 bg-black flex items-center justify-center ">
        {/* Image Container */}
        <div className="flex items-center justify-center ">
          <img
            src={myphoto}
            alt="Your Image"
            className="w-full h-auto rounded-full mt-[-15%]  md:mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
