import React from "react";
import './Chart.css';
import { Chart } from "react-google-charts";
import ApiCall from "../config/api";


export const data = [
  ["Programs", "People below 18", "People above 60"],
  ["NGO Feeding Program", 1000, 400],
  ["Food Rescue Program", 1170, 460],
  ["Food Relief Program", 660, 1120],
  ["Breakfast Feeding Program", 1030, 540],
];

export const options = {
  chart: {
    title: "Program For NGO",
    subtitle: "People Served according to age: June- August",
    backgroundColor: '#17fc0f'
  },
};

function Report() {
  const{getapi,isLoading,result}=ApiCall();
  getapi("https://dog.ceo/api/breeds/image/random");
  console.log(result)
  //result is the state
  //getAPi se you call the function eg getApi(route);
  //isLoading is a state(boolean) true=data load nahi hua, false=data load hogaya
  //you can add the isloading state in the UI to make it thoda responsive, also will look nice to the mentor
  return (
    <div style={{margin: "auto"}}>
    <Chart
      style={{marginBottom: "2%"}}
      div="c1"
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
      />
      </div>
  );
}


export default Report;