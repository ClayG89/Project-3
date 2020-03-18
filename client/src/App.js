import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Personnel from './components/Personnel'
import Other from './components/Other'
import Vacation from './components/Vacation'
import Home from './components/Home'
import Inventory from './components/Inventory'
import Food from './components/Food'
import Cleaning from './components/Cleaning'
import Misc from './components/Misc'


import './App.css'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/home" component={Home}/>

            <Route exact path="/inventory" component={Inventory}/>
            
            <Route exact path="/personnel" component={Personnel}/>

            <Route exact path="/other" component={Other}/>

            <Route exact path="/food" component={Food}/>

            <Route exact path="/cleaning" component={Cleaning}/>

            <Route exact path="/misc" component={Misc}/>

            <Route exact path="/vacation" component={Vacation}/>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
