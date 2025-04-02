import React from 'react';

import HeroHeader from './components/HeroHeader';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/contact';
import SkillSection from './components/Skill'
import './index.css'
import Foooter from './components/Footer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeroHeader />
      <About />
      <SkillSection/>
      <Projects />
      <Contact />
      <Footer/>
    
    </div>
  );
}

export default App;
