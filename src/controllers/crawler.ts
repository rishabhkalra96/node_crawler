import express, {Request, Response} from 'express';
const router = express.Router();
import RedisClient from './../utils/redis-client';
import * as metaParser from './../utils/meta-parser';

router.get('/health', async (req: Request, res: Response) => {
    res.status(200).send('All OK');
})

router.post('/', async (req: Request, res:Response) => {
    if (req.body.hasOwnProperty('url') && req.body.url) {
        try {
            const result = await metaParser.crawlURL(req.body.url)
            res.status(200).send({...result});
        } catch(e) {
            res.status(200).send({});
        }
    }
});

export const crawlerController = router