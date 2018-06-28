import React, { Component } from 'react'
import Category from './Category'
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

export class CategoryList extends Component {
  selectCategory = id => {}
  render() {
    if (this.props.getState && this.props.getState.loading) {
      return <div>Loading</div>
    }

    if (this.props.getState && this.props.getState.error) {
      console.log('Get All Categories error: ' + this.props.getState.error)
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

            return (
              <div>
                {data.allProductFamilyCategories.map(category => (
                  <Category
                    key={category.id}
                    Id={category.id}
                    Category={category}
                    Selected={category.id === data.category.selected}
                  />
                ))}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

//{data.allProductFamilyCategories.map(category => (
//<Category key={category.id} Category={category} />
//))}

/*
This query gets all the ProductFamilies aka sections from content20 db
the 'name' is the section title, while the id is the mf section#
*/
const CATAGORY_QUERY = gql`
  query GetAllPFC($firmId: String!) {
    allProductFamilyCategories(firmId: $firmId) {
      id
      name
    }
    category @client {
      selected
    }
  }
`

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
