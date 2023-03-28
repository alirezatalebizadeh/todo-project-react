import React, { Component } from 'react'

export default class Todo extends Component {



    onEditHandler(id) {
        this.props.onResiceToEdit(id)
    }
    onRemoveHandler(id) {
        this.props.onRecieveId(id)
    }



    render() {
        let { id, todoTitle } = this.props
        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{todoTitle}</li>

                <button onClick={this.onEditHandler.bind(this, id)} className="check-btn">
                    انجام شده
                </button>

                <button onClick={this.onRemoveHandler.bind(this, id)} className="trash-btn">
                    حذف
                </button>
            </div>
        )
    }
}