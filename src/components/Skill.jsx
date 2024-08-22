

import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icon imports
import { FaCode, FaPencilRuler, FaCss3Alt, FaTools, FaDatabase, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si'; // Example icon, replace with one that fits your needs.



const skills = [
  {
    category: "Front-end Development",
    icon: <FaCode />,
    items: ["JavaScript", "React.js", "CSS", "HTML"]
  },
  {
    category: "UI Design",
    icon: <FaPencilRuler />,
    items: ["UI Design", "Responsive Design", "Figma (Basic)"]
  },
  {
    category: "CSS Frameworks",
    icon: <FaCss3Alt />,
    items: ["Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Development Tools",
    icon: <FaTools />,
    items: ["Git", "Vite.js", "Redux", "Firebase"]
  },
  {
    category: "AI Tools and Technologies",
    icon: <SiOpenai />,
    items: ["Prompt Engineering", "LinkedIn Optimization"]
  },
  {
    category: "Backend Development",
    icon: <FaDatabase />,
    items: ["MongoDB (Basic)", "REST API (Basic)"]
  },
  {
    category: "Open Source Contribution",
    icon: <FaLightbulb />,
    items: [
      "Seeking New Problems",
      "Solved 2-3 Non-Tech Problems",
      "Contributed to 9 Issues",
      "Submitted 10 Pull Requests (PRs)"
    ]
  },
  {
    category: "Project Management",
    icon: <FaProjectDiagram />,
    items: ["Innovative Project Creation", "Task Management", "Agile Methodologies"]
  }
];


const SkillSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="skills" className="p-8 bg-gradient-to-t from-green-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition-transform transform hover:scale-110 inline-block">     
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-b from-green-700 via-gray-800 to-black p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 flex items-center space-x-2">
                {skill.icon}
                <span>{skill.category}</span>
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-green-300 relative before:absolute before:-left-6 before:text-green-400 before:content-['•']"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 200}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-30"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(SkillSection);
