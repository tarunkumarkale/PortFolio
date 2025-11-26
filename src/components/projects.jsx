import React, { useEffect, memo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";
import Smartwatch from "../assets/Smartwatch.gif"
import ebike from "../assets/ebike.gif"
import nike from "../assets/nike.gif"
import Bank from "../assets/Bank.png"
import Hr from "../assets/Hr.png"
import taxi from "../assets/taxi.png"


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
            src={Bank}
            alt="Project 1"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">Banking Risk Analytics</h3>
          <p className="text-gray-300 mb-4">Python, SQL, and Power BI–based analysis of 5,000+ customer financial profiles to detect high-risk behaviors. Includes segmentation, risk scoring, correlation patterns, and DAX-driven KPIs for business lending insights.</p>
          
          <div className="flex justify-between">
            <a href=" https://app.powerbi.com/links/ixkueHcmlX?ctid=962d9dfe-0c81-4f7f-bef0-67dcd877e3c8&pbi_source=linkShare" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
              View DashBoard
            </a>
            <a href="https://github.com/tarunkkale/Risk-Analytics-in-Banking-.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              View Project
            </a>
          </div>
        </div>
        {/* Top Project 2 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={taxi}
            alt="Project 2"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">NYC Taxi Revenue Optimization</h3>
          <p className="text-gray-300 mb-4">Analyzed 500,000+ NYC taxi trip records using Python and SQL. Performed hypothesis testing, outlier treatment, correlation analysis (r = 0.67), and revenue pattern modeling to increase average driver earnings.</p>
        
          <div className="flex justify-between">
            <a href="https://app.powerbi.com/links/b2kB84SgyC?ctid=962d9dfe-0c81-4f7f-bef0-67dcd877e3c8&pbi_source=linkShare" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
          
            </a>
            <a href="https://github.com/tarunkkale/Maximizing-Revenue-for-Taxi-Cab-Drivers-through-Payment-Type-Analysis.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
               View Project
            </a>
          </div>
        </div>
        {/* Top Project 3 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={Hr}
            alt="Smartwatch"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">
HR-ANALYTICS-DASHBOARD</h3>
          <p className="text-gray-300 mb-4">Created a Power BI dashboard with 15+ HR KPIs. Built age and salary bands, identified key attrition drivers, and improved insight clarity by 30%. Helps HR teams make data-driven retention decisions. </p>
     
          <div className="flex justify-between">
            <a href="https://app.powerbi.com/links/b2kB84SgyC?ctid=962d9dfe-0c81-4f7f-bef0-67dcd877e3c8&pbi_source=linkShare" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
              View Dashboard
            </a>
            <a href="https://github.com/tarunkkale/HR-ANALYTICS-DASHBOARD.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
              View Project
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-300 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
      Other Technical Projects (Frontend)
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
            <h4 className="text-2xl font-semibold mb-2 text-green-400 ">Ebike website  </h4>
            <p className="text-gray-300 mb-4">E-Bike website built using React.js, JavaScript, and Tailwind CSS, where users can browse, buy, or rent regular and electric bicycles.</p>
            <a 
              href="https://tarunkumarkale.github.io/EBikes/" 
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
            <h4 className="text-2xl font-semibold mb-2 text-green-400">Nike Shoes website</h4>
            <p className="text-gray-300 mb-4">.NIke shoes website built using React.js, JavaScript, and Tailwind CSS, where users can browse, buy,branded shoes  </p>
            <a 
              href="https://tarunkumarkale.github.io/Nike/" 
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
