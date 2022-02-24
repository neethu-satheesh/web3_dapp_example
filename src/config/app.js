import throng from 'throng';
import { cpus } from 'os';
import startGraphqlExpressApp from './graphql.js';

//import dbPool from './clients/db';

throng({
    // Fn to call in master process (can be async)
    master: () => {
        console.log('Started master.');
    },

    // Fn to call in cluster workers (can be async)
    worker: async (workerId, disconnect) => {
        console.log(`Started worker ${ workerId }`);

        // startExpressApp({ workerId });
        startGraphqlExpressApp({ workerId });

        const shutdown = () => {
            console.log(`Worker ${ workerId } cleanup.`)
           // dbPool.endConnections();
            disconnect();
        };

        process.once('SIGTERM', shutdown);
        process.once('SIGINT', shutdown);
    },

    // Number of workers
    count: cpus().length,

    // Min time to keep cluster alive (ms)
    lifetime: Infinity,

    // Grace period between signal and hard shutdown (ms)
    grace: 5000,

    // Signals that trigger a shutdown (proxied to workers)
    signals: ['SIGTERM', 'SIGINT'],
})