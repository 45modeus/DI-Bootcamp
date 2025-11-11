import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    // Always read the latest token & username
    const token = localStorage.getItem("token");

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (!token) {
            navigate("/login");
            return;
        }
        setUsername(storedUsername || "User");
        fetchTasks();
    }, [token, navigate]);

    const fetchTasks = async () => {
        const token = localStorage.getItem("token"); // read latest token
        if (!token) {
            navigate("/login");
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/tasks", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            setTasks(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error fetching tasks:", err);
            setTasks([]);
        }
    };


    const addTask = async (e) => {
        e.preventDefault();
        if (!newTask) return;

        try {
            const res = await fetch("http://localhost:5000/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title: newTask }),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.message || "Failed to add task");
            }

            const createdTask = await res.json();
            // Add the new task to the list immediately
            setTasks(prev => [...prev, createdTask]);
            setNewTask("");
        } catch (err) {
            console.error("Failed to add task:", err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/tasks/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            setTasks(prev => prev.filter(task => task.id !== id));
        } catch (err) {
            console.error("Failed to delete task:", err);
        }
    };

    const toggleComplete = async (id, completed, title) => {
        try {
            const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title, completed: !completed }),
            });
            if (!res.ok) throw new Error("Failed to update task");

            // Update state locally
            setTasks(prev =>
                prev.map(task =>
                    task.id === id ? { ...task, completed: !completed } : task
                )
            );
        } catch (err) {
            console.error(err);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    };

    return (
        <div
            style={{
                maxWidth: 600,
                margin: "2rem auto",
                padding: "2rem",
                background: "#f8f9fa",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
        >
            <div style={{ marginBottom: "1rem" }}>
                <h2 style={{ color: "#343a40" }}>Hello, {username} 👋</h2>
                <h3 style={{ color: "#495057" }}>Here are your tasks:</h3>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
                <button
                    onClick={logout}
                    style={{
                        padding: "0.5rem 1rem",
                        background: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Logout
                </button>
            </div>

            <form onSubmit={addTask} style={{ margin: "1rem 0", display: "flex" }}>
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New task..."
                    style={{
                        flex: 1,
                        padding: "0.5rem",
                        borderRadius: "5px 0 0 5px",
                        border: "1px solid #ced4da",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.5rem 1rem",
                        background: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "0 5px 5px 0",
                        cursor: "pointer",
                    }}
                >
                    Add
                </button>
            </form>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <li
                            key={task.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0.5rem 0",
                                borderBottom: "1px solid #dee2e6",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleComplete(task.id, task.completed, task.title)}
                                    style={{ marginRight: "0.5rem" }}
                                />
                                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                    {task.title}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteTask(task.id)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#dc3545",
                                    cursor: "pointer",
                                    fontSize: "1.2rem",
                                }}
                            >
                                ❌
                            </button>
                        </li>
                    ))
                ) : (
                    <p style={{ textAlign: "center", color: "#6c757d" }}>No tasks yet</p>
                )}
            </ul>
        </div>
    );
}

export default Dashboard;
