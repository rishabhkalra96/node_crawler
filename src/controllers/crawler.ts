import express, {Request, Response} from 'express';
const router = express.Router();

router.post('/', async (req: Request, res:Response) => {
})

router.get('/health', async (req: Request, res: Response) => {
    res.status(200).send('All OK');
})

export const crawlerController = router