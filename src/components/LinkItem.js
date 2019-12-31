import React from 'react';
import '../styles/links.scss';

const LinkItem = function({title, desc, url}) {
  return (
    <article className="link">
      <a href={url} target="blank">
      <h2>{title}</h2>
      <p>{desc}</p>
      </a>
    </article>
  )
}

export default LinkItem;