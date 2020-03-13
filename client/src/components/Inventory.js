import React, { Component } from 'react'
import axios from 'axios'
import { Food } from './Food'

export default class Inventory extends Component {
    state = {
           food:[],
            cleaning: [],
            misc:[]
      }
getFoods = () => {
    axios.get('/api/foods').then((response) => {
        const foundFood = response.data;
        this.state({
food: foundFood
        })
    })
}
getCleaning = () => {
    axios.get('/api/cleaning').then((response) => {
        const foundCleaning= response.data;
        this.state({
cleaning: foundCleaning
        })
    })
}
getMisc = () => {
    axios.get('/api/misc').then((response) => {
        const foundMisc = response.data;
        this.state({
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
