import React from 'react';
import Themes from './Navbar'; 
import About from './About';
import '../styles/home.scss';
// import ContentList from './ContentList';
// import ArticleListItem from './ArticleListItem';

export default function() {
  return (
    <div className="container">
      <Themes />
      <About />
      {/* <ContentList /> */}
      {/* <ArticleListItem /> */}
    </div>
  )
}