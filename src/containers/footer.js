import React, { Component } from "react";
import ContactUs from "../components/footer/contactus";
import SocialMedia from "../components/footer/socialmedia";
import Subscribe from "../components/footer/subscribe";
import "../stylesheets/footer.css";
import logo from "../images/logo-typeonly.png";

class Footer extends Component {
  render() {
    return (
      <div className="wrapper-bottom">
        <div className="inner-bottom">
          {/* <img src={logo} alt="logo" /> */}
          <div className="social-container">
            <h1>Subscribe To Our Mailing List</h1>
            <Subscribe />
          </div>
          <div className="form-container">
            <h1>Contact Us</h1>
            <ContactUs />
          </div>
        </div>
        <h1>Follow Us...</h1>
        <SocialMedia />
      </div>
    );
  }
}

export default Footer;
