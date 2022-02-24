// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract CompanyContract {

  struct Company {
        int id;
        string name;
        string registrationId;
        string email;
    }

    int companyCount = 0;

    mapping(int => Company) company;

    function createCompany(string memory name, string memory registrationId, string memory email)
        public returns(string memory) {
            companyCount++;
            company[companyCount] = Company(
                                        companyCount,
                                        name,
                                        registrationId,
                                        email
                                    );
            return name;
    }

    function searchCompanyById(int inputId) public view returns(string memory) {

        string memory company_name = '';

        for(int i = 1; i <= companyCount; i++) {
            if(company[i].id == inputId) {
                company_name = company[i].name;
                break;
            }
        }
        return company_name;
    }
}
