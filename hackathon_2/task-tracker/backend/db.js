import pkg from "pg"
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
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