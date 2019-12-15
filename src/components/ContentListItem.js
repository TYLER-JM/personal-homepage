import React from 'react';
import '../styles/contentListItem.scss';
// import classNames from 'classnames';

export default function({ name, animateMenu }) {
  return (
    <div className="content-item" onClick={(e) => animateMenu(e)}><p>{name}</p></div>
  )
}