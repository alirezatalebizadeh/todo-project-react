import React, { Component } from 'react'
import './Book.css'

export default class Book extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.year}</td>
                <td>{this.props.author}</td>
                <td>{this.props.title}</td>
            </tr>
        )
    }
}
