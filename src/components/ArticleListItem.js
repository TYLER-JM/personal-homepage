import React, { useState } from 'react';
import '../styles/articles.scss';
import classNames from 'classnames';

const ArticleListItem = function() {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    selected ? setSelected(false) : setSelected(true);
    
  }
  return (
    <article
      className={classNames({"selected-article": selected})}
    >
      <div className="article-header">
        <h2>title</h2>
        <div className="arrow open" onClick={() => handleClick()}>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <p className="preview-text">this is thumbnail text...</p>
      </div>
      <p className="article-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </article>
  )
}

export default ArticleListItem;