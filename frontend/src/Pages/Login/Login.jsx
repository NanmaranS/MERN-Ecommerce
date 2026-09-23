import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Goback from '../Goback_Button/Goback'
import './Login.css'
export default function Login() {

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const[error,setError]=useState("")
  const nav = useNavigate()

    const BASE_URL = 'http://localhost:5000'//localhost
  
  //  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com"; 

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(
      `${BASE_URL}/api/login`,
      {
        username: Username,
        password: Password
      },
      {
        withCredentials: true // 
      }
    )
      .then(() => {
        setError("")
        nav('/') 
      })
      .catch((err) => {
        setError("Invalid username or password")
        console.log(err.message)
      })
  }


return (
  <div className="login-page">

    <form onSubmit={handleSubmit} className="login-card">

      <div className="login-back">
        <Goback />
      </div>

      <div className="login-content">

        <div className="login-heading">
          <span className="login-badge">WELCOME BACK</span>

          <h2>Login</h2>

          <p>Sign in to continue to Marston & Co</p>
        </div>

        <div className="login-form">

          <div className="login-input-group">
            <label>Username</label>

            <input
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <div className="login-bottom">

            <p>
              No account?
              <Link to="/register"> Create one</Link>
            </p>

            <button type="submit" className="login-button">
              Login
            </button>

          </div>

        </div>

      </div>

    </form>

  </div>
)





}
