import React from 'react';
import '../styles/section.scss';

const Contact = function() {
  return (
    <article className="section contact" id="contact">
      <h3>Check back soon, and watch the evolution.</h3>
      <p>
        <a href="https://github.com/TYLER-JM" target="blank">
          <img src="images/github-48.png" alt="GitHub logo"/>
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/tyler-martin-670020198/" target="blank">
          <img src="images/linkedin-50.png" alt="Linked in logo"/>
        </a>
      </p>
    </article>
  )
}

export default Contact;