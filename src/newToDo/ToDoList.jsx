import React from 'react'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import styles from './todo.css'
import ToDoForm from './ToDoForm.jsx'
import ToDoItem from './ToDoItem.jsx'

@inject('store') @observer
export default class NewToDoList extends React.Component {  
   
    render () {
        return (
            <div className={styles.container}>             
                <div className={styles.box} >
                    <div className={styles.header}>
                        <h3>Simple Todo List</h3>
                    </div>
                    <div className = {styles.boxInside}>
                        <ToDoForm />
                        <ToDoItem />
                    </div>
                </div> 
            <DevTools />                  
            </div>
        )           
    }
}