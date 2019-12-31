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
    } else if (e.currentTarget.firstChild.innerHTML === "Posts") {
      return [
        {
          title: "So you want to use an ORM with Javascript",
          description: "I'm the description of post 1",
          url: "https://medium.com/@rufustheblog/so-you-want-to-use-an-orm-with-javascript-3895f9d437e6"
        },
        {
          title: "A beginners guide to Web Frameworks",
          description: "I'm the description for post 2",
          url: "https://medium.com/@rufustheblog/a-beginners-guide-to-web-frameworks-a131b625ee95"
        }
      ]
    } else {
      return [
        {
          title: "call me",
          description: "555.555.5555",
          url: "#"
        },
        {
          title: "email me",
          description: "tyler.j.a.martin@gmail.com",
          url: "#"
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