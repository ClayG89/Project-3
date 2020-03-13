import React, { Component } from 'react'
import axios from 'axios'
import Payroll  from './Payroll'
import Vacation from './Vacation'
import Benefit from './Benefit'

export default class Personnel extends Component {
    state = {
           payroll: [],
            vacation: [],
            benefit: []
      }
getPayroll = () => {
    axios.get('/api/payrolls').then((response) => {
        const foundPayroll = response.data;
        this.state({
    payroll: foundPayroll
        })
    })
}
getCleaning = () => {
    axios.get('/api/cleaning').then((response) => {
        const foundCleaning= response.data;
        this.setState({
    cleaning: foundCleaning
        })
    })
}
getMisc = () => {
    axios.get('/api/misc').then((response) => {
        const foundMisc = response.data;
        this.setState({
            misc: foundMisc 
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
    const updatedNewFood = { ...this.state.newFood};
    updatedNewFood[event.target.name] = event.target.value;
    this.setState({
        newFood: updatedNewFood,
    });
}
changeInput = (event) => {
    const updatedNewCleaning = { ...this.state.newCleaning};
    updatedNewCleaning[event.target.name] = event.target.value;
    this.setState({
        newCleaning: updatedNewCleaning,
    });
}
changeInput = (event) => {
    const updatedNewMisc = { ...this.state.newMisc};
    updatedNewMisc[event.target.name] = event.target.value;
    this.setState({
        newMisc: updatedNewMisc,
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/foods', this.state.newFood).then(() => {
        this.toggleCreateForm();
        this.getFoods();
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/cleaning', this.state.newCleaning).then(() => {
        this.toggleCreateForm();
        this.getCleanings();
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/miscs', this.state.newMisc).then(() => {
        this.toggleCreateForm();
        this.getMiscs();
    });
}
componentDidMount() {
    this.getFoods()
    this.getCleaning()
    this.getMisc()
}



    render() {
        return (
            <div>
                <div>
                {
                    this.state.food.map((food, i) => {
                        return <Food food={ food } key={ i }/>;
                        
                    })
                }
                </div>
                <div>
                {
                    this.state.cleaning.map((cleaning, i) => {
                        return <Cleaning cleaning={ cleaning } key={ i }/>;
                        
                    })
                }
                </div>
                <div>
                {
                    this.state.misc.map((misc, i) => {
                        return <Misc misc={ misc } key={ i }/>;
                        
                    })
                }
                </div>
            </div>
        )
    }
}
