import React from 'react';
import Navbar from './Navbar'; 
import Backdrop from './Backdrop';
import Contact from './Contact';
import '../styles/home.scss';
// import ContentList from './ContentList';
// import ArticleListItem from './ArticleListItem';

export default function() {
  return (
    <div className="container">
      <Backdrop />
      <Navbar />
      <Contact />
      {/* <ContentList /> */}
      {/* <ArticleListItem /> */}
    </div>
  )
}