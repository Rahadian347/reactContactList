import React from 'react'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          persons: [],
        }        
    }

    handleClose = () => {
      this.setState({ open: false });
    }

    componentWillMount() {
      axios.get('https://randomuser.me/api/?results=5')
        .then((result) => {
          this.setState({
            persons: result.data.results            
          })
       })
    }
    
    render() {

      if (this.state.persons[0]){} // checking first render empty or not

      const person = this.state.persons 

      return (
        <div className="App">              
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn >No</TableHeaderColumn>
                  <TableHeaderColumn >Name</TableHeaderColumn>
                  <TableHeaderColumn >Gender</TableHeaderColumn>
                  <TableHeaderColumn >Email</TableHeaderColumn>
                  <TableHeaderColumn >Phone</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
              {
                person.map((data, index) => {
                  return (
                      <TableRow key={index}>
                        <TableRowColumn>{index + 1}</TableRowColumn>
                        <TableRowColumn>{data.name.first}</TableRowColumn>
                        <TableRowColumn>{data.gender}</TableRowColumn>
                        <TableRowColumn>{data.email}</TableRowColumn>
                        <TableRowColumn>{data.phone}</TableRowColumn>
                      </TableRow>   
                  )
                })
              }
              </TableBody>  
            </Table>
        </div>      
      )         
    }
}
