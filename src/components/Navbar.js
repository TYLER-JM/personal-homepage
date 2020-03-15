import React from 'react';

const Navbar = (props) => {
 
  return (
    <nav className="menu" id="menu">
      <img className="hero" src="images/logo.png" alt="a logo depicting a guitar player"></img>
      <ul>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>About</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Projects</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Skills</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;