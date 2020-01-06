import React from 'react';
import Navbar from './Navbar'; 
import Backdrop from './Backdrop';
import Contact from './Contact';
import Projects from './Projects';
import '../styles/home.scss';
// import ContentList from './ContentList';
// import ArticleListItem from './ArticleListItem';

export default function() {
  return (
    <div className="container">
      <Backdrop />
      <Navbar />
      <Contact />
      <Projects />
      {/* <ContentList /> */}
      {/* <ArticleListItem /> */}
    </div>
  )
}