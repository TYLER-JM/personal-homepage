import React from 'react';
import classNames from 'classnames';

 const ContentListItem = function({ name, setMenuShown, menuShown, type }) {
  
  return (
    <div 
      className={classNames("content-item", {hidden: !type.includes(menuShown), shown: type.includes(menuShown)})}
      onClick={(e) => setMenuShown(e.currentTarget.firstChild.innerHTML)}>
      <p>{name}</p>
    </div>
  )
}

export default ContentListItem;