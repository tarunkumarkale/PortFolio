import React, { useEffect, memo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black text-white" id="projects">
      <div className='relative text-center mb-8'>
        <h2 
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-8 transition-transform transform hover:scale-110 inline-block" 
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Projects
        </h2>
        <span 
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        ></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Top Project 1 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={project1}
            alt="Project 1"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">Bike</h3>
          <p className="text-gray-300 mb-4">A React.js app for buying, renting, and managing bikes with Firebase integration.</p>
          <p className="text-yellow-400 mb-4">Still Updating...</p>
          <div className="flex justify-between">
            <a href=" https://tarunkumarkale.github.io/EBikes/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
              View Project
            </a>
            <a href="https://github.com/tarunkumarkale/EBikes" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              View Source Code
            </a>
          </div>
        </div>
        {/* Top Project 2 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={project2}
            alt="Project 2"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">Nike Shoes</h3>
          <p className="text-gray-300 mb-4">React + Tailwind single-page app for browsing and buying Nike shoes. Features real-time search and pop-up details.</p>
          <p className="text-yellow-400 mb-4">Still Updating...</p>
          <div className="flex justify-between">
            <a href=" https://tarunkumarkale.github.io/Nike/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
              View Project
            </a>
            <a href="https://github.com/tarunkumarkale/Nike" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              View Source Code
            </a>
          </div>
        </div>
        {/* Top Project 3 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={project3}
            alt="Project 3"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">GitHub Search Profile</h3>
          <p className="text-gray-300 mb-4">A tool to search GitHub profiles using JavaScript. Features include user info and repository display.</p>
          <p className="text-yellow-400 mb-4">Still Updating...</p>
          <div className="flex justify-between">
            <a href="https://tarunkumarkale.github.io/Search-Github-Profile/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
              View Project
            </a>
            <a href="https://github.com/tarunkumarkale/Search-Github-Profile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              View Source Code
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-300 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
          Other Projects
        </h3>
        <p>In addition to the top projects highlighted above, I have worked on various other projects including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className="bg-gray-800 p-6 rounded-lg shadow-2xl hover:bg-gray-700 transform transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            <h4 className="text-2xl font-semibold mb-2 text-green-400">Quiz App</h4>
            <p className="text-gray-300 mb-4">Simple quiz app built with HTML, CSS, and JavaScript.</p>
            <a 
              href=" https://tarunkumarkale.github.io/Quizapp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-500 transition-colors"
            >
              View Project
            </a>
          </div>
          <div 
            className="bg-gray-800 p-6 rounded-lg shadow-2xl hover:bg-gray-700 transform transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            <h4 className="text-2xl font-semibold mb-2 text-green-400 ">netflix Webpage Design (still updating) </h4>
            <p className="text-gray-300 mb-4">Stylish webpage design for netflix page using HTML, tailwind, and JavaScript.</p>
            <a 
              href="https://tarunkumarkale.github.io/NETFLIX-UI/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-500 transition-colors"
            >
              View Project
            </a>
          </div>
          <div 
            className="bg-gray-800 p-6 rounded-lg shadow-2xl hover:bg-gray-700 transform transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            <h4 className="text-2xl font-semibold mb-2 text-green-400">Music Player</h4>
            <p className="text-gray-300 mb-4">Interactive music player interface with controls, progress bar, and navigation icons.</p>
            <a 
              href="https://tarunkumarkale.github.io/Music-player/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-500 transition-colors"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="mt-6">
          <a 
            href="https://github.com/tarunkumarkale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-500 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-6a4 4 0 0 0-8 0v6"></path><path d="M12 4v4"></path><path d="M12 20v2"></path></svg>
            More Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Projects);
