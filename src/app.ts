import express, {NextFunction, Request, Response} from 'express';
import {logger} from './utils/logger';
import RedisClient from './utils/redis-client'

function _init(Application: express.Application) {
    Application.use(express.json());
    Application.use(express.urlencoded({ extended: true }));

    if (['y', 'yes'].includes(process.env.ENABLE_CACHING)) {
        logger.info(`enabling redis cache`);
        RedisClient.setupClient();
    }

    Application.use('*', async (req: Request, res: Response, next: NextFunction) => {
        logger.info(`[${req.method.toUpperCase()}] : ${req.originalUrl}`)
        next();
    })
}

export const App = {
    init: _init
};