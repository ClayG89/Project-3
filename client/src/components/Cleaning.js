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
                <Title/>

                <div className="cleanerName">
                    <h2>Name</h2>
                    <Table info={this.state.cleaning}/>
                    <input type="text" name="name" onChange={ this.submitCreateForm }/>
                    <p>{this.submitCreateForm}</p>
                </div>
                <div>
                    <h2>Count</h2>
                    <input type="number" name="count" onChange={ this.changeInput }/>
                </div>
                <div>
                    <h2>Description</h2>
                    <input type="text" name="description" onChange={ this.changeInput}/>
                </div>
                <div>
                <button onClick={ this.submitNewProduct }>EDIT</button>
                </div>

                           
            </div>
        )
    }
}