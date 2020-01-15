import React from 'react';
import generateID from '../Helpers/generateId';
import { CSSTransitionGroup } from 'react-transition-group';

const About = function() {
  return (
    <article className="section about" id="about">
      <p className="bio">Welcome, I am a full-stack developer, and a Robertson Davies aficionado. I have a perfectly healthy love for board and card games.</p>
      <CSSTransitionGroup
        transitionName="slide"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <h1 className="name" key={generateID(8)}>Tyler</h1>
        <h1 className="name" key={generateID(8)}>Martin</h1>
      </CSSTransitionGroup>
      {/* <h1 className="name first">Tyler</h1>
      <h1 className="name last">Martin</h1> */}
      </article>
  );
}

export default About