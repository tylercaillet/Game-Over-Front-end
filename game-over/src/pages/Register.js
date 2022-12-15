import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const initialFormValues = {
    userName: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState({ initialFormValues })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      password: formValues.password
    })
    setFormValues(initialFormValues)
    navigate('/login')
  }

  return (
    <body className="login-box">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <label className="label" htmlFor="userName">
            Username
          </label>
          <input
            className="input"
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="username"
            value={formValues.userName}
            required
          />
        </div>
        <div className="user-box">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="user-box">
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="input"
            onChange={handleChange}
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <div className="button-form">
          <button
            disabled={
              !formValues.userName ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
            id="submit"
          >
            Submit
          </button>
          <Link to={'/login'}>
            <button id="submit2">Already A User?</button>
          </Link>
        </div>
      </form>
    </body>
  )
}

export default Register
