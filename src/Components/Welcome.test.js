import React from 'react'
import ReactDOM from 'react-dom'
import { Welcome, GET_USERDATA } from './Welcome'
import renderer from 'react-test-renderer'
import { MockedProvider } from 'react-apollo/test-utils'

const mocks = [
  {
    request: {
      query: GET_USERDATA,
      variables: {}
    },
    result: {
      data: {
        userdata: {
          name: 'Anonymous User',
          firm: {
            id: 'ec7782f7-d919-4a58-bb8e-fe888633481f',
            name: 'Avitru'
          },
          master: {
            id: 'f069a64d-01d0-449b-89c4-6fbe3571af64',
            name: 'MasterSpec'
          }
        }
      }
    }
  }
]

describe('Welcome', () => {
  const mockprops = {
    client: {}
  }
  test('it at renders and matches snapshot', () => {
    const comp = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Welcome {...mockprops} />
      </MockedProvider>
    )
    expect(comp).toBeDefined()
    expect(comp.toJSON()).toMatchSnapshot()
  })
})
