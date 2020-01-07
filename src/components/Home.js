import React from 'react';
import Navbar from './Navbar'; 
import Backdrop from './Backdrop';
import Contact from './Contact';
import Projects from './Projects';
import Posts from './Posts';
import Footer from './Footer';
import '../styles/home.scss';
// import ContentList from './ContentList';
// import ArticleListItem from './ArticleListItem';

export default function() {
  return (
    <div className="container">
      <Navbar />
      <Backdrop />
      <Contact />
      <Projects />
      <Posts />
      <Footer />
      {/* <ContentList /> */}
      {/* <ArticleListItem /> */}
    </div>
  )
}