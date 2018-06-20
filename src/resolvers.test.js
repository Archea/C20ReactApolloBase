import { defaults, resolvers } from './resolvers'

describe('resolvers and defaults', () => {
  test('defaults are an object', () => {
    expect(defaults).toBeDefined()
  })
  test('resolvers are an object', () => {
    expect(resolvers).toBeDefined()
  })
  test('there is default user data', () => {
    expect(defaults.userdata.name).toBe('Anonymous User')
    expect(defaults.userdata.firm.id).toBeDefined()
    expect(defaults.userdata.firm.name).toBeDefined()
    expect(defaults.userdata.master.id).toBeDefined()
    expect(defaults.userdata.master.id).toBeDefined()
  })
})
