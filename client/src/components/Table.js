import React, { Component } from 'react'
import Food from './Food'

export default class Table extends Component {
    render() {
        return (
            <div>
                <div> { this.state.food.name }</div>
                <div></div>
                <div></div>   
            </div>
        )
    }
}
