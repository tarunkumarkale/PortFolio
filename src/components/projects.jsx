// // import React, { useEffect, memo } from 'react';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';
// // import project1 from "../assets/project1.png";
// // import project2 from "../assets/project2.png";
// // import project3 from "../assets/project3.png";

// // const Projects = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 2000 });
// //   }, []);

// //   return (
// //     <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black" id="projects">
// //       <div className='relative text-center mb-8'>
// //         <h2 
// //           className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-8 transition-transform transform hover:scale-110 inline-block" 
// //           data-aos="fade-up"
// //           data-aos-duration="1000"
// //         >
// //           My Projects
// //         </h2>
// //         <span 
// //           className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"
// //           data-aos="fade-up"
// //           data-aos-delay="200"
// //         ></span>
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {/* Top Project 1 */}
// //         <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
// //           <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
// //           <img
// //             src={project1}
// //             alt="Project 1"
// //             className="w-full h-40 object-cover rounded-lg mb-4"
// //           />
// //           <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 1</h3>
// //           <p className="text-gray-300 mb-4">Brief description of Project 1, highlighting key features and technologies used.</p>
// //           <a href="https://project1-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
// //             View Project
// //           </a>
// //         </div>
// //         {/* Top Project 2 */}
// //         <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
// //           <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
// //           <img
// //             src={project2}
// //             alt="Project 2"
// //             className="w-full h-40 object-cover rounded-lg mb-4"
// //           />
// //           <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 2</h3>
// //           <p className="text-gray-300 mb-4">Brief description of Project 2, highlighting key features and technologies used.</p>
// //           <a href="https://project2-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
// //             View Project
// //           </a>
// //         </div>
// //         {/* Top Project 3 */}
// //         <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
// //           <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
// //           <img
// //             src={project3}
// //             alt="Project 3"
// //             className="w-full h-40 object-cover rounded-lg mb-4"
// //           />
// //           <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 3</h3>
// //           <p className="text-gray-300 mb-4">Brief description of Project 3, highlighting key features and technologies used.</p>
// //           <a href="https://project3-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
// //             View Project
// //           </a>
// //         </div>
// //       </div>
// //       <div className="mt-8 text-center text-gray-300">
// //         <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
// //           Other Projects
// //         </h3>
// //         <p>In addition to the top projects highlighted above, I have worked on various other projects including:</p>
// //         <ul className="list-disc list-inside mt-4">
// //           <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">Project 4 - Brief description or technology used</li>
// //           <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">Project 5 - Brief description or technology used</li>
// //           <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">Project 6 - Brief description or technology used</li>
// //           {/* Add more as needed */}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default memo(Projects);



// import React, { useEffect, memo } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);

