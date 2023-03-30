import React, { Component } from 'react'


//refactor with class component

// export default class Todo extends Component {



//     onEditHandler(id) {
//         props.onResiceToEdit(id)
//     }
//     onRemoveHandler(id) {
//         this.props.onRecieveId(id)
//     }



//     render() {
//         let { id, todoTitle } = this.props
//         return (
//             // 'completed' class for completed todos
//             <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
//                 <li className="todo-item">{todoTitle}</li>

//                 <button onClick={this.onEditHandler.bind(this, id)} className="check-btn">
//                     انجام شده
//                 </button>

//                 <button onClick={this.onRemoveHandler.bind(this, id)} className="trash-btn">
//                     حذف
//                 </button>
//             </div>
//         )
//     }
// }










//refactor with functional component

export default function Todo(props) {

    const onEditHandler = (id) => {
        props.onResiceToEdit(id)
    }
    const onRemoveHandler = (id) => {
        props.onRecieveId(id)
    }


    return (
        // 'completed' class for completed todos
        <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">{props.todoTitle}</li>

            <button onClick={() => onEditHandler(props.id)} className="check-btn">
                انجام شده
            </button>

            <button onClick={() => onRemoveHandler(props.id)} className="trash-btn">
                حذف
            </button>
        </div>
    )
}
