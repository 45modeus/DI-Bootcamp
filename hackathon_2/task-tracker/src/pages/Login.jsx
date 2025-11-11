import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Set page title dynamically
  useEffect(() => {
    document.title = "Task Tracker - Organize your day!";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "5rem auto",
        padding: "2rem",
        background: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#343a40", marginBottom: "0.5rem" }}>
        Task Tracker
      </h1>
      <p style={{ textAlign: "center", color: "#6c757d", marginBottom: "2rem" }}>
        Organize your tasks and boost productivity!
      </p>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
        />
        {error && <p style={{ color: "#dc3545" }}>{error}</p>}
        <button
          type="submit"
          style={{
            padding: "0.5rem",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        No account? <Link to="/register" style={{ color: "#007bff" }}>Register</Link>
      </p>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        <Link to="/forgot-password" style={{ color: "#007bff" }}>
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default Login;
