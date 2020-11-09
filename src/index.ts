import {Request, Response} from 'express';
import app from './app';
import * as dotenv from 'dotenv';
import { logger } from './utils/logger';
import * as Controllers from './controllers/index';
// loading environment variables
dotenv.config();

const port = process.env.APP_PORT || 4200;

// register all routes
Controllers.register(app);

app.get('/', (req: Request, res: Response) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
    logger.info('Server burning hot at ' + port)
})