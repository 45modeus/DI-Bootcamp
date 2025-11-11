import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask) return;

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
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  const toggleComplete = async (id, completed, title) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, completed: !completed }),
    });
    fetchTasks();
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#343a40" }}>My Tasks</h2>
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
        {tasks.map((task) => (
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
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
