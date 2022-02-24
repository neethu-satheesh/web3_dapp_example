import credentials from 'node-credentials';
import pino from 'pino';

const logger = pino({ level: credentials.credentialsEnv.LOG_LEVEL || 'info' });


const log = (text) => {
    logger.debug(text);
}

export default log;
