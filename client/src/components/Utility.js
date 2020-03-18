import React, { Component } from 'react'
import Other from './Other'
import Table from './Table'
import Title from './Title'

export default class Utility extends Component {

    state = {
        utility: [
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

                <div className="utilityName">
                    <h2>Utilities</h2>
                    <h3>Name</h3>
                    <Table info={this.state.utility}/>
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

