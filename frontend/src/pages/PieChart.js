import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Program", "Number of Beneficiaries"],
  ["NGO Feeding Program", 1100],
  ["Food Rescue Program", 2500],
  ["Food Relief Program", 2100],
  ["Breakfast Feeding Program", 2600],
];

export const options = {
  title: "",
  is3D: true,
  title: "Total Beneficiaries from each Program",
  curveType: "function",
};

function PieChart1() {
  return (
    <Chart
      style={{marginBottom: "2%"}}
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default PieChart1;