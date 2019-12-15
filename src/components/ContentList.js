import React from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';
import animateMenu from '../Helpers/animateMenu';

export default function() {

  const dataList = [
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
  const contents = dataList.map(content => {
    return (
      < ContentListItem
        name={content.name}
        key={generateId(8)}
        animateMenu={animateMenu}
      />
    )
  })
  return (
    <div>
      {contents}
    </div>
  )
}