//   return (
//     <div className="p-8 bg-gradient-to-b from-green-900 via-gray-900 to-black text-white" id="projects">
//       <div className='relative text-center mb-8'>
//         <h2 
//           className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-8 transition-transform transform hover:scale-110 inline-block" 
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           My Projects
//         </h2>
//         <span 
//           className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-all duration-300 hover:w-full"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         ></span>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Top Project 1 */}
//         <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
//           <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
//           <img
//             src={project1}
//             alt="Project 1"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 1</h3>
//           <p className="text-gray-300 mb-4">Brief description of Project 1, highlighting key features and technologies used.</p>
//           <a href="https://project1-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
//             View Project
//           </a>
//         </div>
//         {/* Top Project 2 */}
//         <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
//           <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
//           <img
//             src={project2}
//             alt="Project 2"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 2</h3>
//           <p className="text-gray-300 mb-4">Brief description of Project 2, highlighting key features and technologies used.</p>
//           <a href="https://project2-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
//             View Project
//           </a>
//         </div>
//         {/* Top Project 3 */}
//         <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50">
//           <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
//           <img
//             src={project3}
//             alt="Project 3"
//             className="w-full h-40 object-cover rounded-lg mb-4"
//           />
//           <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 3</h3>
//           <p className="text-gray-300 mb-4">Brief description of Project 3, highlighting key features and technologies used.</p>
//           <a href="https://project3-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
//             View Project
//           </a>
//         </div>
//       </div>
//       <div className="mt-8 text-center text-gray-300 bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
//           Other Projects
//         </h3>
//         <p>In addition to the top projects highlighted above, I have worked on various other projects including:</p>
//         <ul className="list-disc list-inside mt-4">
//           <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">Project 4 - Brief description or technology used</li>
//           <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">Project 5 - Brief description or technology used</li>
//           <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">Project 6 - Brief description or technology used</li>
//           {/* Add more as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default memo(Projects);


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
      <div className='relative text-center mb-8' data-aos="fade-up">
        <h2 
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 mb-8 transition-transform transform hover:scale-110 inline-block"
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
        {/* Project 1 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-green-500/50" data-aos="fade-up">





<div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>


<img
  src={project1}
  alt="Project 1"
  className="w-full h-40 object-cover rounded-lg mb-4 relative z-20 transition-transform duration-300 ease-in-out hover:scale-105"
/>

<h3 className="text-2xl font-semibold mb-2 text-white relative z-20">Bike Platform        <span className='text-xl font-semibold mb-2 text-green-400 relative z-20'> (Still updating)  </span></h3>


<p className="text-gray-300 mb-4 relative z-20">
  A React.js app for buying, renting, and managing bikes with Firebase integration.
</p>


<div className="relative z-20">
  <a href="https://project1-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition-colors duration-300 ease-in-out block mb-2">
    View Project
  </a>
  <a href="https://project1-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition-colors duration-300 ease-in-out block">
    Source Code
  </a>
</div>
</div>


        {/* Project 2 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50" data-aos="fade-up">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={project2}
            alt="Project 2"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 2</h3>
          <p className="text-gray-300 mb-4">Brief description of Project 2, highlighting key features and technologies used.</p>
          <a href="https://project2-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
            View Project
          </a>
        </div>
        {/* Project 3 */}
        <div className="relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-green-500/50" data-aos="fade-up">
          <div className="absolute inset-0 transform translate-y-3 translate-x-3 w-1/3 h-1/2 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 opacity-20"></div>
          <img
            src={project3}
            alt="Project 3"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2 text-white">Project Title 3</h3>
          <p className="text-gray-300 mb-4">Brief description of Project 3, highlighting key features and technologies used.</p>
          <a href="https://project3-link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500">
            View Project
          </a>
        </div>
      </div>
      <div className="mt-12 text-center" data-aos="fade-up">
  <h3 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500">
    Explore More Projects
  </h3>
  <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
    Beyond the featured projects, I've also delved into other exciting ventures, each showcasing unique technologies and creativity.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition-transform hover:scale-105"
      data-aos="zoom-in"
    >
      <h4 className="text-2xl font-semibold mb-2 text-green-400">Project 4</h4>
      <p className="text-gray-300 mb-4">A brief overview of the project, highlighting the technologies used and key features.</p>
      <a 
        href="#project4" 
        className="text-teal-400 hover:text-teal-500 transition-colors"
      >
        Learn More
      </a>
    </div>
    <div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition-transform hover:scale-105"
      data-aos="zoom-in"
    >
      <h4 className="text-2xl font-semibold mb-2 text-green-400">Project 5</h4>
      <p className="text-gray-300 mb-4">A brief overview of the project, highlighting the technologies used and key features.</p>
      <a 
        href="#project5" 
        className="text-teal-400 hover:text-teal-500 transition-colors"
      >
        Learn More
      </a>
    </div>
    <div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition-transform hover:scale-105"
      data-aos="zoom-in"
    >
      <h4 className="text-2xl font-semibold mb-2 text-green-400">Project 6</h4>
      <p className="text-gray-300 mb-4">A brief overview of the project, highlighting the technologies used and key features.</p>
      <a 
        href="#project6" 
        className="text-teal-400 hover:text-teal-500 transition-colors"
      >
        Learn More
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default memo(Projects);
