import React, { useEffect, memo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { About } from '../Constant/Index';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black" id="aboutme">
      <div className='relative text-center'>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-8 transition-transform transform hover:scale-110 inline-block">
          About Me
        </h2>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"></span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-full md:w-1/3 mb-8 md:mb-0">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-3/5 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={About}
            alt="Animated Laptop"
            className="relative z-10 w-full h-auto rounded-full shadow-2xl"
          />
        </div>
        <div 
          className="w-full md:w-2/3 md:ml-8 text-white" 
          data-aos="fade-left"
        >
          <p className="text-lg mb-4 text-green-300 leading-relaxed">
            I am a passionate Frontend Developer with hands-on experience in JavaScript, React.js, HTML5, and CSS3. At Tek Analytix, I honed my skills by building responsive, user-centric web applications that significantly enhanced user engagement and reduced bounce rates. With over 20 personal projects, including a successful e-commerce platform and a dynamic UI showcase, I excel in translating complex requirements into sleek, intuitive designs. Continuously learning and adapting, I'm currently expanding my expertise in AI tools and prompt engineering. My focus is on delivering innovative solutions that align with the latest industry trends.
          </p>
          <p className="text-lg mb-4 text-green-300 leading-relaxed">
            Currently, I am advancing my expertise through be10X, delving into AI tools and prompt engineering to stay at the forefront of web development trends. I showcase my latest projects on GitHub and actively engage with the developer community on LinkedIn, demonstrating my commitment to continuous learning and professional growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutMe);
