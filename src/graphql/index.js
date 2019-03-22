import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from '../resolvers/types';
import resolvers from '../resolvers/';


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


export default schema