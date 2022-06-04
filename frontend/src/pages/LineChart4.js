import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "Number of People Served", "Amount of food received"],
  ["June", 700, 600],
  ["July", 1670, 2000],
  ["August", 870, 240],
  ["September", 930, 560],
];

export const options = {
  title: "Breakfast Feeding Program Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

function LineChart4() {
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


export default LineChart4;