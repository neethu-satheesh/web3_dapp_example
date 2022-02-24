import { readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers/index.js';
import typedefFiles from './typedef_files.js'

let typeDefs = '';

typedefFiles.forEach((file) => {
  typeDefs += readFileSync(file, {
    encoding: 'utf8',
  });
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;