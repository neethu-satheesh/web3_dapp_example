import credentials from 'node-credentials';
import express from 'express';
import log from './logger.js';
import normalizePort from './port.js';

const startExpressApp = (workerId) => {
    const app = express();

    // ...
    // app routes, etc
    // ...


    const serverName = workerId ? `worker ${workerId}` : 'server';
    const port = normalizePort(credentials.credentialsEnv.PORT);
    const server = app.listen(port, () =>
        log(`${serverName} listening on port ${server.address().port}`)
    );
}

export default startExpressApp;