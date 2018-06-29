import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { CategoryGrid } from './CategoryGrid'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('CategoryGrid', () => {
  const mockprops = {
    getState: {
      category: {
        __typename: 'Category',
        lastSelectedIndex: 0
      }
    },
    allProductFamilyCategories: [
      {
        id: 'b686f1e0-16ca-4b40-bf17-a5269f3a1cec',
        name: 'Administration',
        firm: {
          name: 'Avitru'
        },
        discipline: 'Architecture',
        selected: false
      }
    ]
  }
  test('it at least shallow renders and match snapshot', () => {
    const wrapper = shallow(<CategoryGrid {...mockprops} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  const mockpropsError = {
    getState: {
      loading: false,
      error: {
        message: 'an error was mocked in your system'
      }
    }
  }
  test('it handles a query error', () => {
    const wrapper = shallow(<CategoryGrid {...mockpropsError} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
  const mockpropsLoading = {
    getState: {
      loading: true,
      error: null
    }
  }
  test('it handles a query loading', () => {
    const wrapper = shallow(<CategoryGrid {...mockpropsLoading} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
