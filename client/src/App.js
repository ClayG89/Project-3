import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/:creatureId" component={SingleCreature}/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
