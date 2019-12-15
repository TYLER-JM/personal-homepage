import React from 'react';
import ContentListItem from './ContentListItem';
import generateId from '../Helpers/generateId';

export default function() {

  const dataList = [
    {
      name: "Contact",
      menu: "top"
    },
    {
      name: "Projects",
      menu: "top"
    },
    {
      name: "Posts",
      menu: "top"
    }
  ]
  const contents = dataList.map(content => {
    return (
      < ContentListItem name={content.name} key={generateId(8)}/>
    )
  })
  return (
    <div>
      {contents}
    </div>
  )
}