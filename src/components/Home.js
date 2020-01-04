import React from 'react';
import Navbar from './Navbar'; 
import About from './About';
import '../styles/home.scss';
// import ContentList from './ContentList';
// import ArticleListItem from './ArticleListItem';

export default function() {
  return (
    <div className="container">
      <About />
      <Navbar />
      {/* <ContentList /> */}
      {/* <ArticleListItem /> */}
    </div>
  )
}