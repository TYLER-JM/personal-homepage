import React from 'react';
import generateID from '../Helpers/generateId';

const About = function() {

  let classes = 'section about'
  return (
    <article className={classes} id="about">
      <div className="about__container">
        <div className="hero">
          <img src="images/logo.png" alt="a logo depicting a guitar player"></img>
          <h1 className="name name__first" key={generateID(8)}> Tyler</h1>
          <h1 className="name" key={generateID(8)}>Martin</h1>
        </div>
        <p className="bio">
          Hello visitor. I am a full-stack developer, and a Robertson Davies aficionado, I have a perfectly healthy love for board and card games.
        </p>
        <p className="bio">
          I'm currently working at <a href="https://getguild.co/" target="blank"><span>Guild</span></a> using Laravel, jQuery, and VueJS. 
        </p>
      </div>
    </article>
  );
}

export default About