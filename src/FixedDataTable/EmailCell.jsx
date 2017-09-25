import React from 'react'
import { Cell } from 'fixed-data-table-2'

export default class EmailCell extends React.Component {
    render() {
        const { rowIndex, field, data, ...props } = this.props;
        const link = data[rowIndex][field];
        return (
            <Cell {...props}>
                <a href={link}>{link}</a>
            </Cell>
        )
    }
}