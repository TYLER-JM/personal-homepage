import React from 'react';
import Themes from './Navbar'; 
import '../styles/home.scss';
import ContentList from './ContentList';
import ArticleListItem from './ArticleListItem';

export default function() {
  return (
    <div className="container">
      <Themes />
      <ContentList />
      <ArticleListItem />
    </div>
  )
}