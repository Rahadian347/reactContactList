import React from 'react'
import {
    Table
} from 'react-bootstrap'
import { observer } from 'mobx-react'

@observer
export default class ContactTable extends React.Component {
    render () {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>{data.name.first}</th>
                                        <th>{data.name.last}</th>
                                        <th>{data.phone}</th>
                                        <th>{data.location.street}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}