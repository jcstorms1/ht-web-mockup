import React from "react";
import { Line } from "react-chartjs";

const Graph = props => {
  let labels = [];
  let temperature = [];
  let humidity = [];
  let pressure = [];

  for (let obj of props.data.data) {
    labels.push(obj["timestamp"]);
    temperature.push(obj["temperature"]);
    humidity.push(obj["humidity"]);
    pressure.push(obj["pressure"]);
  }

  const datasets = {
    labels: labels,
    datasets: [
      {
        label: "Temperature",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: temperature
      },
      {
        label: "Humidity",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: humidity
      }
    ]
  };
  return <Line data={datasets} width="600px" height="300px" />;
};

export default Graph;
