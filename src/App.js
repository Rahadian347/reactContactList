import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          open: false,
          contact: []
        }
    }

  componentDidMount() {
    axios.get('https://randomuser.me/api/')
      .then((result) => {
          this.setState({
            contact: result.data.results[0]
          })
      })   
  }  

    handleToggle = () => this.setState({ open: !this.state.open });
    handleClose = () => this.setState({ open: false });
    
    render() {
      if (this.state.contact.location) console.log(this.state.contact.location.city)
      //console.log(this.state.contact.location.city) i can't use this
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
              {/* <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>{1}</TableRowColumn>
                        <TableRowColumn>{this.state.contact.name.first}</TableRowColumn>
                        <TableRowColumn>{this.state.contact.gender}</TableRowColumn>
                        <TableRowColumn>{this.state.contact.email}</TableRowColumn>
                        <TableRowColumn>{this.state.contact.phone}</TableRowColumn>
                      </TableRow>
              </TableBody>      */}
            </Table>
        </div>      
      )    
    }
}
