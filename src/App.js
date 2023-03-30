import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'




//refactor with class component

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <TodoList></TodoList>
//       </div>
//     )
//   }
// }



//refactor with functional component

export default function App() {

  return (
    <div>
      <TodoList></TodoList>
    </div>
  )
}
