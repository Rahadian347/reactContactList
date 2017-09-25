import React from 'react'
import {observer, inject} from 'mobx-react'
import styles from './todo.css'
import {Button} from 'react-bootstrap'

@inject('store') @observer
export default class ToDoItem extends React.Component {

    toggleComplete(todo) {
        todo.complete = !todo.complete
    }

    render () {   
        if (this.props.store != null) {
            return (
                <div className={styles.listGroup}>
                    <div>
                    <label>Task :</label>
                    <hr/>
                    </div>
                    { this.props.store.todo.filteredTodo.map(todo => {
                    return (
                        <div key={todo.id}>
                            <div className={todo.complete ? styles.listGroupItemSuccess : styles.listGroupItem} >
                            <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} />
                                {todo.value}
                            </div>
                        </div>
                    )
                })}
                    <Button
                        bsStyle='danger'
                        onClick={this.props.store.todo.clearComplete}
                        className={styles.buttonClear} >
                        Clear
                    </Button>
                </div>
            )
        }
        return (null)
    }    
}