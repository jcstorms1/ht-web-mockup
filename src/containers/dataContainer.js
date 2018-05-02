import React, { Component } from "react";
import Graph from "../components/graph";
import { createQuery } from "../hocs/api";
import "../stylesheets/data.css";

class DataContainer extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    let http = createQuery();
    fetch(http)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="data-wrapper">
        {this.state.data !== null ? <Graph data={this.state.data} /> : null}
      </div>
    );
  }
}

export default DataContainer;
