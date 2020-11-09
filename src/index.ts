import express from 'express';
const expressApp = express();
import {App} from './app';
import * as dotenv from 'dotenv';
import { logger } from './utils/logger';
import * as Controllers from './controllers/index';
// loading environment variables
dotenv.config();

const port = process.env.APP_PORT || 4200;
// register App
App.init(expressApp);
// register all routes
Controllers.register(expressApp);

expressApp.listen(port, () => {
    logger.info('Server burning hot at ' + port)
})