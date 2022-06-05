import React, { Component } from 'react'
import TablePage from '../components/TablePage'
import TableView from '../components/TableView'
import { Button} from 'react-bootstrap'
import LineChart from './LineChart1'
import LineChart1 from './LineChart2'
import LineChart3 from './LineChart3'
import LineChart4 from './LineChart4'
import Report from './Chart'
import PieChart1 from './PieChart';
import Calendar1 from './CalendarChart';

export default class ReportPage extends Component {
  render() {
    return (
      <div>
        <TableView></TableView>
        <h1 style={{textAlign: 'center'}}>Dashboard</h1>
        <Report /> 
<PieChart1 />
<Calendar1 />
<LineChart />
<LineChart1 />
<LineChart3 />
<LineChart4 />
        <>
              {/* <Button variant="outline-success" style={{margin: '10px'}}>Get Report</Button>{' '} */}
              
              </>
      </div>
    )
  }
}


//import React from 'react'

// const ReportPage = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ReportPage
