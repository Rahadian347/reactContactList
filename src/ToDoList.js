import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onDelete = id => {
        const result = this.state.items.filter((res, index) => res.id !== id);
        this.setState(
        {
            term: '',
            items: result
        });
    }  

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <div className="todolist">
                <p>Input schedule: </p>
                <form className="form" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>                    
                </form>                
                <List items={this.state.items} />
                <button onDelete={this.onDelete.bind(this)}>Clear</button>
            </div>
        );
    }
}