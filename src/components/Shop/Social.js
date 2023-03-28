import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        return (
            <li>
                <a href="#0">
                    <img src={this.props.img}  alt={this.props.img}/>
                </a>
            </li>
        )
    }
}
