import { useState } from "react";
import "./AuthForm.css";

function ForgotPassword({ setPage, companyName }) {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <form className="auth-form" onSubmit={handleReset}>
      <h1 className="company-name">{companyName}</h1>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Link</button>
      <span className="link" onClick={() => setPage("login")}>
        Back to Login
      </span>
    </form>
  );
}

export default ForgotPassword;
