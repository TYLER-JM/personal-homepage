import React from 'react';
// import classNames from 'classnames';

 const ContentListItem = function({ name }) {
  
  return (
    <div 
      className="content-item"
      // className={classNames("content-item", {hidden: !type.includes(menuShown), showing: type.includes(menuShown)})}
      // onClick={(e) => setMenuShown(e.currentTarget.firstChild.innerHTML)}
    >
      <p>{name}</p>
    </div>
  )
}

export default ContentListItem;