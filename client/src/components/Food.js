import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'

export default class Food extends Component {
    state = [
    {
        "name": "sausage patties",
        "count": 17,
        "description": "Spicey, flavorful pork sausage patties",
    },
    {
        "name": "bacon",
        "count": 25,
        "description": "Dry cured, hickory smoked pork bacon",
    },
]
    render() {
        return (
            <div>
                <div>
                    <h1 className="name">Clay's Country Cookin</h1>
        <div input ="text">{ this.state.food.name }</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
                <h2>Name</h2>
                <h2>Count</h2>
                <h2>Description</h2>
           
            </div>
        )
    }
}
