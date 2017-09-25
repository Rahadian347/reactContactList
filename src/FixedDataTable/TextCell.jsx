import React from 'react'
import { Cell } from 'fixed-data-table-2'

export default class TextCell extends React.Component {
    render() {
        const { rowIndex, data, ...props } = this.props;
        const name = data[rowIndex].personaname
        return (
            <Cell {...props}>
                {name}
            </Cell>
        )
    }
}