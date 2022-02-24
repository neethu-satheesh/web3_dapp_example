const paths = require.main.path.split('/');
const rootPath = paths.slice(0, -1).join('/');

const typedefFiles = [
    rootPath + '/apps/company/company_typedef.graphql',
    rootPath + '/apps/transaction/transaction_typedef.graphql',
    rootPath + '/apps/graphql/index.graphql'
]

export default typedefFiles;