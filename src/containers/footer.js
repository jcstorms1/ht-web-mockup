import React, { Component } from "react";
import ContactUs from "../components/footer/contactus";
import SocialMedia from "../components/footer/socialmedia";
import Subscribe from "../components/footer/subscribe";
import SubFooter from "../components/footer/subFooter";
import "../stylesheets/footer.css";

class Footer extends Component {
  render() {
    return (
      <section>
        <div className="wrapper-bottom">
          <div className="inner-bottom">
            <div className="subscribe-container">
              <Subscribe />
            </div>
            <div className="contact-container">
              <h1>Contact Us</h1>
              <ContactUs />
            </div>
            <div className="line-break" />
            <div className="social-container">
              <SocialMedia />
            </div>
          </div>
        </div>
        <SubFooter />
      </section>
    );
  }
}

export default Footer;
