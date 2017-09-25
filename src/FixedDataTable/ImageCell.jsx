import React from 'react'
import { Cell } from 'fixed-data-table-2'

export default class ImageCell extends React.Component {
    render() {
        const { rowIndex, data, ...props } = this.props;
        const image = data[rowIndex].avatarfull;
        const prop = data[rowIndex].personaname
        return (
            <Cell {...props}>
                <img src={image} alt={prop}/>
            </Cell>
        )
    }
}