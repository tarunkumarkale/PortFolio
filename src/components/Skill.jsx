import React, { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const skills = [
  {
    category: "Front-end Development",
    items: ["JavaScript", "React.js", "CSS", "HTML"]
  },
  {
    category: "UI Design",
    items: ["UI Design", "Responsive Design", "Figma (Basic)"]
  },
  {
    category: "CSS Frameworks",
    items: ["Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Development Tools",
    items: ["Git", "Vite.js", "Redux", "Firebase"]
  },
  {
    category: "Backend Development",
    items: ["MongoDB (Basic)", "REST API (Basic)"]
  },
  {
    category: "Open Source Contribution",
    items: [
      "Seeking New Problems",
      "Solved 2-3 Non-Tech Problems",
      "Contributed to 9 Issues",
      "Submitted 10 Pull Requests (PRs)"
    ]
  },
  {
    category: "Project Management",
    items: ["Innovative Project Creation", "Task Management", "Agile Methodologies"]
  }
];

const SkillSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Re-initialize AOS on component mount
  }, []);

  return (
    <section id="skills" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400" data-aos="fade-up">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-green-900 p-6 rounded-lg shadow-lg border border-green-600 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 100}>
                {skill.category}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative before:absolute before:-left-6 before:text-green-400 before:content-['•']"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 200}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-900 opacity-30"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillSection);
