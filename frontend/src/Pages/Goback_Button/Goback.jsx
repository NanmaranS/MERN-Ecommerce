import React from 'react'
import { useNavigate } from "react-router-dom";
import './Goback.css'
export default function Goback() {

  const nav=useNavigate()
  const goback=()=>{
    nav('/')
  }
  return (
 
<div className="goback-wrapper">
  <button
    type="button"
    onClick={goback}
    className="goback"
    aria-label="Go back"
  >
    <i className="bi bi-arrow-left"></i>
    <span>Back</span>
  </button>
</div>
  )
}
