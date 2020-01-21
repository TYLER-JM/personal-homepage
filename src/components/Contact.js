import React from 'react';
import '../styles/section.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = function() {
  return (
    <article className="section contact" id="contact">
      <h3>Check back soon, and watch the evolution.</h3>
        <a className="social" href="https://github.com/TYLER-JM" target="blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="social" href="https://www.linkedin.com/in/tyler-martin-670020198/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
    </article>
  )
}

export default Contact;