const companyQueries = {
  companies: async (_, args) => {
    return [{
      name: 'Rubyians',
      id: 1
    }]
  },
  company: async (_, args) => {},
};
  
export default companyQueries;