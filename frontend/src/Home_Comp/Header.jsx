import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({setSearch}) {
  
  
  return (
    <div className="header py-4  d-flex align-items-center justify-content-between">

     
      <h2 className="brand">Marston & Co</h2>

     
      <div className="search-box">
        <input type="text" placeholder="Search products..." 
          onChange={(e)=>setSearch(e.target.value)}
/>
      </div>
   
      <div className="menu">
        <Link to="/login" className="head-link">
          <i className="bi bi-person-circle"></i> Login
        </Link>

        <Link to="/cart" className="head-link">
          <i className="bi bi-cart3"></i> Cart
        </Link>

        <Link to="/orders" className="head-link">
          <i className="bi bi-box-seam"></i> Orders
        </Link>
      </div>

    </div>
  )
}