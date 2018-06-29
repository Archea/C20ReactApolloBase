import React, { Component } from 'react'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'
import Category from './Category'

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid'

export class CategoryGrid extends Component {
  render() {
    if (this.props.getState && this.props.getState.loading) {
      return <div>Loading</div>
    }

    if (this.props.getState && this.props.getState.error) {
      console.log(
        'GetState for category grid error: ' + this.props.getState.error.message
      )
      return <div>Error</div>
    }

    const state = this.props.categories
    const categoriesToRender = this.props.allProductFamilyCategories

    return (
      <div className="CategoryGrid">
        {categoriesToRender.map(category => (
          <Category key={category.id} Category={category} />
        ))}
      </div>
    )
  }
}

const INITIALSTATE_QUERY = gql`
  query GetCategoryGridState {
    categories @client {
      lastSelectedIndex
    }
  }
`
export default graphql(INITIALSTATE_QUERY, { name: 'getState' })(CategoryGrid)
