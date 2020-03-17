import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import Title from './Title'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>{ Title }</div>

                <div><Link to="/Inventory">Inventory</Link></div>

                <div><Link to="/Personnel">Personnel</Link></div>

                <div><Link to="/Other">Other</Link></div>

            </div>
        )
    }
}
