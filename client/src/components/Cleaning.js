import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import Table from './Table'
import Title from './Title'

export default class Cleaning extends Component {
    state = {
        cleaning: [
            {
                "name": "oven cleaner",
                "count": 2,
                "description": "A fast acting, industrial strength cleaner"
            },
            {
                "name": "degreaser",
                "count": 4,
                "description": "A solvent-based cleaning agent."
            },
            {
                "name": "ice machine cleaner",
                "count": 2,
                "description": "Removes hard water and mineral build-up."
            }
        ],
    }
    render() {
        return (
            <div>
               <h1>Clay's Country Cookin</h1>

                <div className="cleanerName">
                    <h2>Cleaning</h2>
                    <h3>Name</h3>
                    {/* <p>THIS NEEDS A DELETE! {this.props.cleaning.name}</p> */}
                    <Table info={this.props.cleaning}/>
                    <input type="text" name="name" onChange={ this.props.changeInputCleaning }/>
                    {/* <p>{this.submitCreateForm}</p> */}
                </div>
                <div>
                    <h3>Count</h3>
                    <input type="number" name="count" onChange={ this.props.changeInputCleaning}/>
                </div>
                <div>
                    <h3>Description</h3>
                    <input type="text" name="description" onChange={ this.props.changeInputCleaning}/>
                </div>
                <div>
                <button onClick={ this.props.submitCreateCleaning }>Add New</button>
                </div>
                <div>
                    <button onClick={ this.props.changeInputCleaning }>Edit</button>
                </div>

                           
            </div>
        )
    }
}