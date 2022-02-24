import { ApolloServer } from 'apollo-server-express';
import schema from './schema.js';

const apolloServer = new ApolloServer({
  schema,
  playground: process.env,
});

export default apolloServer;