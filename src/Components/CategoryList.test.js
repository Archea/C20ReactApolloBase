import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { CategoryList } from './CategoryList'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('CategoryList', () => {
  const mocks = [
    {
      id: '1',
      name: 'bar'
    },
    {
      id: '2',
      name: 'foosle'
    }
  ]
  const mockGetAll = jest.fn
  const mockprops = {
    getState: {
      loading: false,
      error: null,
      userdata: {
        firm: {
          id: '0'
        }
      }
    }
  }
  test('it at least shallow renders and match snapshot', () => {
    const wrapper = shallow(<CategoryList {...mockprops} />)
    wrapper.setProps(mockprops)
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
    const wrapper = shallow(<CategoryList {...mockpropsError} />)
    wrapper.setProps(mockpropsError)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
  const mockpropsLoading = {
    getState: {
      loading: true,
      error: null
    }
  }
  test('it handles a query loading', () => {
    const wrapper = shallow(<CategoryList {...mockpropsLoading} />)
    wrapper.setProps(mockpropsLoading)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
