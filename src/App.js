import React, { Component } from 'react'
import './App.css'
import Header from './Components/Navigation/Header'
import NotFound from './Components/Navigation/NotFound'
import Welcome from './Components/Welcome'
import CategoryList from './Components/CategoryList'
import { Route, Switch } from 'react-router-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

class App extends Component {
  render() {
    return (
      <div className="ms-Fabric">
        <Header />
        <div className="App">
          <Fabric>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route component={NotFound} />
            </Switch>
            <CategoryList />
          </Fabric>
        </div>
      </div>
    )
  }
}
export default App
