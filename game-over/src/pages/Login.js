import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { LoginUser } from '../services/Auth'

const Login = ({ toggleAuthenticated, setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ userName: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ userName: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }
  return (
    <body className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <label htmlFor="userName">Username</label>
          <input
            onChange={handleChange}
            name="userName"
            type="userName"
            placeholder="username"
            value={formValues.userName}
            className="input"
            required
          />
        </div>
        <div className="user-box">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            className="input"
            required
          />
        </div>
        <div className="button-form">
          <button
            disabled={!formValues.userName || !formValues.password}
            id="submit"
          >
            Submit
          </button>
          <div id="register">
            <h3>Haven't made an account yet? &nbsp;</h3>
            <Link to="/register" id="register-link">
              <h3>Register Here</h3>
            </Link>
          </div>
        </div>
      </form>
    </body>
  )
}

export default Login
