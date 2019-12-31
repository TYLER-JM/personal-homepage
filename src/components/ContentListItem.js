import React from 'react';
// import classNames from 'classnames';

 const ContentListItem = function({name, setLinks}) {

  const linksHelper = (e) => {
    if (e.currentTarget.firstChild.innerHTML === "Projects") {
      return [
        {
          title: "project 1",
          description: "I'm the description",
          url: "https://github.com/TYLER-JM/stuvv-react-frontend",
        },
        {
          title: "project 2",
          description: "I'm the description for proj 2",
          url: "https://github.com/TYLER-JM/tweeter"
        }
      ]
    }
  };
  
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