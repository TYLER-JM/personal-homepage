import React from 'react';
import linksHelper from '../Helpers/linksHelper';
// import classNames from 'classnames';

 const ContentListItem = function({name, setLinks}) {
  
  return (
    <div 
      className="content-item"
      onClick={(e) => setLinks(linksHelper(e))}
    >
      <p>{name}</p>
    </div>
  )
}

export default ContentListItem;