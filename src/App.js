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
import ToDo from './ToDoList'

import dummydata from "./dummydata.json"

const json = dummydata.results[0]
let data

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fetching: true,
          open: false,
          data: []
        }
    }

    componentWillMount() {
      axios.get('https://randomuser.me/api/')
        .then((result) => {
          this.setState({
            data: result.data.results[0],
            fetching: false
          })
        })
    }  

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    
    render() {
      if (this.state.data.name)
        console.log(this.state.data.name.first)
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
                      <TableRow>
                        <TableRowColumn>{1}</TableRowColumn>
                        <TableRowColumn>{json.name.first}</TableRowColumn>
                        <TableRowColumn>{json.gender}</TableRowColumn>
                        <TableRowColumn>{json.email}</TableRowColumn>
                        <TableRowColumn>{json.phone}</TableRowColumn>
                      </TableRow>
              </TableBody>     
            </Table>
            <ToDo />
        </div>      
      )    
    }
}
