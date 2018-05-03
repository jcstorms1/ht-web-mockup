import React, { Component } from "react";
import ContactUs from "../components/contactus";
import "../stylesheets/footer.css";
import logo from "../images/logo-typeonly.png";

class Footer extends Component {
  render() {
    return (
      <div className="wrapper-bottom">
        <div className="inner-bottom">
          {/* <img src={logo} alt="logo" /> */}
          <div className="social-container">
            <h1>Follow Us...</h1>
          </div>
          <div className="form-container">
            <h1>Contact Us</h1>
            <ContactUs />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
