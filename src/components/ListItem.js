import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions';

class ListItem extends Component {
    handleComplete = completeTodo => {
        const { completeToDo } = this.props;
        completeToDo(completeTodo);
    };
    render() {
        const { todoId, todo } = this.props;
        return (
            <div key="toDoName">
                <h4>
                    {todo.title}
                    <span onClick={() => this.handleComplete(todoId)} >
                    <button>Done</button>
                    </span>
                </h4>
            </div>
        );
    }
}

export default connect(null, { completeToDo })(ListItem);