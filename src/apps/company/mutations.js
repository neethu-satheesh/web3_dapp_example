import createCompany from './CreateCompany.js'

const companyMutations = {
  createCompany: async (_, args) => {
    const transaction = await createCompany(args.company)
    return transaction;
  }
};
  
  export default companyMutations;