import gql from 'graphql-tag'

export const resolvers = {
  Mutation: {
    setUser: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: 'UserData', id: variables.id })
      const fragment = gql`
        fragment setId on FirmId {
          id
        }
      `
      const a = 'a'
      return a
    }
  }
}
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
