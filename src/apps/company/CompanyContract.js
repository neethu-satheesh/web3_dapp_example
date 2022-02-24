import fs from 'fs';
import Web3 from 'web3';
import contract from '@truffle/contract';
import credentials from 'node-credentials';

var provider = new Web3.providers.HttpProvider(credentials.credentialsEnv.BLOCKCHAIN_SERVER_HOST);


const CompanyContractJson = JSON.parse(fs.readFileSync('src/apps/block_chain_contracts/build/contracts/CompanyContract.json', 'utf8'));

const networkId = credentials.credentialsEnv.NETWORK_ID;
const contractAddress = CompanyContractJson.networks[networkId].address;

var CompanyContract = contract({
  abi: CompanyContractJson.abi,
  address: contractAddress,
})

CompanyContract.setProvider(provider);


export { CompanyContract, contractAddress }
