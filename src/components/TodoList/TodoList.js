import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.statusHandler = this.statusHandler.bind(this)

    }

    //add todo
    addTodo(event) {
        event.preventDefault()
        let todoTitle = this.state.todoTitle

        if (todoTitle) {
            let newTodo = {
                id: this.state.todos.length + 1,
                todoTitle,
                completed: false
            }

            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, newTodo]
                }
            })

            this.setState({
                todoTitle: ''
            })
        } else {
            alert('لطفا یادداشت خود را وارد نمایید')
        }

    }

    //title handler
    changeValue(event) {
        this.setState({
            todoTitle: event.target.value
        })
    }

    editTodo(todoId) {

        let newTodos = [...this.state.todos]


        newTodos.forEach(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed
            }
        })

        console.log(newTodos);

        this.setState(prevState => {

            return {
                todos: newTodos
            }
        })
    }


    //remove todo from list
    removeTodo(todoId) {

        let todosFiltered = this.state.todos.filter(todo => {
            return todo.id !== todoId
        })

        this.setState({
            todos: [...todosFiltered]
        })
    }

    statusHandler(event) {
        this.setState({
            status: event.target.value
        })
    }


    render() {
        return (
            <>
                <Header />

                <form onSubmit={this.addTodo}>
                    <div>
                        <input type="text" onChange={this.changeValue} value={this.state.todoTitle} className="todo-input" maxLength="40" />
                        <button className="todo-button" type="submit">
                            <i className="fas fa-plus-square"></i>ثبت
                        </button>
                    </div>

                    <div className="select">
                        <select style={{ direction: 'rtl', textAlign: 'center', fontSize: '1rem' }} onChange={this.statusHandler} name="todos" className="filter-todo">
                            <option value="all">همه</option>
                            <option value="completed">انجام شده ها</option>
                            <option value="uncompleted">انجام نشده ها</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {/* show all totos */}
                        {this.state.status === 'all' && this.state.todos && this.state.todos.map(todo => (
                            <Todo onResiceToEdit={this.editTodo} onRecieveId={this.removeTodo} {...todo} key={todo.id} />
                        ))
                        }
                        {/* show todos that it completed */}
                        {this.state.status === 'completed' && this.state.todos && this.state.todos.filter(todo => todo.completed).map(todo => (
                            <Todo onResiceToEdit={this.editTodo} onRecieveId={this.removeTodo} {...todo} key={todo.id} />
                        ))}

                        {/* show todos that it uncompleted */}
                        {this.state.status === 'uncompleted' && this.state.todos && this.state.todos.filter(todo => !todo.completed).map(todo => (
                            <Todo onResiceToEdit={this.editTodo} onRecieveId={this.removeTodo} {...todo} key={todo.id} />
                        ))}

                        {/* show message for user. insert a note to do */}
                        {this.state.todos.length === 0 && (
                            <p style={{ textAlign: 'center', fontSize: '1.6rem' }}><strong>...لطفا یاد داشت خود را وارد نمایید</strong></p>
                        )}

                    </ul>
                </div>
            </>
        )
    }
}
