import React, { Component } from 'react'
import './App.css'
import Header from './Components/Navigation/Header'
import NotFound from './Components/Navigation/NotFound'
import Welcome from './Components/Welcome'
import CategoryList from './Components/CategoryList'
import { Route, Switch } from 'react-router-dom'
import '@progress/kendo-theme-default/dist/all.css'

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
          <CategoryList />
        </div>
      </div>
    )
  }
}
export default App
