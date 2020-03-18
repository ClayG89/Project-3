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
            <Title/>

            <div className="benefitName">
                <h2>Benefits</h2>
                <h3>Name</h3>
                <Table info={this.state.benefit}/>
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
