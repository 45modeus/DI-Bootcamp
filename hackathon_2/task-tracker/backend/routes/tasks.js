import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import { getTasksByUser, createTask, updateTask, deleteTask, getTaskById } from "../models/taskModel.js";

const router = express.Router();

router.use(authenticateToken);

router.get("/", async (req, res) => {
    try {
        const tasks = await getTasksByUser(req.user.id);
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) return res.status(400).json({ message: "Title is required" });

        const task = await createTask(req.user.id, title);
        res.status(201).json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

router.put("/:id", async (req, res) => {
    const { completed, title } = req.body;
    try {
        const existingTask = await getTaskById(req.params.id);
        if (!existingTask) return res.status(404).json({ message: "Task not found" });

        const updatedTitle = title ?? existingTask.title;
        const updatedCompleted = completed ?? existingTask.completed;

        const updatedTask = await updateTask(req.params.id, updatedTitle, updatedCompleted);
        res.json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});



router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await deleteTask(id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
