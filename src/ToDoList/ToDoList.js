import React from 'react'
import ToDoItem from './ToDoItem'

export default class ToDoList extends React.Component {

    removeNode = (nodeId) => {
        this.props.removeNode(nodeId)
        return
    }
    toggleComplete = (nodeId) => {
        this.props.toggleComplete(nodeId)
        return
    }
    render() {
        var listNodes = this.props.data.map(function (listItem) {
            return (
                <ToDoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
            )
        }, this)

        return (
            <ul className="list-group">
                {listNodes}
            </ul>
        )
    }
}