import { Router } from 'express';
import { createTaskController } from './app/controller/createTaskController';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

router.post('/task/create', (req, res) => {
    res.json(
        createTaskController
    );
});

export default router;