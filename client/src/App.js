import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Personnel from './components/Personnel'
import Other from './components/Other'
import Inventory from './components/Inventory'
import './App.css'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Inventory}/>
            {/* <Route path="/:creatureId" component={SingleCreature}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
