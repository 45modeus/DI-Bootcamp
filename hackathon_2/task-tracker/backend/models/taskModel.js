import { pool } from "../db.js";

// Get all tasks for a user
export async function getTasksByUser(userId) {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC",
    [userId]
  );
  return result.rows;
}

// Create a new task
export async function createTask(userId, title) {
  const result = await pool.query(
    "INSERT INTO tasks (user_id, title) VALUES ($1, $2) RETURNING *",
    [userId, title]
  );
  return result.rows[0];
}

// Update a task
export async function updateTask(id, title, completed) {
  const result = await pool.query(
    "UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
    [title, completed, id]
  );
  return result.rows[0];
}

// Delete a task
export async function deleteTask(id) {
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
}
