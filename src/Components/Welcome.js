import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_USERDATA = gql`
  {
    userdata @client {
      name
      firm {
        id
        name
      }
      master {
        id
        name
      }
    }
  }
`

export class Welcome extends Component {
  render() {
    return (
      <Query query={GET_USERDATA}>
        {({ loading, error, data }) => {
          if (error) return `Error! ${error.message}`
          if (loading) return 'loading...'

          return (
            <div className="Welcome">
              <h2>Welcome {data.userdata.name}!</h2>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Welcome
