import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          persons: [],
          open: false,
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
            <AppBar
              title="My App"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={this.handleToggle}   
            />   
            <Drawer 
              docked={false}
              open={this.state.open}
              onRequestChange={(open) => this.setState({ open })}>
              <MenuItem onClick={this.handleClose}>Contact List</MenuItem>
              <MenuItem onClick={this.handleClose}>To-Do List</MenuItem>
            </Drawer>  
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
