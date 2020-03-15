import React, { Component } from 'react'
import axios from 'axios'
import Payroll  from './Payroll'
import Vacation from './Vacation'
import Benefit from './Benefit'
import { Link } from 'react-router-dom'

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
getVacation = () => {
    axios.get('/api/vacation').then((response) => {
        const foundVacation= response.data;
        this.setState({
    vacation: foundVacation
        })
    })
}
getBenefit = () => {
    axios.get('/api/benefit').then((response) => {
        const foundBenefit = response.data;
        this.setState({
            benefit: foundBenefit
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
    const updatedNewPayroll = { ...this.state.newPayroll};
    updatedNewPayroll[event.target.name] = event.target.value;
    this.setState({
        newPayroll: updatedNewPayroll,
    });
}
changeInput = (event) => {
    const updatedNewVacation = { ...this.state.newVacation};
    updatedNewVacation[event.target.name] = event.target.value;
    this.setState({
        newVacation: updatedNewVacation,
    });
}
changeInput = (event) => {
    const updatedNewBenefits = { ...this.state.newBenefits};
    updatedNewBenefits[event.target.name] = event.target.value;
    this.setState({
        newBenefits: updatedNewBenefits,
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/payroll', this.state.newPayroll).then(() => {
        this.toggleCreateForm();
        this.getPayroll();
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/vacation', this.state.newVacation).then(() => {
        this.toggleCreateForm();
        this.getVacation();
    });
}
submitCreateForm = (event) => {
    event.preventDefault();
    axios.post('/api/benefit', this.state.newBenefits).then(() => {
        this.toggleCreateForm();
        this.getBenefit();
    });
}
componentDidMount() {
    this.getPayroll()
    this.getVacation()
    this.getBenefit()
}



    render() {
        return (
            <div>
                <h1>Clay's Country Cookin</h1>
                <h2>Personnel</h2>
                <div>
                <Link to="/payroll">Payroll</Link>
                {
                    this.state.payroll.map((payroll, i) => {
                        return <Payroll payroll={ payroll } key={ i }/>;
                        
                    })
                }
                </div>
                <div>
                <Link to="/Vacation">Vacation</Link>
                {
                    this.state.vacation.map((vacation, i) => {
                        return <Vacation vacation={ vacation } key={ i }/>;
                        
                    })
                }
                </div>
                <div>
                <Link to="/benefit">Benefits</Link>
                {
                    this.state.benefit.map((benefit, i) => {
                        return <Benefit benefit={ benefit } key={ i }/>;
                        
                    })
                }
                </div>
            </div>
        )
    }
}
