import React from 'react';
import '../styles/navbar.scss';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menu: {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    background: "#303641",
    opacity: "0.85",
    height: "200px"
  },
  hero: {
    "border-radius": "100%",
    height: "100px",
    width: "100px"
  }
})

const Navbar = function() {
  const classes = useStyles();
  return (
    // <nav className="themes">
    <nav className={classes.menu}>
      <img className={classes.hero} src="images/generic-coding.jpg" alt="generic depiction of coding"></img>
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