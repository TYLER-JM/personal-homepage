import React, { useState } from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';
import animateMenu from '../Helpers/animateMenu';

export default function() {
  const [menuList, setMenuList] = useState([
    {
      name: "Contact",
    },
    {
      name: "Projects",
    },
    {
      name: "Posts",
    }
  ])

  // const dataList = [
  //   {
  //     name: "Contact",
  //   },
  //   {
  //     name: "Projects",
  //   },
  //   {
  //     name: "Posts",
  //   }
  // ]
  const contents = menuList.map(content => {
    return (
      < ContentListItem
        name={content.name}
        key={generateId(8)}
        animateMenu={animateMenu}
        setMenuList={setMenuList}
      />
    )
  })
  return (
    <div>
      {contents}
    </div>
  )
}