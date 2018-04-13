import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import ScrollToTop from "./scrollToTop";
import "./index.css";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Route path="/" component={App} />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
