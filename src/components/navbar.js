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
          <Link to="/livedemo">Live Demo</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
