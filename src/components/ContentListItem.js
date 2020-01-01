import React from 'react';
import linksHelper from '../Helpers/linksHelper';
// import classNames from 'classnames';

 const ContentListItem = function({name, setLinks}) {
  
  return (
    <div 
      className="content-item"
      onClick={(e) => setLinks(linksHelper(e))}
    >
      <span>{name}</span>
    </div>
  )
}

export default ContentListItem;