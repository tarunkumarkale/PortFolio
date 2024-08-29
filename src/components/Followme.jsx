


import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';

const FollowMe = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black text-white" id="followme">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-4 md:mb-0">
          Follow Me
        </h2>
        <div className="flex space-x-6">
          <a href="https://github.com/tarunkumarkale" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/webdev-tarunkale" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com/TarunKale255963" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors">
            <FaTwitter size={32} />
          </a>
          <a href="https://medium.com/me/settings/account" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors">
            <FaMedium size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;

