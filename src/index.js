import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from 'apollo-boost'
//import { HttpLink } from 'apollo-link-http'
//import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { BrowserRouter } from 'react-router-dom'
import { defaults, resolvers, typeDefs } from './resolvers'

const httpLink = new HttpLink({
  //This is the api end point that apollo will use to connect to graphql api
  uri: 'https://avitrucontent20api.azurewebsites.net/api/graphql'
})

const cache = new InMemoryCache()

const stateLink = withClientState({ cache, defaults, resolvers, typeDefs })

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()

//const f2 = fetch('http://avitrucontent20api.azurewebsites.net/api/graphql').then( response => console.log(JSON.stringify(response)),)
