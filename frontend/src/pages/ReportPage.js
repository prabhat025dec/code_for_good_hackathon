import React, { Component } from 'react'
import TablePage from '../components/TablePage'
import TableView from '../components/TableView'
import { Button} from 'react-bootstrap'

class ReportPage extends Component {
  render() {
    return (
      <div>
        <TableView></TableView>
        {/* <TablePage></TablePage> */}
        <>
              <Button variant="outline-success" style={{margin: '10px'}}>Get Report</Button>{' '}
              
              </>
      </div>
    )
  }
}

export default ReportPage
