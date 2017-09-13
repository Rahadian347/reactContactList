import React from 'react'
import {observer} from 'mobx-react'
import styles from './todo.css'
import {Button} from 'react-bootstrap'

@observer
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
                    </div>
                    { this.props.store.filteredTodo.map(todo => {
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
                        onClick={this.props.store.clearComplete}
                        className={styles.buttonClear} >
                        Clear
                    </Button>
                </div>
            )
        }
        return (null)
    }    
}