import React, { Component } from 'react'
import CategoryGrid from './CategoryGrid'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

export class CategoryList extends Component {
  render() {
    if (this.props.getState && this.props.getState.loading) {
      return <div>Loading</div>
    }

    if (this.props.getState && this.props.getState.error) {
      console.log(
        'Get Categories state error: ' + this.props.getState.error.message
      )
      return <div>Error</div>
    }
    const firmId = this.props.getState.userdata.firm.id
    //When we need teh activeCategory can use below (if not null...)
    return (
      <div className="CategoryList">
        <Query query={CATAGORY_QUERY} variables={{ firmId }}>
          {({ loading, error, data, client }) => {
            if (error) return `Error! ${error.message}`
            if (loading) return 'loading...'
            return <CategoryGrid {...data} />
          }}
        </Query>
      </div>
    )
  }
}

/*
This query gets all the ProductFamilies aka sections from content20 db
the 'name' is the section title, while the id is the mf section#
*/
const CATAGORY_QUERY = gql`
  query GetAllPFC($firmId: String!) {
    allProductFamilyCategories(firmId: $firmId) {
      id
      name
      discipline
      firm {
        name
      }
      selected @client
    }
  }
`
/*
  firm id is needed for the queries
  we pull it from the local userdata
  on load with the HoC
*/
const INITIALSTATE_QUERY = gql`
  query GetInitSate {
    userdata @client {
      firm {
        id
      }
    }
  }
`
export default graphql(INITIALSTATE_QUERY, { name: 'getState' })(CategoryList)
