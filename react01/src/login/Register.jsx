import { useState } from "react";
import "./AuthForm.css";

function Register({ setPage, companyName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(
      `Register with\nName: ${name}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <h1 className="company-name">{companyName}</h1>

      <h2>Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      <span className="link" onClick={() => setPage("login")}>
        Already have an account? Login
      </span>
    </form>
  );
}

export default Register;
