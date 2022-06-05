import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Number of People Served", "Amount of food received"],
  ["June", 500, 600],
  ["July", 1170, 560],
  ["August", 670, 140],
  ["September", 1030, 550],
];

export const options = {
  title: "NGO Feeding Program Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function LineChart2() {
  return (
    <Chart
      style={{marginBottom: "2%"}}
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}


export default LineChart2;