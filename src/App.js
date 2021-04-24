import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import Contact from './components/Contact';
import Projects from './components/projects/Projects';
import About from './components/About';
// import Skills from './components/Skills';

function App() {

  const [view, setView] = useState('About')

  return (
    <div className="container">
      <Navbar setView={setView}/>
      { view === 'About' && <About /> }
      { view === 'Projects' && <Projects /> }
      { view === 'Contact' && <Contact /> }
    </div>
  )
}

export default App;
