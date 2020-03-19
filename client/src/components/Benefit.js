import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import personnel from './Personnel'
import Table from './Table'
import Title from './Title'

export default class Benefit extends Component {

    state = {
        benefit: [
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

            <div className="benefitName">
                <h2>Benefits</h2>
                <h3>Name</h3>
                <Table info={this.props.benefit}/>
                <input type="text" name="name" onChange={ this.props.changeInputBenefit }/>
                {/* <p>{this.submitCreateForm}</p> */}
            </div>
            <div>
                <h3>Count</h3>
                <input type="number" name="count" onChange={ this.props.changeInputBenefit  }/>
            </div>
            <div>
                <h3>Description</h3>
                <input type="text" name="description" onChange={ this.props.changeInputBenefit }/>
            </div>
            <div>
                <button onClick={ this.props.submitCreateBenefit }>Add New</button>
            </div>
            <div>
                <button onClick={ this.props.changeInputBenefit }>Edit</button>
            </div>

                       
        </div>
    )
}
}
