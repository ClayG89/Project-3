import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Clay's Country Cookin</h1>

                <div><Link to="/Inventory">Inventory</Link></div>

                <div><Link to="/Personnel">Personnel</Link></div>

                <div><Link to="/Other">Other</Link></div>

            </div>
        )
    }
}
