import { useState } from 'react'
import axios from 'axios'
import Goback from '../Goback_Button/Goback'
import './Register.css'
import { Link,useNavigate } from 'react-router-dom';
export default function Register() {
  //const BASE_URL = 'http://localhost:5000'
   const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com" 

  const [Username,setUsername]=useState("")
  const[Password,setPassword]=useState("")
  const[error,setError]=useState("")
  const [success, setSuccess] = useState("")

  const nav=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault(); // 
    console.log('Form submitted');

    axios.post(`${BASE_URL}/api/register`,{
      username:Username,
      password:Password
    })
    .then((res)=>{
      setUsername('')
      setPassword('')
      setError("")
       setSuccess("Registration successful!")

      
      setTimeout(() => {
    nav('/login')
  }, 1000)
    })
    .catch((err)=>{
      setError("Registration failed. Please try again.")
      console.log(err.message);
    })
  }

  return (
  <div className="register-page">

    <form onSubmit={handleSubmit} className="register-card">

      <div className="register-back">
        <Goback />
      </div>

      <div className="register-content">

        <div className="register-heading">
          <span className="register-badge">CREATE YOUR ACCOUNT</span>

          <h2>Register</h2>

          <p>Join Marston & Co. today</p>
        </div>

        <div className="register-form">

          <div className="register-input-group">
            <label>Username</label>

            <input
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
            />
          </div>

          <div className="register-input-group">
            <label>Password</label>

            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Create a password"
            />
          </div>

          {error && (
            <p className="register-error">
              {error}
            </p>
          )}
          {success && (
            <div className="success-popup">
              <div className="success-box">
                <span>✓</span>
                <p>{success}</p>
              </div>
            </div>
          )}
          <p className="register-note">
            Your password is securely protected.
          </p>

          <div className="register-bottom">

            <p>
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>

            <button type="submit" className="register-button">
              Create Account
            </button>

          </div>

        </div>

      </div>

    </form>

  </div>
)
}
