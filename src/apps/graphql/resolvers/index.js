import { companyQueries, companyMutations } from '../../company/index.js';

const resolvers = {
  Query: {
    ...companyQueries,
  },
  Mutation: {
    ...companyMutations,
  },
};

export default resolvers;