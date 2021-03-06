import React, { Component } from 'react'
import personnel from './Personnel'
import { Link } from 'react-router-dom'
import Table from './Table'
import Title from './Title'

export default class Rent extends Component {

    state = {
        rent: [
            {
                "name": "Mark Smith",
                "count": 13,
                "description": "Remaining PTO days"
            },
            {
                "name": "Carla Jones",
                "count": 9,
                "description": "Remaining PTO days"
            },

        ]
    }
    render() {

        return (
            <div>
                <Title/>

                <div className="rentName">
                    <h2>Equipment & building leases</h2>
                    <h3>Name</h3>
                    <Table info={this.state.rent}/>
                    <input type="text" name="name" onChange={ this.submitCreateForm }/>
                    <p>{this.submitCreateForm}</p>
                </div>
                <div>
                    <h3>Count</h3>
                    <input type="number" name="count" onChange={ this.changeInput }/>
                </div>
                <div>
                    <h3>Description</h3>
                    <input type="text" name="description" onChange={ this.changeInput}/>
                </div>
                <div>
                <button onClick={ this.submitNewProduct }>EDIT</button>
                </div>

                           
            </div>
        )
    }
}
