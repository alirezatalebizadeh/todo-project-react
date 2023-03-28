import React, { Component } from 'react'
import BookList from './components/BookList/AddForm';
import Header from './components/Header/Header';





export default class App extends Component {



  render() {
    return (
      <div className='container mt-4'>
        <Header />
        <BookList />
      </div>
    )
  }
}



