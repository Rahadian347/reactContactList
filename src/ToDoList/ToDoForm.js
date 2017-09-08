import React from 'react'
import ReactDOM from 'react-dom'

export default class ToDoForm extends React.Component {
    doSubmit = (e) => {
        e.preventDefault()
        var task = this.task.value.trim()
        if (!task) {
            return
        }
        this.props.onTaskSubmit(task)
        this.task.value = ''
        // var task = ReactDOM.findDOMNode(this.refs.task).value.trim()
        // if (!task) {
        //     return
        // }
        // this.props.onTaskSubmit(task)
        // ReactDOM.findDOMNode(this.refs.task).value = ''

    }
    render() {
        return (
            <div className="commentForm vert-offset-top-2">
                <hr />
                <div className="clearfix">
                    <form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-2 control-label">Task</label>
                            <div className="col-md-10">
                                <input type="text" id="task" ref={task => this.task = task} className="form-control" placeholder="Tell Me What To Do" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-2 text-right">
                                <input type="submit" value="Save Item" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}