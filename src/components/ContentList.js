import React, { useState } from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';
import '../styles/contentList.scss';
// import '../styles/contentListItem.scss';

export default function() {
  const [menuShown, setMenuShown] = useState("top")

  let menuToShow = "top"

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
  const projectsMenuData = [
    {
      name: "Project 1",
    },
    {
      name: "top",
    },
    {
      name: "Project 3",
    }
  ]
  const topMenu = topMenuData.map(content => {
    return (
      < ContentListItem
        name={content.name}
        key={generateId(8)}
        setMenuShown={setMenuShown}
        menuShown={menuShown}
        menuToShow={menuToShow}
        type="top"
      />
    )
  })
  const projectsMenu = projectsMenuData.map(project => {
    return (
      <ContentListItem
        name={project.name}
        key={generateId(8)}
        setMenuShown={setMenuShown}
        menuShown={menuShown}
        menuToShow={menuToShow}
        type="Projects"
      />
    )
  })
  return (
    <div className="menu-container">
      <div className="top-menu">
        {topMenu}
      </div>
      <div className="projects-menu">
        {projectsMenu}
      </div>
    </div>
  )
}