import React, { useState } from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';
import '../styles/contentList.scss';

export default function() {
  const [menuShown, setMenuShown] = useState("top")

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
        type="Projects"
      />
    )
  })
  return (
    <div className="menu-container">
      <div>
        {topMenu}
      </div>
      <div>
        {projectsMenu}
      </div>
    </div>
  )
}