import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

export class Category extends Component {
  /*
    A mutation component for toggling the client side
    toggle state on a category, needs an id
  */
  render() {
    return (
      <Mutation
        mutation={TOGGLE_SELECTED}
        variables={{ id: this.props.Category.id }}>
        {toggleSelected => (
          <button
            onClick={toggleSelected}
            className="Category"
            primary={this.props.Category.selected}>
            {this.props.Category.name}
          </button>
        )}
      </Mutation>
    )
  }
}
/*
  qgl mutation definiation for toggling selected property
  on a category for a given id. here that is its own
  note the @client decorator to tell apollo to perform
  the mutation only in the local cache.
*/
export const TOGGLE_SELECTED = gql`
  mutation toggleSelectedPFC($id: String!) {
    setCategoryGridItemSelected(id: $id) @client
  }
`

export default Category
