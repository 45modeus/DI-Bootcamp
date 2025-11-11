// backend/routes/auth.js
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUser, findUserByUsername } from "../models/userModel.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// Signup route
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(400).json({ message: "Username and password are required" });

        const existingUser = await findUserByUsername(username);
        if (existingUser)
            return res.status(400).json({ message: "Username already exists" });

        const newUser = await createUser(username, password);
        res.status(201).json({ message: "User Created", user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Login route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await findUserByUsername(username);

        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "2h" });

        res.json({ message: "Login successful", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
