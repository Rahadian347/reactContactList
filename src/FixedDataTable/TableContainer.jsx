import React from 'react'
import { observer, inject } from 'mobx-react'
import styles from './style.css'
import CircularProgress from 'material-ui/CircularProgress';

import TableData from './Table.jsx'

@inject('store') @observer
export default class FixedTable extends React.Component {

    constructor(props){
        super(props)
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleFilterKeyDown = this.handleFilterKeyDown.bind(this)
    }

    componentDidMount() {
        this.props.store.table.loadData()
        this.props.store.table.searchKeyword = ''
    }
    handleFilterChange(e) {
        this.props.store.table.onChangeFilter(e.target.value)
    }
    handleFilterKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.store.table.loadData()
        }
    }
    get tableComponent() {
        let tableComponent = null
        if (this.props.store.table.isLoading === true) {
            tableComponent = <Loading />
        } else {
            
            if (this.props.store.table.dataTable.length === 0) {
                tableComponent = <Empty />
            } else {
                tableComponent = <TableData />
            }
        }
        return tableComponent
    }

    render() {
        return (
            <div className={styles.Container}>
                <FilterForm 
                    searchKeyword={this.props.store.table.searchKeyword}
                    handleFilterKeyDown={this.handleFilterKeyDown}
                    handleFilterChange={this.handleFilterChange}
                />
               {this.tableComponent}
            </div>
        )
    }
}

//Functional Stateless Components
const Loading = () => <div><CircularProgress /></div>

const Empty = () => <div className>Empty Table</div>

const FilterForm = (props) => {
    return (
        <input
            placeholder="filter by First Name"
            onKeyDown={props.handleFilterKeyDown}
            onChange={props.handleFilterChange}
            value={props.searchKeyword}
        />
    )
}
    