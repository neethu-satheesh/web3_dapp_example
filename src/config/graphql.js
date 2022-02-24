import credentials from 'node-credentials';
import express from 'express';
import graphqlServer from '../apps/graphql/index.js'; 
import log from './logger.js';
import normalizePort from './port.js';

const startGraphqlExpressApp = async (workerId) => {
    const app = express();

    // ...
    // app routes, etc
    // ...

    await graphqlServer.start()
    graphqlServer.applyMiddleware({
        app,
    });
    const serverName = workerId ? `graphql server worker ${workerId}` : 'graphql server';
    const port = normalizePort(credentials.credentialsEnv.GRAPHQL_PORT);
    const server = app.listen(port, () =>
        log(`${serverName} listening on port ${server.address().port}`)
    );
}

export default startGraphqlExpressApp;