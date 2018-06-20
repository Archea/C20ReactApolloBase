import React, { Component } from 'react'
import './App.css'
import Header from './Components/Navigation/Header'
import NotFound from './Components/Navigation/NotFound'
import Welcome from './Components/Welcome'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App
