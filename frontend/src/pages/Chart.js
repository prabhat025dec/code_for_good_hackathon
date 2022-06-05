import './Chart.css';
import { Chart } from "react-google-charts";
import ApiCall from "../config/api";
import React, { useEffect, useState } from "react";
import axios from "../axios"


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
  const [ngodata, setngodata] = useState([]);
  const{getapi,isLoading,result}=ApiCall();
  // getapi("http://localhost:5000/ngo/getAllNgos");
  //console.log(result[0][1].data)
  // console.log(setngodata)
  // useEffect(() => {
  //   axios
  //     .get(`/ngo/getAllNgos`)
  //     .then((res) => {
  //       setngodata(res.data);
  //       console.log(ngodata)
  //       console.log(res.data.length)
  //     })
  //     .catch((err) => {
  //       console.log(err.status);
  //     });
  // }, [ngodata]);

  let NGO_Feeding_ProgramB18 = 0;
  let Breakfast_Feeding_ProgramB18 = 0;
  let Food_Relief_ProgramB18 = 0;
  let Food_Rescue_ProgramB18 = 0;

  let NGO_Feeding_ProgramA60 = 0;
  let Breakfast_Feeding_ProgramA60 = 0;
  let Food_Relief_ProgramA60 = 0;
  let Food_Rescue_ProgramA60 = 0;
  

  for (let i = 0; i < ngodata.length; i++) {
    console.log(ngodata[i].under18,ngodata[i].enrolledProgram)
    if (ngodata[i].enrolledProgram === "NGO_Feeding_Program")
    {
      NGO_Feeding_ProgramB18 += parseInt(ngodata[i].under18);
      NGO_Feeding_ProgramA60 += parseInt(ngodata[i].above60);
    }  
    else if(ngodata[i].enrolledProgram === "Breakfast_Feeding_Program")
    {
      Breakfast_Feeding_ProgramB18 += parseInt(ngodata[i].under18);
      Breakfast_Feeding_ProgramA60 += parseInt(ngodata[i].above60);
    } 

    else if(ngodata[i].enrolledProgram === "Food Relief Program")
    {
      Food_Relief_ProgramB18 += parseInt(ngodata[i].under18);
      Food_Relief_ProgramA60 += parseInt(ngodata[i].above60);
    }
     
    else if(ngodata[i].enrolledProgram === "Food_Rescue_Program")
    {
      Food_Rescue_ProgramB18 += parseInt(ngodata[i].under18);
      Food_Rescue_ProgramA60 += parseInt(ngodata[i].above60);
    } 
  }
  console.log(NGO_Feeding_ProgramB18,NGO_Feeding_ProgramA60)
  //result is the state
  //getAPi se you call the function eg getApi(route);
  //isLoading is a state(boolean) true=data load nahi hua, false=data load hogaya
  //you can add the isloading state in the UI to make it thoda responsive, also will look nice to the mentor
  return (
    <div>
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