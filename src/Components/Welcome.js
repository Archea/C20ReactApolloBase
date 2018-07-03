import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
/*This query gets the user data from the local cache
  note the @client decorator, this tells apollo to use the local cache only
  if you remove it you'll get a server error as it tries to query a field that
  doesn't exist on the server.
*/
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
    /*This Query component uses a render prop to run the qury
    and pass in the local cache data via the data property*/
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
