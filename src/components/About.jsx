import React, { useEffect, memo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { About } from '../Constant/Index';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-8 bg-black" id="aboutme">
      <h2 className="text-5xl font-bold  mb-0  lg:mb-[-2%] text-green-500 text-center ">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-full md:w-1/3 mb-8 md:mb-0">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-3/5 rounded-lg"></div>
          <img
            src={About}
            alt="Animated Laptop"
            className="relative z-10 w-full h-auto rounded-full shadow-lg"
          />
        </div>
        <div 
          className="w-full md:w-2/3 md:ml-8 text-white" 
          data-aos="fade-left"
        >
          <p className="text-lg mb-4 text-green-400 leading-relaxed">
            I'm Tarun Kale, a seasoned front-end developer with a strong focus on creating intuitive and engaging user interfaces. With extensive experience in JavaScript, React, HTML, and CSS, I have successfully completed over 20 personal projects, including the notable Bicycle Project. My journey began with a comprehensive internship at Tek Analytix in Pune, where I gained valuable insights and honed my skills. Despite lacking a certificate, I possess an offer letter as proof of this enriching experience.
          </p>
          <p className="text-lg mb-4 text-green-400 leading-relaxed">
            Currently, I am advancing my expertise through be10X, delving into AI tools and prompt engineering to stay at the forefront of web development trends. I showcase my latest projects on GitHub and actively engage with the developer community on LinkedIn, demonstrating my commitment to continuous learning and professional growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutMe);
