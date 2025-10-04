import express from 'express';
import * as fs from 'fs';

const router = express.Router();

const dataFile = './tasks.json';

//get tasks
router.get('/', (req, res) => {

    try {
        const data = fs.readFileSync(dataFile, 'utf-8');
        const tasks = JSON.parse(data);``
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to read tasks file' });
    }
});

//READ - get tasks by ID
router.get('/:id', (req, res) => {
    const data = fs.readFileSync(dataFile, 'utf-8');
    const tasks = JSON.parse(data);

    const id = parseInt(req.params.id); //get id from url
    const task = tasks.find(t => t.id === id); //find task by id

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

//CREATE task - post

router.post('/', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
     const { title } = req.body;

    //validate
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);
    fs.writeFileSync(dataFile, JSON.stringify(tasks));

    res.status(201).json(newTask);

    console.log('req.body:', req.body);

}); 

//Update - PUT

router.put('/:id', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    const id = parseInt(req.params.id); //get id from url
     const { title } = req.body;

    //validate
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const task = tasks.find(t => t.id === id); //find task by id

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    task.title = req.body.title; //update title

    fs.writeFileSync(dataFile, JSON.stringify(tasks));
    res.json(task);
});

//DELETE

router.delete('/:id', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

    const id = parseInt(req.params.id); //get id from url
    const index = tasks.findIndex(t => t.id === id); //find task by id

    if (index === -1) {
        return res.status(404).json({ error: 'Task not Found' });
    }

    tasks.splice(index, 1);

    fs.writeFileSync(dataFile, JSON.stringify(tasks));

    res.json({ message: 'Task deleted successfully' });
});

export default router;