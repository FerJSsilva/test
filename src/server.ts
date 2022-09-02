import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import schema from './graphql/schema';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
