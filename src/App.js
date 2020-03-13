import React from 'react';
import Navbar from './components/Navbar'; 
import Backdrop from './components/Backdrop';
import Contact from './components/Contact';
import Projects from './components/projects/Projects';
import About from './components/About';
import Posts from './components/Posts';
import './styles/home.scss';
import Skills from './components/Skills';

function App() {
  return (
    <div className="container">
      <Backdrop />
      <Navbar />
      <About />
      <Projects />
      <Posts />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
