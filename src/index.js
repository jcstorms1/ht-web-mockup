import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
