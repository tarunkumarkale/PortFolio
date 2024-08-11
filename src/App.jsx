import React from 'react';

import HeroHeader from './components/HeroHeader';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/contact';
import SkillSection from './components/Skill'
import './index.css'

function App() {
  return (
    <div>
      <HeroHeader />
      <About />
      <SkillSection/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
