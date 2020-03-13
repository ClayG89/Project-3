import React, { Component } from 'react'
import axios from 'axios'
import Utility  from './Utility'
import Rent from './Rent'


export default class Other extends Component {
    state = {
           utility: [],
            rent: [],
      }
getUtility = () => {
    axios.get('/api/utilities').then((response) => {
        const foundUtility = response.data;
        this.state({
    utility: foundUtility
        })
    })
}
getRent = () => {
    axios.get('/api/rent').then((response) => {
        const foundRent = response.data;
        this.setState({
    rent: foundRent
        })
    })
}

toggleCreateForm = () => {
    const newShowCreateForm = !this.state.showCreateForm;
    this.setState({
        showCreateForm: newShowCreateForm,
    });
}
changeInput = (event) => {
    const updatedNewUtility = { ...this.state.newUtility};
    updatedNewUtility[event.target.name] = event.target.value;
    this.setState({
        newUtility: updatedNewUtility,
    });
}
changeInput = (event) => {
    const updatedNewRent = { ...this.state.newRent};
    updatedNewRent[event.target.name] = event.target.value;
    this.setState({
        newRent: updatedNewRent,
    });
}

submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/utility', this.state.newUtility).then(() => {
        this.toggleCreateForm();
        this.getUtility();
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/rent', this.state.newRent).then(() => {
        this.toggleCreateForm();
        this.getRent();
    });
}

componentDidMount() {
    this.getUtility()
    this.getRent()
}



    render() {
        return (
            <div>
                <div>
                {
                    this.state.utility.map((utility, i) => {
                        return <Utility utility={ utility } key={ i }/>;
                        
                    })
                }
                </div>
                <div>
                {
                    this.state.rent.map((rent, i) => {
                        return <Rent rent={ rent } key={ i }/>;
                        
                    })
                }
                </div>
 
            </div>
        )
    }
}