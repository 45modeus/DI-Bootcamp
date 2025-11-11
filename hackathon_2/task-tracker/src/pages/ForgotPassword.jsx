import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to reset password");

      setMessage("Password reset successfully!");
      setTimeout(() => navigate("/login"), 2000);
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
      <h2 style={{ textAlign: "center" }}>Reset Password</h2>
      <form
        onSubmit={handleReset}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ced4da" }}
        />
        {error && <p style={{ color: "#dc3545" }}>{error}</p>}
        {message && <p style={{ color: "#28a745" }}>{message}</p>}
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
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
