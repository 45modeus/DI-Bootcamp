import express from "express";
import { authenticateToken } from "../middleware/auth.js";
import { getTasksByUser, createTask, updateTask, deleteTask } from "../models/taskModel.js";

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
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTask = await updateTask(id, title, completed);
    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
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
