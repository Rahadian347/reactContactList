import React from 'react'
import { observer } from 'mobx-react'
import {
    Form, FormGroup, FormControl
} from 'react-bootstrap'
import styles from './todo.css'


@observer
export default class ToDoForm extends React.Component {

    filter(e) {
        this.props.store.filter = e.target.value
    }

    createNew(e) {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value)
            e.target.value = ''
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup className={styles.formGroup}>
                        <FormControl
                            type='text'
                            onKeyPress={this.createNew.bind(this)}
                            placeholder='Add Task Here..'
                        />
                        <FormControl
                            type='text'
                            onChange={this.filter.bind(this)}
                            placeholder='Filter Task Here..'
                        />
                    </FormGroup>
                </Form>
            </div>
            
        )
    }

}
