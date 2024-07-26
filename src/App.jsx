import React from 'react';

import HeroHeader from './components/HeroHeader';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/contact';
import './index.css'
function App() {
  return (
    <div>
   
      <HeroHeader />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
