
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
        <h2 
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-8 transition-transform transform hover:scale-110 inline-block" 
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Me
        </h2>
        <span 
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        ></span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-full md:w-1/3 mb-8 md:mb-0">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-3/5 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={About}
            alt="my pic"
            className="relative z-10 w-full h-auto rounded-full shadow-2xl"
          />
        </div>
        <div 
          className="w-full md:w-2/3 md:ml-8 text-white" 
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-lg mb-4 text-green-300 leading-relaxed" data-aos="fade-up">
I’m Tarun Kale, a Certified Data Analyst and Business Analyst skilled in Python, SQL, Excel, Power BI, and Data Visualization. I hold professional certifications from Microsoft, IBM, and Naresh IT, where I completed hands-on training in analytics, BI reporting, and real-world project workflows.

I have worked on projects in Banking Risk Analytics, Revenue Optimization, HR Insights, and Retail Dashboards, focusing on data cleaning, feature engineering, pattern analysis, and building interactive dashboards
          </p>
          <p className="text-lg mb-4 text-green-300 leading-relaxed" data-aos="fade-up">
        I also completed a frontend trainee role at Tek Analytix, Pune, where I worked with React, JavaScript, CSS, Bootstrap, Tailwind, and Angular. During this training, I gained practical exposure to UI development, debugging, API integration, and component testing. This experience helped me build strong problem-solving skills and improved my understanding of how applications handle data and user interactions.
Currently, I am working on an in-depth Banking Risk Analytics project, analyzing customer behavior, financial indicators, and risk patterns to identify high-risk segments and improve lending decisions.

I actively share my projects on GitHub and stay engaged with the data community on LinkedIn as part of my continuous growth in Data Analytics.
          </p>
          <div className="text-center mt-8">
            <a 
              href="https://www.linkedin.com/in/webdev-tarunkale/details/certifications/" 
              className="inline-block bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105 mx-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Check All My Certificates
            </a>
            <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=tarunkale01@gmail.com" 
  target="_blank" 
              className="inline-block bg-gradient-to-r mt-2 from-green-400 via-teal-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105 mx-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutMe);
