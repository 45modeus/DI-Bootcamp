import express from 'express';
import fs from 'fs/promises';

const router = express.Router();
const dataFile = './tasks.json';

router.get('/', (req, res) => {
    res.json({ message: 'Tasks route is working!' });
});

export default router;