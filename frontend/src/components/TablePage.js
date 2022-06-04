import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead ,MDBDataTable} from 'mdbreact';

const TablePage = (props) => {
  const data_people = {
    columns: [
      {
        label: 'Organization Name',
        field: 'id',
        sort: 'asc',
      },
      {
        label: 'Enrolled Program',
        field: 'name',
        sort: 'asc'
      },
      {
        label: 'Representator Name',
        field: 'surname',
        sort: 'asc'
      },
      {
        label: 'Representator Design',
        field: 'country',
        sort: 'asc'
      },
      {
        label: 'Register ID',
        field: 'city',
        sort: 'asc'
      },
      {
        label: 'Month',
        field: 'position',
        sort: 'asc'
      },
      {
        label: 'Amount of Food',
        field: 'age',
        sort: 'asc'
      }
      ,
      {
        label: 'Beneficiaries Under 18',
        field: 'age',
        sort: 'asc'
      },
      {
        label: 'Beneficiaries Over 60',
        field: 'age',
        sort: 'asc'
      },
      {
        label: 'Female Beneficiaries',
        field: 'age',
        sort: 'asc'
      },
      {
        label: 'Total Beneficiaries',
        field: 'age',
        sort: 'asc'
      },
      {
        label: 'Location Covered',
        field: 'age',
        sort: 'asc'
      },
      {
        label: 'Food Distributed Partner',
        field: 'age',
        sort: 'asc'
      }
    ],
    rows: [
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
  };

  return(

    <MDBTable fixed bordered>
      <MDBTableHead columns={data_people.columns} />
      <MDBTableBody rows={data_people.rows} />
    </MDBTable>
  );
};

export default TablePage;