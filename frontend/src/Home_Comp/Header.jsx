import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <div className='d-flex bg-wh justify-content-around p-5 header'>
      <h2 className='hover_brand'>Marston & Co</h2>
      <input type='text' className='inp ps-2' style={{width:"800px",height:"30px"}}/>

      <div className='d-flex '>
     <Link to='/login' className='hover me-5 text-decoration-none head-link'><i class="bi bi-person-circle   "></i> Login</Link>
      <Link to='/cart' className='hover head-link'><i class="  bi bi-cart3  "></i> Cart</Link>
    <Link to='/orders'  className='hover ps-5 head-link'><i class="bi bi-box-seam-fill head-a  "> Orders</i> </Link>
      </div>
 
      
    </div>
  )
}
