import React from 'react';
import classNames from 'classnames';
// import '../styles/contentListItem.scss';

export default function({ name, setMenuShown, menuShown, type, menuToShow }) {
  
  return (
    <div 
      className={classNames("content-item", {hidden: menuShown !== type})}
      onClick={(e) => setMenuShown(e.currentTarget.firstChild.innerHTML)}>
      {/* onClick={(e) => menuToShow = e.currentTarget.firstChild.innerHTML}> */}
      <p>{name}</p>
    </div>
    // <div className="content-item" onClick={(e) => setMenuList(projectMenu)}><p>{name}</p></div>
  )
}