import React, { useEffect } from 'react';
import generateID from '../Helpers/generateId';

const About = function() {

  let classes = 'section about'
  useEffect(() => {
    return () => {
      console.log('im affecting change');
    }
  }, [])

  return (
    <article className={classes} id="about">
      <div className="about__container">
        <h1 className="name" key={generateID(8)}>Tyler</h1>
        <h1 className="name" key={generateID(8)}>Martin</h1>
        <p className="bio">
        Hello visitor. I am a full-stack developer, and a Robertson Davies aficionado. I have a perfectly healthy love for board and card games.
        </p>
      </div>
    </article>
  );
}

export default About