import React, { useState, useRef, useEffect } from 'react';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';

function App() {
return (
    <div className='w-[100%]'>
      {/* <NavbarV2 onRefChange={setSectionRefs} /> */}
      <div id="home" className='scroll-mt-[10vh]'>
        <Home />
      </div>

      <div id="skills-projects" className='scroll-mt-[10vh]'>
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>  
      
    </div>
  );
}

export default App;
