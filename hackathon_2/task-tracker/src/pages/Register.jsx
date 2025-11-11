import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask) return;

    try {
      await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: newTask }),
      });
      setNewTask("");
      fetchTasks();
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
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  const toggleComplete = async (id, completed, title) => {
    try {
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !completed, title }),
      });
      fetchTasks();
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
      <h2 style={{ textAlign: "center", color: "#343a40" }}>My Tasks</h2>
      <p style={{ textAlign: "center", color: "#495057" }}>
        Total tasks: {tasks.length}
      </p>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
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

      <form onSubmit={addTask} style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task..."
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ced4da",
          }}
        />
        <button
          type="submit"
          disabled={!newTask}
          style={{
            padding: "0.5rem 1rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            opacity: !newTask ? 0.6 : 1,
          }}
        >
          Add
        </button>
      </form>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading tasks...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem",
                borderBottom: "1px solid #dee2e6",
                borderRadius: "5px",
                marginBottom: "0.5rem",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e9ecef")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id, task.completed, task.title)}
                />
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.title}
                </span>
                <small style={{ marginLeft: "1rem", color: "#6c757d" }}>
                  {new Date(task.created_at).toLocaleString()}
                </small>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  padding: "0.25rem 0.5rem",
                  background: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
