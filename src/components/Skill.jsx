

import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icon imports
import { FaCode, FaPencilRuler, FaCss3Alt, FaTools, FaDatabase, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si'; // Example icon, replace with one that fits your needs.



const skills = [
  {
    category: "Python Skills",
    icon: <FaCode />,
    items:[
  "Python",
  "Pandas",
  "NumPy",
  "SciPy",
  "Matplotlib",
  "Seaborn",
  "Feature Engineering"
]
  },
  {
    category: "SQL Skills",
    icon: <FaPencilRuler />,
    items:  [
  "SQL",
  "MySQL",
  "SQL Server",
  "Joins",
  "CTEs",
  "Subqueries",
  "Aggregations",
  "Window Functions",
  "Lookups"
]
  },
  {
    category: "Business Intelligence Tools",
    icon: <FaCss3Alt />,
    items:[
  "Power BI",
  "DAX",
  "Power Query",
  "Data Modeling",
  "Dashboarding",
  "Power BI Service",
  "Reporting Automation"
]
  },
  {
    category: "Excel Analytic Skills",
    icon: <FaTools />,
    items:[
  "Excel",
  "Power Query (Excel)",
  "Pivot Tables",
  "Excel Dashboarding",
  "Data Cleaning"
]
  },
  {
    category: "Data Analytics Techniques",
    icon: <SiOpenai />,
    items:  [
  "Exploratory Data Analysis (EDA)",
  "Statistical Analysis",
  "Hypothesis Testing",
  "Correlation Analysis",
  "Segmentation",
  "KPI Development",
  "Data Storytelling"
]
  },
  {
    category: "ETL, Validation & Workflow",
    icon: <FaDatabase />,
    items:  ["ETL",
  "Workflow Optimization",
  "Data Validation",
  "Data Wrangling",
  "RLS (Row Level Security)"]
  },
  {
    category: "Tools & Platforms",
    icon: <FaLightbulb />,
    items: [
  "REST APIs",
  "Firebase (Data Flow Understanding)",
  "Git & GitHub",
  "Power Automate",
  "Tableau (Basics)"
]
  },
  {
    category: "AI / Soft-Tech Skills",
    icon: <FaProjectDiagram />,
    items: [
  "Prompt Engineering",
  "LinkedIn Optimization"
]
  },
  {
    category: "Additional Tech Skills (Frontend Skills)",
    icon: <FaProjectDiagram />,
    items: [
  "JavaScript",
  "React.js",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "API Integration",
  "Angular (Basics)",
  "Git & GitHub",
  "Vite.js",
  "UI Debugging",
  "Component Testing"
]
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
