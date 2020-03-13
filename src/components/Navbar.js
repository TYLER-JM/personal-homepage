import React from 'react';
import '../styles/navbar.scss';
import scrollTo from '../Helpers/scollTo';

// import { makeStyles } from '@material-ui/core';



// const useStyles = makeStyles({
//   menu: {
//     position: "fixed",
//     display: "flex",
//     "flex-direction": "column",
//     "justify-content": "center",
//     "align-items": "center",
//     background: "#303641",
//     opacity: "0.85",
//     height: "12.5em",
//     // height: shrinkNavOnScroll(),
//     width: "100vw"
//   },
//   bigMenu: {
//     height: "12.5em"
//   },
//   littleMenu: {
//     height: "6.25em"
//   },
//   hero: {
//     "border-radius": "100%",
//     height: "6.25em",
//     width: "6.25em"
//   }
// })

const Navbar = (props) => {
 
  return (
    <nav className="menu" id="menu">
      <img className="hero" src="images/logo.png" alt="a logo depicting a guitar player"></img>
      <ul>
        {/*<li onClick={() => scrollTo(750)}>Projects</li>
        <li onClick={() => scrollTo(1230)}>Posts</li>
        <li onClick={() => scrollTo(1615)}>Skills</li>
        <li onClick={() => scrollTo(1700)}>Contact</li>*/}
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>About</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Projects</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Posts</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Skills</li>
        <li onClick={ (e) => props.setView(e.target.innerHTML) }>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;