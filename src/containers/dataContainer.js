import React, { Component } from "react";
import Graph from "../components/graph";
import "../stylesheets/data.css";

class DataContainer extends Component {
  state = {
    data: {
      id: "Hatchtrack-Test-001",
      data: [
        {
          timestamp: "2018-04-30T17:29:56Z",
          temperature: 36.91,
          humidity: 17.773,
          pressure: 99552
        },
        {
          timestamp: "2018-04-30T17:45:03Z",
          temperature: 36.84,
          humidity: 16.92,
          pressure: 99556
        },
        {
          timestamp: "2018-04-30T18:00:10Z",
          temperature: 36.86,
          humidity: 16.131,
          pressure: 99558
        }
      ]
    }
  };
  render() {
    return (
      <div className="data-wrapper">
        <div className="chart-container">
          <Graph data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default DataContainer;
