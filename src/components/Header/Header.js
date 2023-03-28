import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <h1 style={{ direction: 'rtl',textAlign:'center' }} className="display-4 text-center">
                <span className="text-warning">  کتاب </span> خانه
                <i className="fas fa-book-open text-warning"></i> پاسارگاد    
            </h1>
        )
    }
}
