import { CompanyContract, contractAddress } from './CompanyContract.js';

let instance1;

const createCompany = async (companyArgs) => {
  CompanyContract.at(contractAddress).then(function(instance) {
    instance1 = instance;

    return instance1.createCompany(companyArgs.name, 1, companyArgs.email, { from: companyArgs.fromAccount });
  }).then(function(result) {
    console.log('Success');
    console.log('result');
    console.log(result);
    return result;
  }).catch(function(err) {
    console.log("ERROR! " + err.message);
    return err.message;
  });
}

export default createCompany;