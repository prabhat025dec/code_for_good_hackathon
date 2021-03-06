import React, { useState } from "react";
import "../style/NGODataRegistrationStyles.css"
import axios from "../axios";
function NGODataRegistration(){
    let initVals = {
        organizationName: "",
        enrolledProgram: "",
        representerName: "",
        representerDesignation: "",
        registeredId: "",
        supportProvidedMonth: "",
        foodAmount: "",
        under18: "",
        above60: "",
        femaleBeneficiariesReached: "",
        numberOfBeneficiariesReached: "",
        locationCovered: "",
        foodDistributedToAnyOtherCharity: "",
        programDate: "",

        
      };
      const [vals, setVal] = useState(initVals);
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setVal({ ...vals, [name]: value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    await axios
      .post("/ngo/addNgoData", vals)
      .then((res) => {
        console.log(res.data.newNgoData);
      })
      .catch((err) => {
        alert(`Duplicate Data Found`)
      });
    }
    return(
        <div className = "container">
    	<form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label className="form-label">Organization name</label>
    <input onChange={handleChange} type="text" name = "organizationName" className="form-control" placeholder = "Enter Your Organisation Name" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Enrolled Program</label>
    <input onChange={handleChange} type="text" name = "enrolledProgram" className="form-control" placeholder = "Enter Your Enrolled Program" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Representator Name</label>
    <input onChange={handleChange} type="text" name = "representerName" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Representer Designation</label>
    <input onChange={handleChange} type="text" name = "representerDesignation" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Registered ID</label>
    <input onChange={handleChange} type="text" name = "registeredId" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Support Provided in month of</label>
    <input onChange={handleChange} type="text" name = "supportProvidedMonth" className="form-control" required />
  </div>
  <div className="mb-5">
    <label className="form-label">Food Amount Received</label>
    <input onChange={handleChange} type="text" name = "foodAmount" className="form-control" placeholder = "Enter amount of food received(in kg)"required />
  </div>
  <div class = "mb-3">
<div class = "row">
<h5 class = "mb-4">Age group</h5>
    <div class = "col-md-4">
    <label className="form-label">Number of Beneficiaries under 18</label>
    <input onChange={handleChange} type="text" name = "under18" className="form-control" required />
    </div>
    <div class = "col-md-4">
    <label className="form-label">Number of Beneficiaries over 60</label>
    <input onChange={handleChange} type="text" name = "above60" className="form-control" required />
        </div>
        <div class = "col-md-4">
        <label className="form-label">Number of Female Beneficiaries</label>
    <input onChange={handleChange} type="text" name = "femaleBeneficiariesReached" className="form-control" required />
        </div>
        </div>
</div>
  <div className="mb-3">
    <label className="form-label">Total number of Beneficiaries reached</label>
    <input onChange={handleChange} type="text" name = "numberOfBeneficiariesReached" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Location Covered </label>
    <input onChange={handleChange} type="text" name = "locationCovered" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Was this food be distributed to any other charity partners from your network. If yes, please share the partner names</label>
    <input onChange={handleChange} type="text" name = "foodDistributedToAnyOtherCharity" className="form-control" required />
  </div>
  <div className="mb-3">
    <label className="form-label">Program Date</label>
    <input onChange={handleChange} placeholder="dd-mm-yyyy" type="text" name = "programDate" className="form-control" required />
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
  <button onClick = {handleSubmit} class="btn btn-primary" type="button">Submit</button>
  </div>

        </form>
        </div>    
    )
}
export default NGODataRegistration;