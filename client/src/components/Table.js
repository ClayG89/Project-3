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
                   {this.props.info.map((info) => {
                       return (
                           <tr>
                            <td>{info.name}</td>
                            <td>{info.count}</td>
                            <td>{info.description}</td>    
                           </tr>
                   )
                       
                   })}
                </table> 
            </div>
        )
    }
}
