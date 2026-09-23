import { useEffect, useState } from 'react'
import axios from 'axios'
import Goback from '../Goback_Button/Goback.jsx'
import './Order.css'
import { Link } from 'react-router-dom'
export default function Order() {

  const [order, setOrder] = useState([])

  const BASE_URL = 'http://localhost:5000'
  // const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com" 

  useEffect(() => {
    axios.get(`${BASE_URL}/api/orders`, { 
      withCredentials: true 
    })
      .then((res) => {
        setOrder(res.data)
      })
      .catch((err) => {
        console.log(err.message)
        alert("Please login first")
      })
  }, [])

  const cancelOrd = async (prod) => {
    try {

      await axios.delete(
        `${BASE_URL}/api/orders/${prod._id}`,
        { withCredentials: true }
      )

      setOrder(prev => prev.filter((del) => del._id !== prod._id))

      alert(`${prod.p_name} Order Cancelled`)

    } catch (error) {
      console.log(error.message)
      alert("Please login first")
    }
  }

  const confrimOrd=(ord)=>{

    axios.patch(
      `${BASE_URL}/api/orders/${ord._id}`,
      {},
      { withCredentials: true }
    )

    .then((res) => {

      setOrder(prev =>
        prev.map(update =>
          update._id === ord._id ? res.data : update
        )
      )

      alert("Order Confirmed ✅")

    })

    .catch((error) => {
      console.log(error.message)
      alert("Please login first")
    })

  }




return (
  <div className="orders-page">

    <div className="orders-container container mt-5 pt-5">

      <Goback />

      <div className="orders-heading">
        <h2>My Orders</h2>
        <div className="heading-line"></div>
      </div>

      {order.length === 0 ? (

        <div className="empty-orders text-center">

          <div className="empty-icon">
            🛍️
          </div>

          <h2>No Orders Yet</h2>

          <p>
            Your purchased products will appear here.
          </p>

          <span>
            Find something you love and place your first order ❤️
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

        <div className="orders-grid">

          {order.map((ord) => (

            <div
              className="order-wrapper"
              key={ord._id}
            >

              <div className="order-card">

                <div className="order-image">

                  <img
                    src={ord.p_image}
                    alt={ord.p_name}
                  />

                  <div className="order-status">
                    {ord.status === "confirmed"
                      ? "Confirmed ✓"
                      : "Pending"}
                  </div>

                </div>

                <div className="order-content">

                  <h5 className="order-title">
                    {ord.p_name}
                  </h5>

                  <div className="order-info">

                    <span className="order-price">
                      ₹{ord.p_price}
                    </span>

                    <span className="order-rating">
                      ⭐ {ord.p_rating}
                    </span>

                  </div>

                  <p className="order-description">
                    {ord.p_desc}
                  </p>

                </div>

                <div className="order-actions">

                  <button
                    className={
                      ord.status === "confirmed"
                        ? "confirm-btn confirmed"
                        : "confirm-btn"
                    }
                    disabled={ord.status === "confirmed"}
                    onClick={() => confrimOrd(ord)}
                  >
                    {ord.status === "confirmed"
                      ? "Order Confirmed ✓"
                      : "Confirm Order"}
                  </button>

                  <button
                    onClick={() => cancelOrd(ord)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>

                </div>

                {ord.status === "confirmed" && (

                  <div className="delivery-info">
                    🚚 Delivery in 3–5 business days
                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  </div>
)







}