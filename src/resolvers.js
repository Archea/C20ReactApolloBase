export const resolvers = { 
    Mutation: {
        setFirmId: (_, variables, {cache, getCacheKey}) => {
            const id = getCacheKey({__typename: 'FirmId', id: variables.id})
            const fragment = gql `
                fragment setId on FirmId {
                    id
                }
            `
            const 
        }
    }
}
export const defaults = { }