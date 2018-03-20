import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import KickStarter from "./components/kickstarter";
import AboutUs from "./components/aboutus";
import Story from "./components/story";
import Footer from "./components/footer";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <section className="inner-container">
          <KickStarter />
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route exact path="/ourstory" component={Story} />
          </Switch>
        </section>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
