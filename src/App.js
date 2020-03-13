import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
// import Backdrop from './components/Backdrop';
import Contact from './components/Contact';
import Projects from './components/projects/Projects';
import About from './components/About';
import Posts from './components/Posts';
import './styles/app.scss';
import Skills from './components/Skills';

function App() {

  const [view, setView] = useState('About')

  return (
    <div className="container">
      {/*<Backdrop />*/}
      <Navbar setView={setView}/>
      { view === 'About' && <About /> }
      { view === 'Projects' && <Projects /> }
      { view === 'Posts' && <Posts /> }
      { view === 'Skills' && <Skills /> }
      { view === 'Contact' && <Contact /> }
    </div>
  )
}

export default App;
