import React, { Component } from 'react'
import personnel from './Personnel'
import { Link } from 'react-router-dom'
import Table from './Table'
import Title from './Title'

export default class Payroll extends Component {

    state = {
        payroll: [
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
                <h1>Clay's Country Cookin</h1>

                <div className="payrollName">
                    <h2>Payroll</h2>
                    <h3>Name</h3>
                    <Table info={this.props.payroll}/>
                    <input type="text" name="name" onChange={ this.props.changeInputPayroll }/>
                    {/* <p>{this.submitCreateForm}</p> */}
                </div>
                <div>
                    <h3>Count</h3>
                    <input type="number" name="count" onChange={ this.props.changeInputPayroll  }/>
                </div>
                <div>
                    <h3>Description</h3>
                    <input type="text" name="description" onChange={ this.props.changeInputPayroll }/>
                </div>
                <div>
                    <button onClick={ this.props.submitCreatePayroll }>Add New</button>
                </div>
                <div>
                    <button onClick={ this.props.changeInputPayroll }>Edit</button>
                </div>

                           
            </div>
        )
    }
}
