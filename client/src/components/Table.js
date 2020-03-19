import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        return (
            <div>

               <table>
                   <th>
                       <tr>
                           <td>NAME</td>
                           <td>COUNT</td>
                           <td>DESCRIPTION</td>
                       </tr>
                   </th>
                   {/* {this.props.info.map((info) => {
                       return ( */}
                           <tr>
                            <td>{this.props.name}</td>
                            <td>{this.props.count}</td>
                            <td>{this.props.description}</td>    
                           </tr>
                   {/* ) */}
                       
                   {/* })} */}
                </table> 
            </div>
        )
    }
}
