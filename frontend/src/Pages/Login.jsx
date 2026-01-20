import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Goback from './Goback';

export default function Login() {

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${BASE_URL}/api/login`, {
      username: Username,
      password: Password
    })
      .then((res) => {
        if (res.data.token) {
          alert("Login Success")
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center ' style={{ minHeight: "800px" }}>
        <form onSubmit={handleSubmit}>
          <div className='fixed-left-form'>
            <Goback />
          </div>
          <div className='shadow-sm mb-5 bg-white rounded p-5'>
            <h2 className='text-center mb-5 '>Login</h2>
            <div className="form-group mb-4" style={{ width: "400px" }}>
              <label htmlFor="exampleInputEmail1">Username</label>
              <input value={Username} onChange={(e) => { setUsername(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input value={Password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
              <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
            </div>
            <div className='text-center pt-4 '>
              <p>No account? <Link to='/register'>Create one</Link> !</p>
              <button type="submit" className="text-center btn btn-dark ">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
