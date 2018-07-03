import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

export class Category extends Component {
  render() {
    return (
      <Mutation
        mutation={TOGGLE_SELECTED}
        variables={{ id: this.props.Category.id }}>
        {toggleSelected => (
          <DefaultButton
            onClick={toggleSelected}
            className="Category"
            primary={this.props.Category.selected}>
            {this.props.Category.name}
          </DefaultButton>
        )}
      </Mutation>
    )
  }
}

export const TOGGLE_SELECTED = gql`
  mutation toggleSelectedPFC($id: String!) {
    setCategoryGridItemSelected(id: $id) @client
  }
`

export default Category
