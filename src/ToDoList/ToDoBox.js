import React, { Component } from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { "id": "00001", "task": "Wake up", "complete": "false" },
                { "id": "00002", "task": "Eat breakfast", "complete": "false" },
                { "id": "00003", "task": "Go to work", "complete": "false" }
            ]
        }
    }

    generatedId = () => {
        return Math.floor(Math.random() * 90000) + 10000
    }

    handleRemoval = (nodeId) => {
        var data = this.state.data
        data = data.filter((el) => {
            return el.id !== nodeId
        })
        this.setState({
            data
        })
        return
    }

    handleSubmit = (task) => {
        var data = this.state.data
        var id = this.generatedId().toString()
        var complete = 'false'
        data = data.concat([{id, task, complete}])
        this.setState({
            data
        })
    }

    handleToggleComplete = (nodeId) => {
        var data = this.state.data
        for (var i in data) {
            if (data[i].id == nodeId) {
                data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
                break
            }
        }
        this.setState({
            data
        })
        return
    }

    render() {
        return (
            <div className="well">
                <h1 className="vert-offset-top-0">To do:</h1>
                <ToDoList data={this.state.data} removeNode={this.handleRemoval} toggleComplete={this.handleToggleComplete} />
                <ToDoForm onTaskSubmit={this.handleSubmit} />
            </div>
        )
    }
}