import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Goback() {

  const nav=useNavigate()
  const goback=()=>{
    nav('/')
  }
  return (
    <div>
<button  type='button' onClick={goback} className="goback" aria-label="Go back">
  <i className="bi bi-box-arrow-left"></i>
</button>
    </div>
  )
}
