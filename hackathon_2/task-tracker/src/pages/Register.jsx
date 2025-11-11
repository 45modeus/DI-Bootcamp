import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            // Optionally, auto-login after registration
            const loginRes = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const loginData = await loginRes.json();
            if (!loginRes.ok) throw new Error(loginData.message);

            localStorage.setItem("token", loginData.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", username);
            setToken(data.token);

            setToken(loginData.token);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "5rem auto", padding: "2rem", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center", color: "#343a40" }}>Register</h2>
            <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
                />
                {error && <p style={{ color: "#dc3545" }}>{error}</p>}
                <button type="submit" style={{ padding: "0.5rem", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Register
                </button>
            </form>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
                Already have an account? <Link to="/login" style={{ color: "#007bff" }}>Login</Link>
            </p>
        </div>
    );
}

export default Register;
