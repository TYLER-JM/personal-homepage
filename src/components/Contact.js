import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = function() {
  return (
    <article className="section contact" id="contact">
      <div className="contact__container">
        <div className='contact__social'>
          <a className="social github" href="https://github.com/TYLER-JM" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="social linkedin" href="https://www.linkedin.com/in/tyler-martin-670020198/" target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="social mail" href="mailto:tyler.j.a.martin@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p>I'm always happy to chat about what I'm working on, what I'm reading, what I'm playing, or what I'm listening to.</p>
      </div>
    </article>
  )
}

export default Contact;