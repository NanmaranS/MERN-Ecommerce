import { useEffect, useState } from 'react'
import axios from 'axios'
import Goback from './Goback'

export default function Register() {

  const [Username,setUsername]=useState("")
  const[Password,setPassword]=useState("")
  const[register,setRegister]=useState(false)

  useEffect(()=>{
    if (register) {
      alert("Register Successfully");
      setRegister(false); 
    }
  },[register])

  const handleSubmit = (e) => {
    e.preventDefault(); // 
    console.log('Form submitted');

    axios.post('https://mern-ecommerce-back-j8ux.onrender.com/api/register',{
      username:Username,
      password:Password
    })
    .then((res)=>{
      console.log(res.data);
      setUsername('')
      setPassword('')
      setRegister(true)
    })
    .catch((err)=>{
      console.log(err.message);
    })
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center 'style={{minHeight:"800px"}}>
        <form onSubmit={handleSubmit}>
          <div className='fixed-left-form'>
            <Goback />
          </div>
          <div className='shadow-sm  mb-5 bg-white rounded p-5'>
            <h2 className='text-center mb-5'>Register</h2>
            <div className="form-group mb-4" style={{width:"400px"}}>
              <label htmlFor="exampleInputEmail1">Username</label>
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" value={Username} onChange={(e)=>{setUsername(e.target.value)}}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="form-group form-check">
              <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
            </div>
            <div className='text-center pt-4 '>
              <button type="submit" className="text-center btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
