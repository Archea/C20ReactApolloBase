import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="SelectionArea">
          <Route exact path="/" component={Header} />
        </div>
      </div>
    )
  }
}
export default App
