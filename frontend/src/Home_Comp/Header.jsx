import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({setSearch}) {
  
  
 return (
  <header className="header">

    <div className="header-glow glow-one"></div>
    <div className="header-glow glow-two"></div>
    <div className="header-shine"></div>

    <div className="header-container">

      <div className="brand-section">
        <h2 className="brand">Marston & Co</h2>
      </div>

      <div className="search-section">
        <div className="search-box">

          <i className="bi bi-search search-icon"></i>

          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </div>

      <nav className="menu">

        <Link to="/login" className="head-link">
          <i className="bi bi-person-circle"></i>
          <span>Login</span>
        </Link>

        <Link to="/cart" className="head-link">
          <i className="bi bi-cart3"></i>
          <span>Cart</span>
        </Link>

        <Link to="/orders" className="head-link">
          <i className="bi bi-box-seam"></i>
          <span>Orders</span>
        </Link>

      </nav>

    </div>

  </header>
)
}