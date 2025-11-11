import { pool } from "../db.js";
import bcrypt from "bcrypt";

export async function createUser(username, password) {
    const password_hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
    "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username",
    [username, password_hash]
  );
  return result.rows[0];
}

export async function findUserByUsername(username) {
    const result = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
    );
    return result.rows[0];
}