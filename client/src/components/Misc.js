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
                <Title/>

<div className="cleanerName">
    <h2>Name</h2>
    <Table info={this.state.misc}/>
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
