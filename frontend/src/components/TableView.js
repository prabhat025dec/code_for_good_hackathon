import React, { Component } from 'react'
import '../style/report.css'
import {Table} from 'react-bootstrap'
import { Button} from 'react-bootstrap'

const data = [
    {
         organization_name: "NGO1",
         enrolled_program: "NGO Feeding Program",
         representator_name: "repre1",
         representer_design: "Program Manager",
         register_id: "222",
         month: "March",
         amount_food: "30",
         beneficiaries_18: "12",
         beneficiaries_60: "22",
         beneficiaries_female: "8",
         total_beneficiaries: "48",
         location: "location1",
         food_distributed: "partner1"
    },
    {
        organization_name: "NGO5",
        enrolled_program: "Food Rescue Program",
        representator_name: "repre1",
        representer_design: "Program Manager",
        register_id: "222",
        month: "March",
        amount_food: "30",
        beneficiaries_18: "12",
        beneficiaries_60: "22",
        beneficiaries_female: "8",
        total_beneficiaries: "48",
        location: "location1",
        food_distributed: "partner1"
   },

   {
    organization_name: "NGO4",
    enrolled_program: "NGO Feeding Program",
    representator_name: "repre1",
    representer_design: "Program Manager",
    register_id: "222",
    month: "March",
    amount_food: "30",
    beneficiaries_18: "12",
    beneficiaries_60: "22",
    beneficiaries_female: "8",
    total_beneficiaries: "48",
    location: "location1",
    food_distributed: "partner1"
},

{
    organization_name: "NGO3",
    enrolled_program: "Food Relief Program",
    representator_name: "repre1",
    representer_design: "Program Manager",
    register_id: "222",
    month: "March",
    amount_food: "30",
    beneficiaries_18: "12",
    beneficiaries_60: "22",
    beneficiaries_female: "8",
    total_beneficiaries: "48",
    location: "location1",
    food_distributed: "partner1"
},

{
    organization_name: "NGO2",
    enrolled_program: "Breakfast Feeding Program",
    representator_name: "repre1",
    representer_design: "Program Manager",
    register_id: "222",
    month: "March",
    amount_food: "30",
    beneficiaries_18: "12",
    beneficiaries_60: "22",
    beneficiaries_female: "8",
    total_beneficiaries: "48",
    location: "location2",
    food_distributed: "No"
},
    
  ]

class TableView extends Component {
  render() {
    return (
      <div>
  <Table responsive style={{margin: '20px'}}>
    <thead>
    <tr>
          <th>Organization Name</th>
          <th>Enrolled Program</th>
          <th>Representator Name</th>
          <th>Representator Designcation</th>
          <th>Supported Provided Month</th>
          <th>Food Received in kg</th>
          <th>Number of Beneficiaries Under age 18</th>
          <th>Number of Beneficiaries Over age 60</th>
          <th>Number of female Beneficiaries</th>
          <th>Total Beneficiaries</th>
          <th>Location Covered</th>
          <th>Food Distributed Charity Partner</th>
        </tr>
    </thead>
    <tbody>
      {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.organization_name}</td>
              <td>{val.enrolled_program}</td>
              <td>{val.representator_name}</td>
              <td>{val.representer_design}</td>
              <td>{val.month}</td>
              <td>{val.amount_food}</td>
              <td>{val.beneficiaries_18}</td>
              <td>{val.beneficiaries_60}</td>
              <td>{val.beneficiaries_female}</td>
              <td>{val.total_beneficiaries}</td>
              <td>{val.location}</td>
              <td>{val.food_distributed}</td>
              <td> <>
              <Button variant="outline-success" style={{margin: '10px'}}>Edit</Button>{' '}
              
              </></td>

             
              
            </tr>
          )
        })}
    </tbody>
  </Table>
  
</div>
      
    )
  }
}
  
// function TableView() {
//   return (
//     <div>
//       {/* <table>
//         <tr>
//           <th>Organization Name</th>
//           <th>Enrolled Program</th>
//           <th>Representator Name</th>
//           <th>Representator Designcation</th>
//           <th>Supported Provided Month</th>
//           <th>Food Received in kg</th>
//           <th>Number of Beneficiaries Under age 18</th>
//           <th>Number of Beneficiaries Over age 60</th>
//           <th>Number of female Beneficiaries</th>
//           <th>Total Beneficiaries</th>
//           <th>Location Covered</th>
//           <th>Food Distributed Charity Partner</th>
//         </tr>
//         {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>{val.organization_name}</td>
//               <td>{val.enrolled_program}</td>
//               <td>{val.representator_name}</td>
//               <td>{val.representer_design}</td>
//               <td>{val.month}</td>
//               <td>{val.amount_food}</td>
//               <td>{val.beneficiaries_18}</td>
//               <td>{val.beneficiaries_60}</td>
//               <td>{val.total_beneficiaries}</td>
//               <td>{val.location}</td>
//               <td>{val.food_distributed}</td>
//             </tr>
//           )
//         })}
//       </table> */}

//       <div>
//   <Table responsive>
//     <thead>
//     <tr>
//           <th>Organization Name</th>
//           <th>Enrolled Program</th>
//           <th>Representator Name</th>
//           <th>Representator Designcation</th>
//           <th>Supported Provided Month</th>
//           <th>Food Received in kg</th>
//           <th>Number of Beneficiaries Under age 18</th>
//           <th>Number of Beneficiaries Over age 60</th>
//           <th>Number of female Beneficiaries</th>
//           <th>Total Beneficiaries</th>
//           <th>Location Covered</th>
//           <th>Food Distributed Charity Partner</th>
//         </tr>
//     </thead>
//     <tbody>
//       {/* <tr>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//       </tr>
//       <tr>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//       </tr>
//       <tr>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//         <td>Table cell</td>
//       </tr> */}
//       {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>{val.organization_name}</td>
//               <td>{val.enrolled_program}</td>
//               <td>{val.representator_name}</td>
//               <td>{val.representer_design}</td>
//               <td>{val.month}</td>
//               <td>{val.amount_food}</td>
//               <td>{val.beneficiaries_18}</td>
//               <td>{val.beneficiaries_60}</td>
//               <td>{val.beneficiaries_female}</td>
//               <td>{val.total_beneficiaries}</td>
//               <td>{val.location}</td>
//               <td>{val.food_distributed}</td>
//             </tr>
//           )
//         })}
//     </tbody>
//   </Table>
  
// </div>
//     </div>
//   )
// }

export default TableView
