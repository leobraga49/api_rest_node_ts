import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello, World!');
});

router.post('/', (req, res) => {
    return res.json('Hello, World!');
});

export { router };