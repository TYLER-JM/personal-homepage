import React from 'react';
import '../styles/contentListItem.scss';
// import classNames from 'classnames';

export default function({ name, animateMenu, setMenuList }) {
  const projectMenu = [
    {
      name: "Project 1"
    },
    {
      name: "Project 2"
    },
    {
      name: "Project 3"
    }
  ]
  return (
    // <div className="content-item" onClick={(e) => animateMenu(e)}><p>{name}</p></div>
    <div className="content-item" onClick={(e) => setMenuList(projectMenu)}><p>{name}</p></div>
  )
}