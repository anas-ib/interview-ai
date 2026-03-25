import React from 'react'
import "../auth.form.scss"
import { Link,useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter you email'/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter your password'/>
          </div>

          <button class="button primary-button">Login</button>
        </form>

         <p>Don't have an account? <Link to="/Register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login