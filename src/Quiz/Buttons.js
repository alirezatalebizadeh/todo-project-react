
import React, { Component } from 'react'
import './Buttons.css'

export default class Buttons extends Component {

    constructor(props) {
        super(props)
        this.clickButton = this.clickButton.bind(this)
    }

    clickButton(event) {
        this.props.onClick(event)
    }


    render() {
        return (
            <div onClick={this.clickButton} className='box'>
                {this.props.answerText}
            </div>
        )
    }
}
