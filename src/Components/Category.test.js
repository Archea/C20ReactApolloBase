import React from 'react'
import ReactDOM from 'react-dom'
import { Category, TOGGLE_SELECTED } from './Category'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'
import { MockedProvider } from 'react-apollo/test-utils'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Category', () => {
  const mocks = {
    request: {
      query: TOGGLE_SELECTED,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        Category: {
          id: '1',
          name: 'bar'
        }
      }
    }
  }
  const props = {
    Category: {
      id: '1',
      name: 'bar'
    }
  }
  test.skip('it at renders and matches snapshot', () => {
    const context = {}
    const comp = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Category {...props} />
      </MockedProvider>
    )
    expect(comp).toBeDefined()
    expect(comp.toJSON()).toMatchSnapshot()
  })
})
