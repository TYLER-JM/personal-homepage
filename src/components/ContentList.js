import React from 'react';
import ContentListItem from './ContentListItem';

export default function() {

  const dataList = [
    {
      name: "Contact",
      menu: "top"
    },
    {
      name: "Projects",
      menu: "top"
    }
  ]
  const contents = dataList.map(content => {
    return (
      < ContentListItem name={content.name} />
    )
  })
  return (
    <div>
      {contents}
    </div>
  )
}