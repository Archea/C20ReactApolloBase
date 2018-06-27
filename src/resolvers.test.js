import { defaults, resolvers } from './resolvers'

describe('resolvers and defaults', () => {
  //resolver tests
  test('resolvers are an object', () => {
    expect(resolvers).toBeDefined()
  })
  test.skip('set user mutation returns not error', () => {
    expect(resolvers.Mutation.setUser(_, _)).toBeDefined()
    expect(resolvers.Mutation.setUser(_, _)).toNotBe(error)
  })
  //default object test
  test('there is a default object', () => {
    expect(defaults).toBeDefined()
  })
  test('there is default user data', () => {
    expect(defaults.userdata).toBeDefined()
    expect(defaults.userdata.name).toBe('Anonymous User')
    expect(defaults.userdata.firm.id).toBeDefined()
    expect(defaults.userdata.firm.name).toBeDefined()
    expect(defaults.userdata.master.id).toBeDefined()
    expect(defaults.userdata.master.id).toBeDefined()
  })
  test('there is default category data', () => {
    expect(defaults.category).toBeDefined()
    expect(defaults.category.selected).toBeDefined()
  })
  test('the default category selection is none or emptystring'),
    () => {
      expect(defaults.category.selected).toBe('')
    }
})
