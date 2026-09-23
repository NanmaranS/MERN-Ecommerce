import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './Body.css'

export default function Body({ search }) {
  const [products, setProducts] = useState([])
  const nav = useNavigate()

  // const BASE_URL = 'http://localhost:5000' //localhost
  
  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com" 

  useEffect(() => {
    axios.get(`${BASE_URL}/api/products`)
      .then((res) => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  const buyProd = (prod) => {
    axios.post(
      `${BASE_URL}/api/orders`,
      {
        p_name: prod.p_name,
        p_price: prod.p_price,
        p_rating: prod.p_rating,
        p_image: prod.p_image,
        p_desc: prod.p_desc
      },
      { withCredentials: true }
    )
      .then(() => {
        alert(`Processing ${prod.p_name}`)
        nav('/orders')
      })
.catch((err) => {
  if (err.response?.status === 401) {
    alert("Please login first")
  } else {
    alert("Something went wrong")
  }
})
  }

  const cartProd = (prod) => {
    axios.post(
      `${BASE_URL}/api/cart`,
      {
        p_name: prod.p_name,
        p_price: prod.p_price,
        p_rating: prod.p_rating,
        p_image: prod.p_image,
        p_desc: prod.p_desc
      },
      { withCredentials: true }
    )
      .then(() => nav('/cart'))
      
.catch((err) => {
  if (err.response?.status === 401) {
    alert("Please login first")
  } else if (err.response?.status === 409) {
    alert("This product is already in your cart")
  } else {
    alert("Something went wrong")
  }
})  }

return (
  <div className="products-page">

    {/* Animated background */}

    <div className="products-bg-glow glow-green"></div>
    <div className="products-bg-glow glow-orange"></div>
    <div className="products-bg-glow glow-blue"></div>


    <div className="container mt-5">

      <div className="row g-4">

        {
          products
            .filter((prod) =>
              prod.p_name
                .toLowerCase()
                .includes(search.toLowerCase()) ||

              prod.p_desc
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((prod) => (

              <div
                className="col-12 col-md-6 col-lg-3 product-column"
                key={prod._id}
              >

                <div className="card product-card p-2 h-100">


                  {/* IMAGE */}

                  <div className="product-image-container">

                    <div className="image-shine"></div>

                    <img
                      src={prod.p_image}
                      alt={prod.p_name}
                      className="product-image"
                    />

                  </div>


                  {/* PRODUCT DETAILS */}

                  <div className="card-body text-center">

                    {/* PRODUCT NAME */}

                    <h5 className="product-title">
                      {prod.p_name}
                    </h5>


                    {/* PRICE */}

                    <div className="product-price">

                      <span className="price-label">
                        Price
                      </span>

                      <span className="price-value">
                        ₹{prod.p_price}
                      </span>

                    </div>


                    {/* RATING */}

                    <div className="product-rating">

                      <span className="rating-label">
                        Rating
                      </span>

                      <span className="rating-value">
                        ⭐ {prod.p_rating}
                      </span>

                    </div>


                    {/* DESCRIPTION */}

                    <p className="product-description">
                      {prod.p_desc}
                    </p>

                  </div>


                  {/* BUTTONS */}

                  <div className="card-footer product-footer">

                    <button
                      className="btn btn-outline-success product-btn buy-btn"
                      onClick={() => buyProd(prod)}
                    >
                      Buy Now
                    </button>

                    <button
                      className="btn btn-outline-danger product-btn cart-btn"
                      onClick={() => cartProd(prod)}
                    >
                      Add Cart
                    </button>

                  </div>

                </div>

              </div>

            ))
        }

      </div>

    </div>

  </div>
)
}