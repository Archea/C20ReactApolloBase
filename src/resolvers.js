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
    // set item.selected
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
      const category = cache.readFragment({ fragment, id: fragmentId })
      cache.writeData({
        id: fragmentId,
        data: {
          ...category,
          selected: !category.selected
        }
      })
      return category
    },
    //TODO set last selected index
    setCategoryLastSelectedIndex: (_, variables, { cache, getCacheKey }) => {
      cache.writeData({
        categories: {
          lastSelectedIndex: variables.index
        }
      })
    }
  },
  ProductFamilyCategoryType: {
    selected: () => false
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
  },
  categories: {
    __typename: 'Categories',
    lastSelectedIndex: -1
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

  type Categories {
    lastSelectedIndex: Number
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
