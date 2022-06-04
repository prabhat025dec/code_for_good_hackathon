import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Number of People Served", "Amount of food received"],
  ["June", 1000, 400],
  ["July", 1170, 460],
  ["August", 660, 1120],
  ["September", 1030, 540],
];

export const options = {
  title: "Food Rescue Program Program Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function LineChart() {
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


export default LineChart;