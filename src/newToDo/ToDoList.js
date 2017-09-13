import React from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import styles from './todo.css'
import ToDoForm from './ToDoForm.js'
import ToDoItem from './ToDoItem.js'

@observer
export default class NewToDoList extends React.Component {  
   
    render () {
        const {filter} = this.props.store
        return (
            <div className={styles.container}>             
                <div className={styles.box} > 
                    <div className = {styles.boxInside}>
                        <h3>Simple Todo List</h3>
                        <ToDoForm 
                            filter={filter} 
                            store={this.props.store} />
                        <ToDoItem store={this.props.store} />
                    </div>
                </div> 
            <DevTools />                  
            </div>
        )           
    }
}