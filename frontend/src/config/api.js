import React from "react";


const axios = require("axios").default;

function ApiCall() {
  const [result, setResult] = React.useState("");
  const [isLoading, setisLoading] = React.useState(true);

  const getapi = (route) => {
    axios
      .get(route)
      .then(function (response) {
        // handle success
        console.log("FITMEDIK CL LOGS ", response);
        setResult(response);
        setisLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  

  return { result, getapi,isLoading };
}

export default ApiCall;