import React from 'react';
import '../styles/navbar.scss'

const Themes = function() {
  return (
    <nav className="themes">
      <img src="images/generic-coding.jpg" alt="generic depiction of coding"></img>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Posts</li>
      </ul>
    </nav>
  )
}

export default Themes;