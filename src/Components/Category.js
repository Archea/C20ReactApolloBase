import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
/*
  renders the category based on the current route
*/
export class Category extends Component {
  render() {
    return (
      <div className="Category">
        <div>{this.props.Category.name}</div>
      </div>
    )
  }
}

export default withRouter(Category)
