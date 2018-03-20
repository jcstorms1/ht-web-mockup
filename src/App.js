import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Story from "./components/story";
import Footer from "./components/footer";
import KickStarter from "./components/kickstarter";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <KickStarter />
        <section className="inner-container">
          <Switch location={this.props.location}>
            {/* <Route exact path="/ourstory" component={Story} /> */}
          </Switch>
        </section>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
