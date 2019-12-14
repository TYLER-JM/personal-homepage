import React from 'react';
import Navbar from './Navbar'; 
import '../styles/home.scss';
import ContentList from './ContentList';

export default function() {
  return (
    <div className="container">
      <Navbar />
      <h1>Welcome Home</h1>
      <ContentList />
    </div>
  )
}