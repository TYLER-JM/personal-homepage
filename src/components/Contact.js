import React from 'react';
import '../styles/section.scss';

const Contact = function() {
  return (
    <article className="section contact" id="contact">
      <p>Call Me: <span>555.555.5555</span></p>
      <p>Email Me: <span>email.email.ca</span></p>
      <p>Github: <span><i class="fab fa-github"></i></span></p>
      <p>LinkedIn: <span>logo</span></p>
    </article>
  )
}

export default Contact;