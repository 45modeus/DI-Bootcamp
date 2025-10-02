import express from 'express';
import fs from 'fs';
import taskRoutes from './routes/tasks.js';
const FILE = './tasks.json';
const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});