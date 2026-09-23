import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Goback from '../Goback_Button/Goback'

import './Cart.css'
export default function Cart() {

  const [cart, setCart] = useState([])
  const nav = useNavigate()

  // const BASE_URL = 'http://localhost:5000'
   const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com" 

  useEffect(() => {

    axios.get(`${BASE_URL}/api/cart`, {
       withCredentials: true 
    })
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err.message))

  }, [])

  const orderCart = (cart) => {
    axios.post(`${BASE_URL}/api/orders`, {
      p_name: cart.p_name,
      p_image: cart.p_image,
      p_desc: cart.p_desc,
      p_price: cart.p_price,
      p_rating: cart.p_rating,
    }, {
      withCredentials: true 
    })
      .then((res) => {
        nav('/orders')
      })
      .catch((err) => console.log(err.message))
  }

  const cartCancel = (cart) => {
    axios.delete(`${BASE_URL}/api/cart/${cart._id}`, {
      withCredentials: true 
    })
      .then(() => {
        setCart(prev => prev.filter((del) => del._id !== cart._id))
        alert(`${cart.p_name} Cart Removed`)
      })
      .catch((err) => console.log(err.message))
  }
 
return (
  <div className="cart-page">

    <div className="cart-container container mt-5 pt-5">

      <Goback />

      <div className="cart-heading">
        <h2>My Cart</h2>
        <div className="heading-line"></div>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart text-center">

          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>Your Cart is Empty</h2>

          <p>
            Products you add to your cart will appear here.
          </p>

          <span>
            Find something you love and add it to your cart ❤️
          </span>

          <br />

          <Link
            to="/"
            className="explore-link"
          >
            Explore Products
          </Link>

        </div>

      ) : (

        <div className="cart-grid">

          {cart.map((cartItem) => (

            <div
              className="cart-wrapper"
              key={cartItem._id}
            >

              <div className="cart-card">

                <div className="cart-image">

                  <img
                    src={cartItem.p_image}
                    alt={cartItem.p_name}
                  />

                  <div className="cart-status">
                    In Cart
                  </div>

                </div>

                <div className="cart-content">

                  <h5 className="cart-title">
                    {cartItem.p_name}
                  </h5>

                  <div className="cart-info">

                    <span className="cart-price">
                      ₹{cartItem.p_price}
                    </span>

                    <span className="cart-rating">
                      ⭐ {cartItem.p_rating}
                    </span>

                  </div>

                  <p className="cart-description">
                    {cartItem.p_desc}
                  </p>

                </div>

                <div className="cart-actions">

                  <button
                    className="order-btn"
                    onClick={() => orderCart(cartItem)}
                  >
                    Order Now
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => cartCancel(cartItem)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  </div>
)


}