import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorage = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
