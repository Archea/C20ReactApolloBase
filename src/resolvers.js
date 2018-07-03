import gql from 'graphql-tag'

export const resolvers = {
  Mutation: {
    setUser: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'UserData', id: variables.id })
      const error = {
        error: { message: 'nobody implemented this' }
      }
      const fragment = gql`
        fragment setUser on UserData {
          name
          firm
          master
        }
      `

      return error
    },
    /*This resolver catches mucations to select property on the pfc type query
      that are directed at the client.
    */
    setCategoryGridItemSelected: (_, variables, { cache, getCacheKey }) => {
      const fragmentId = getCacheKey({
        __typename: 'ProductFamilyCategoryType',
        id: variables.id
      })

      const fragment = gql`
        fragment selectGridItem on ProductFamilyCategoryType {
          selected
        }
      `
      //Get the category from the local cache
      const category = cache.readFragment({ fragment, id: fragmentId })
      //Toggle the selected property and leave the rest of the category alone
      cache.writeData({
        id: fragmentId,
        data: {
          ...category,
          selected: !category.selected
        }
      })
      return category
    }
  },
  /*
    This adds a seleced property to incoming pfcs
    and sets it to false. This is needed because
    the server scheme doesn't have any concept of 'selected'
    we only need it for the client.
  */
  ProductFamilyCategoryType: {
    selected: () => false
  }
}
/*
  The is the initial state of the cache.
  You can add items that are just needed for the client
  or also hydrate the cache with defaults of data
  that will be retrieved from the server
*/
export const defaults = {
  userdata: {
    __typename: 'UserData',
    name: 'Anonymous User',
    firm: {
      __typename: 'Firm',
      id: 'ec7782f7-d919-4a58-bb8e-fe888633481f',
      name: 'Avitru'
    },
    master: {
      __typename: 'Master',
      id: 'f069a64d-01d0-449b-89c4-6fbe3571af64',
      name: 'MasterSpec'
    }
  }
}
/*
  These are only used at compile time but make
  writing resolvers much cleaner and safer.
  You can see them used above.
*/
export const typeDefs = `{
  type UserData {
    name: String!
    firm: [Firm],
    master: [Master]
  }

  type Firm {
    id: String!,
    name: String!
  }

  type Master {
    id: String!,
    name: String!
  }
}`
/*
The server type definitions

masterId: String = null
The specification master whose content nuggets to retrieve.

productType: String = null
The building product type the nugget represents.

productFamilyName: String = null
Name of the family (section) the nugget belongs to.

scope: String = null
Scope at which the nugget applies.

contentSearch: String = null
Substring to require in nugget's text content.
*/
