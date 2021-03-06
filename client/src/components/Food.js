import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import Table from './Table'
import Title from './Title'

// class foodFunction(getFoods, submitCreateForm, toggleCreateForm, changeInput)

export default class Food extends Component {
    state = {
       food: [
    {
        "name": "sausage patties",
        "count": 19,
        "description": "Spicey, flavorful pork sausage patties",
    },
    {
        "name": "bacon",
        "count": 25,
        "description": "Dry cured, hickory smoked pork bacon",
    },
    {
        "name": "country ham",
        "count": 7,
        "description": "Tennessee cured country ham"
    }
    ],
}
    render() {
        return (
            <div>
                <h1>Clay's Country Cookin</h1>

                <div className="foodName">
                    <h2>Food</h2>
                    <h3>Name</h3>
                    <Table info={this.props.food}/>
                    <input type="text" name="name" onChange={ this.props.changeInputFood }/>
                    {/* <p>{this.submitCreateForm}</p> */}
                </div>
                <div className="input">
                    <h3>Count</h3>
                    <input type="number" name="count" onChange={ this.props.changeInputFood  }/>
                </div>
                <div>
                    <h3>Description</h3>
                    <input type="text" name="description" onChange={ this.props.changeInputFood }/>
                </div>
                <div>
                    <button onClick={ this.props.submitCreateFood }>Add New</button>
                </div>
                <div>
                    <button onClick={ this.props.changeInputFood }>Edit</button>
                </div>
                <div>
                    <button onClick={ this.props.deleteFood }>Delete</button>
                </div>

                           
            </div>
        )
    }
}

