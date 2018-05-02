import React from "react";
import { Line } from "react-chartjs-2";

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
        data: temperature,
        fill: false
      },
      {
        label: "Humidity",
        data: humidity,
        fill: false
      }
    ]
  };

  const pressureData = {
    labels: labels,
    datasets: [
      {
        label: "Pressure",
        data: pressure,
        fill: false
      }
    ]
  };

  return (
    <div className="chart-container">
      <div className="temp-humidity">
        <Line data={datasets} options={{ responsive: true }} />
      </div>
      <div className="pressure">
        <Line data={pressureData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Graph;
