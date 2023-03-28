import React, { Component } from 'react'
import Book from './Book'
import './AddForm.css'


export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)
        this.unEnableRefresh = this.unEnableRefresh.bind(this)
        this.addToState = this.addToState.bind(this)
    }

    //title handler
    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }
    //author handler

    authorHandler(event) {
        this.setState({
            author: event.target.value
        })
    }

    //year handler
    yearHandler(event) {
        this.setState({
            year: event.target.value
        })
    }

    unEnableRefresh(event) {
        event.preventDefault()

        let { title, author, year } = this.state
        if (title && author && year) {
            let bookItem = {
                id: this.state.books.length + 1,
                title,
                author,
                year
            }
            this.addToState(bookItem)
        }else{
            alert('لطفا کادر ها را پر نمایید ')
        }


    }


    addToState(bookItem) {
        this.setState({
            books: [...this.state.books, bookItem],
            title: '',
            author: '',
            year: ''
        })
        console.log(this.state.books);
    }

    render() {
        return (
            <>
                <form style={{ direction: 'rtl' }} id="book-form" onSubmit={this.unEnableRefresh} autoComplete="off">
                    <div className="form-group">
                        <label className='lable' htmlFor="title">عنوان</label>
                        <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.titleHandler} />
                    </div>

                    <div className="form-group">
                        <label className='lable' htmlFor="author">نویسنده</label>
                        <input type="text" id="author" className="form-control" value={this.state.author} onChange={this.authorHandler} />
                    </div>

                    <div className="form-group">
                        <label className='lable' htmlFor="year">سال</label>
                        <input type="text" id="year" className="form-control" value={this.state.year} onChange={this.yearHandler} />
                    </div>
                    <input type="submit" value="Add Book" className="btn" />
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>سال چاپ</th>
                            <th>نویسنده</th>
                            <th>عنوان</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books.map(book => (
                            <Book {...book} key={book.id} />
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
