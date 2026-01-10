import { useState } from 'react'
import './AuthForm.css'

function Login({ setPage , companyName}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    alert(`Login with\nEmail: ${email}\nPassword: ${password}`)
  }

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <h1 className="company-name">{companyName}</h1>
      <h2>Login</h2>
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
      <button type="submit">Login</button>

      <span className="link" onClick={() => setPage('forgot')}>
        Forgot Password?
      </span>
      <span className="link" onClick={() => setPage('register')}>
        Don't have an account? Sign up
      </span>
    </form>
  )
}

export default Login
