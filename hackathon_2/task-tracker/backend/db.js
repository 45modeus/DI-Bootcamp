import pkg from "pg"
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "Loaded" : "Missing");

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432,
});

export async function tasksDB() {
    try {
        await pool.query("SELECT NOW()");
        console.log("Connected to postgreSQL");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    }
}