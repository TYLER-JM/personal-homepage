import React from 'react';

const LinkItem = function({title, desc, url}) {
  return (
      <a href={url} target="blank">
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </a>
  )
}

export default LinkItem;