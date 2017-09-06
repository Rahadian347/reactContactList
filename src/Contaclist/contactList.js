import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const style = {
    tableHeader: {
        backgroundColor: '#FF9800',
        color: '#303030'
    }
}

class Contact extends Component {
    render () {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow style={style.tableHeader}>
                        <TableHeaderColumn style={{fontWeight: 'bold' }}>Name</TableHeaderColumn>
                        <TableHeaderColumn style={{fontWeight: 'bold' }}>Gender</TableHeaderColumn>
                        <TableHeaderColumn style={{fontWeight: 'bold' }}>Email</TableHeaderColumn>
                        <TableHeaderColumn style={{fontWeight: 'bold' }}>Phone</TableHeaderColumn>
                        <TableHeaderColumn style={{fontWeight: 'bold' }}>
                            Action
						</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.props.data.map((table, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableRowColumn>{index + 1}</TableRowColumn>
                                    <TableRowColumn>{table.name.first + " " + table.name.last}</TableRowColumn>
                                    <TableRowColumn>{table.gender}</TableRowColumn>
                                    <TableRowColumn>{table.email}</TableRowColumn>
                                    <TableRowColumn>{table.phone}</TableRowColumn>
                                    <TableRowColumn>{table.location.city}</TableRowColumn>
                                </TableRow>
                            );
                        }
                        )
                    }
                </TableBody>
            </Table>    
        )
    }       
}

export default Contact;