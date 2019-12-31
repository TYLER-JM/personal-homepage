import React, { useState } from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';
import '../styles/contentList.scss';
// import '../styles/contentListItem.scss';

const ContentList = function() {
  // const [menuShown, setMenuShown] = useState("top")
  const [links, setLinks] = useState({});


  const topMenuData = [
    {
      name: "Contact",
    },
    {
      name: "Projects",
    },
    {
      name: "Posts",
    }
  ]
  const topMenu = topMenuData.map(content => {
    return (
      < ContentListItem
        name={content.name}
        key={generateId(8)}
        type={["top", "Contact", "Posts"]}
      />
    )
  })
  // const projectsMenu = projectsMenuData.map(project => {
  //   return (
  //     <ContentListItem
  //       name={project.name}
  //       key={generateId(8)}
  //       type={["Projects"]}
  //     />
  //   )
  // })
  return (
    <nav className="menu-container">
      <div className="top-menu">
        {topMenu}
      </div>
      {/* <div className="projects-menu">
        {projectsMenu}
      </div> */}
    </nav>
  )
}

export default ContentList;