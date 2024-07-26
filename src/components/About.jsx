import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { About } from '../Constant/Index';


const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8"  id="aboutme">
      <div 
        className="relative w-full md:w-1/3 mb-8 md:mb-0" 
        data-aos="fade-right"
      >
        <div className="bg-green-500 absolute inset-0 transform translate-y-1/4 translate-x-1/4 w-2/5 h-4/5"></div>
        <img
          src={About}
          alt="Animated Laptop"
          className="relative z-10 w-full h-auto object-cover"
        />
      </div>
      <div 
        className="w-full md:w-2/3 md:ml-8" 
        data-aos="fade-left"
      >
        <h2 className="text-2xl font-bold mb-4 text-green-500">About Me</h2>
        <p className="text-lg text-green-500">
          I'm Tarun Kale, a seasoned front-end developer specializing in creating intuitive and engaging user interfaces. With extensive experience in JavaScript, React, HTML, and CSS, I have completed 20 personal projects ranging from basic to small, including the Bicycle Project. My expertise is demonstrated through hands-on experience and continuous learning.
        </p>
        <p className="text-lg text-green-500">
          Currently, I am learning from BE 10X, where I explore different types of AI tools and prompt engineering, enhancing my skills and knowledge in the latest technologies and best practices in web development. I host all my latest projects on GitHub and actively share the links to these projects on LinkedIn to showcase my work and engage with the community.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
