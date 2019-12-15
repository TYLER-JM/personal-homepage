import React from 'react';
import '../styles/contentListItem.scss'

export default function({ name }) {
  return (
    <div className="content-item"><p>{name}</p></div>
  )
}