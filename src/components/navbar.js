import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/hatchtrack-logo-horizontal.png";
import "../stylesheets/navbar.css";

const NavBar = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="hatchtrack logo" />
      <nav>
        <div className="links-container">
          <Link id="aboutus" to="/">
            About Us
          </Link>
          <Link to="/ourstory">Our Story</Link>
          <Link to="/ourteam">Our Team</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/livedemo">Live Demo</Link>
        </div>
      </nav>
      {/* <div className="icon-container">
        <i className="fab fa-kickstarter" />
        <a href="https://www.facebook.com/hatchtrack/">
          <i className="fab fa-facebook-square" />
        </a>
        {/* <i className="fab fa-instagram" />
        <i className="fab fa-twitter-square" /> */}
    </div>
  );
};

export default NavBar;
