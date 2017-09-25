import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import { observer, inject } from 'mobx-react'

import EmailCell from './EmailCell.jsx'
import ImageCell from './ImageCell.jsx'
import TextCell from './TextCell.jsx'

@inject('store') @observer
export default class TableData extends React.Component {

    render() {
        let myTableData = this.props.store.table.dataTable
        return (
            <Table
                rowsCount={myTableData.length}
                rowHeight={50}
                headerHeight={50}
                width={770}
                height={550}>
                <Column
                    header={<Cell>Avatar</Cell>}
                    cell={
                        <ImageCell data={myTableData} />
                    }
                    width={70}
                />
                <Column
                    header={<Cell>Name</Cell>}
                    cell={
                        <TextCell data={myTableData} />
                    }
                    width={150}
                />
                <Column
                    header={<Cell>Last Match</Cell>}
                    cell={props => (
                        <Cell>
                            {myTableData[props.rowIndex].last_match_time}
                        </Cell>
                    )}
                    width={225}
                />
                <Column
                    header={<Cell>Account Id</Cell>}
                    cell={
                        <EmailCell
                            data={myTableData}
                            field='account_id'
                        />
                    }
                    width={100}
                />
                <Column
                    header={<Cell>Similarity</Cell>}
                    cell={props => (
                        <Cell>
                            {
                                myTableData[props.rowIndex].similarity
                            }
                        </Cell>
                    )}
                    width={250}
                />
            </Table>
        )
    }
}