import  { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Goback from './Goback';
export default function Login() {

  const[Username,setUsername]=useState("")
  const[Password,setPassword]=useState("")

   const handleSubmit = (e) => {
    e.preventDefault(); 

    axios.post("http://localhost:5001/api/login",{
      username:Username,
      password:Password
    })
    .then((res)=>{
  if(res.data.token) {
    alert("Login Success")
    localStorage.setItem("token", res.data.token);
  }  
    
   })
    .catch((err)=>console.log(err.message))
  }
  return (
    <div>

     <div className='d-flex justify-content-center align-items-center 'style={{minHeight:"800px"}}>
      <form onSubmit={handleSubmit}>
         <div className='fixed-left-form'>
        <Goback />
        </div>
        <div className='shadow-sm  mb-5 bg-white rounded p-5'>
        <h2 className='text-center mb-5 '>Login</h2>
  <div class="form-group mb-4" style={{width:"400px"}}>
    <label htmlFor="exampleInputEmail1">Username</label>
    <input value={Username} onChange={(e)=>{setUsername(e.target.value)}} type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Useranme"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
     <small id="emailHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>

  </div>
  <div className='text-center pt-4 '>
    <p className=''> No account? <Link to='/register'>Create one</Link> !</p>
  <button type="submit" class="  text-center btn btn-dark ">Submit</button>
  </div>
  </div>
</form>

    </div>
    </div>
  )
}
