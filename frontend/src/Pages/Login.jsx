import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Goback from './Goback'

export default function Login() {

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const nav = useNavigate()

  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com"

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
        alert("Login Success")
        nav('/') 
      })
      .catch((err) => {
        alert("Invalid login")
        console.log(err.message)
      })
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: "800px" }}>
      <form onSubmit={handleSubmit}>
        <div className='fixed-left-form'>
          <Goback />
        </div>

        <div className='shadow-sm mb-5 bg-white rounded p-5'>
          <h2 className='text-center mb-5'>Login</h2>

          <div className="form-group mb-4" style={{ width: "400px" }}>
            <label>Username</label>
            <input
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className='text-center pt-4'>
            <p>No account? <Link to='/register'>Create one</Link></p>
            <button type="submit" className="btn btn-dark">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}
