import React from 'react';
import generateID from '../Helpers/generateId';

const About = function() {

  let classes = 'section about'
  return (
    <article className={classes} id="about">
      <div className="about__container">
        <div className="hero">
          <h1 className="name name__first" key={generateID(8)}> Tyler</h1>
          <img src="images/logo.png" alt="a logo depicting a guitar player"></img>
          <h1 className="name" key={generateID(8)}>Martin</h1>
        </div>
        <p className="bio">
          Hello <span role='img' aria-label='waving-hand'>👋</span>. I am a web developer, and a Robertson Davies aficionado. I have a perfectly healthy love for board and card games.
        </p>
        <p className="bio">
          I'm working at <a href="https://www.aylo.com/" target="blank"><span>Aylo</span></a> as a Front End Developer. I use StimulusJS, Bootstrap, and Sass to create maintainable user interfaces. 
        </p>
      </div>
    </article>
  );
}

export default About