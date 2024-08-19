import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';

const FollowMe = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black text-white" id="followme">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
          Follow Me
        </h2>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaTwitter size={32} />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
            <FaMedium size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
