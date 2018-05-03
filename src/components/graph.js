import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const Graph = props => {
  let labels = [];
  let temperature = [];
  let humidity = [];
  let pressure = [];

  for (let obj of props.data.data) {
    labels.push(moment(obj["timestamp"]).format("l LT"));
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
        fill: false,
        backgroundColor: "rgba(63, 127, 191, 0.4)",
        borderColor: "rgba(63, 127, 191, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(63, 127, 191, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
      },
      {
        label: "Humidity",
        data: humidity,
        fill: false,
        backgroundColor: "rgba(241, 113, 8, 0.4)",
        borderColor: "rgba(241, 113, 8, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(241, 113, 8, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
      }
    ]
  };
  const pressureData = {
    labels: labels,
    datasets: [
      {
        label: "Pressure",
        data: pressure,
        fill: false,
        backgroundColor: "rgba(12, 170, 83, 0.4)",
        borderColor: "rgba(12, 170, 83, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(12, 170, 83, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
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
