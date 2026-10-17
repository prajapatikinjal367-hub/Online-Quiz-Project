import { useState } from "react";

const API = "http://localhost:5000/api/auth";

function Auth({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setError("");
    const url = isRegister ? `${API}/register` : `${API}/login`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      onLogin(data.token, data.name);
    } catch (err) {
      setError("Cannot connect to the server");
    }
  };

  return (
    <div className="card">
      <h2>{isRegister ? "Register" : "Login"}</h2>

      {isRegister && (
        <input
          className="input"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
      )}
      <input
        className="input"
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="input"
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      {error && <p className="error">{error}</p>}

      <button className="main-btn" onClick={handleSubmit}>
        {isRegister ? "Register" : "Login"}
      </button>

      <p className="switch" onClick={() => setIsRegister(!isRegister)}>
        {isRegister
          ? "Already have an account? Login"
          : "Don't have an account? Register"}
      </p>
    </div>
  );
}

export default Auth;
