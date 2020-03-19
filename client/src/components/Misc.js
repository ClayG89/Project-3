import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'
import Table from './Table'
import Title from './Title'

export default class Misc extends Component {
    state = {
        misc: [
            {
                "name": "paper hot cups",
                "count": 25,
                "description": "10 oz. white paper hot cups for serving beverages"
            },
            {
                "name": "round takeout container ",
                "count": 11,
                "description": "24 oz. black plastic takeout container" 
            }
        ]
    }
    render() {
        return (
            <div>
                <h1>Clay's Country Cookin</h1>

                <div className="cleanerName">
                <h2>Miscellaneous</h2>
                <h3>Name</h3>
                <Table info={this.props.misc}/>
                <input type="text" name="name" onChange={ this.props.changeInputMisc }/>
                {/* <p>{this.submitCreateForm}</p> */}
            </div>
            <div>
                <h3>Count</h3>
                <input type="number" name="count" onChange={ this.props.changeInputMisc }/>
            </div>
            <div>
                <h3>Description</h3>
                <input type="text" name="description" onChange={ this.props.changeInputMisc}/>
            </div>
            <div>
                <button onClick={ this.props.submitCreateMisc }>Add New</button>
            </div>
            <div>
                <button onClick={ this.props.changeInputMisc }>Edit</button>
            </div>
           
</div>
)
}
}
