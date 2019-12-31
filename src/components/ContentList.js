import React, { useState } from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';
import '../styles/contentList.scss';
import LinkItem from './LinkItem';

const ContentList = function() {
  const [links, setLinks] = useState([]);


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
        links={links}
        setLinks={setLinks}
        type={["top", "Contact", "Posts"]}
      />
    )
  })
  const linkItems = links.map(link => {
      return (
        <LinkItem
          title={link.title}
          desc={link.description}
          url={link.url}
        />
      )
  })

  return (
    <nav className="menu-container">
      <div className="top-menu">
        {topMenu}
      </div>
      <div className="projects-menu">
        {linkItems}
      </div>
    </nav>
  )
}

export default ContentList;