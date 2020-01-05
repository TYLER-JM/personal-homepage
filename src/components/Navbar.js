import React from 'react';
import '../styles/navbar.scss';
// import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
// import shrinkNavOnScroll from '../Helpers/shinkNavOnScroll';



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

const Navbar = function() {
  // const classes = useStyles();

  return (
    // <nav className="menu big-menu">
    <nav className={classNames("menu", {"big-menu": document.body.scrollTop < 80, "little-menu": document.body.scrollTop > 80})}>
      <img className="hero" src="images/logo.png" alt="a logo depicting a guitar player"></img>
      {/* <img className={classes.hero} src="images/logo.png" alt="a logo depicting a guitar player"></img> */}
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>Posts</li>
      </ul>
    </nav>
  )
}

export default Navbar;