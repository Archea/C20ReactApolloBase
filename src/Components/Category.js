import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { ApolloConsumer } from 'react-apollo'

import { Button } from '@progress/kendo-react-buttons'

export class Category extends Component {
  render() {
    return <div className="Category">{this.props.Category.name}</div>
  }
}

export default Category
