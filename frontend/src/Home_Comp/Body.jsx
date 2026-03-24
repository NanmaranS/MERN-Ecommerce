import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './Body.css'

export default function Body({ search }) {
  const [products, setProducts] = useState([])
  const nav = useNavigate()

  // const BASE_URL = 'http://localhost:5001' //localhost
  
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
      .catch(() => alert("Please login first"))
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
      .catch(() => alert("Please login first"))
  }

  return (
    <div className='container mt-5'>
      <div className='row g-4'>
        {
          products
            .filter((prod) =>
              prod.p_name.toLowerCase().includes(search.toLowerCase()) ||
              prod.p_desc.toLowerCase().includes(search.toLowerCase())
            )
            .map((prod) => (
              <div className='col-12 col-md-6 col-lg-3' key={prod._id}>
                <div className="card p-2 h-100 shadow-sm">

                  {/* Image container for clean alignment */}
                  <div
                    style={{
                      height: "250px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff",
                      padding: "10px"
                    }}
                  >
                   <img
  src={prod.p_image}
  alt={prod.p_name}
  style={{
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "6px"
  }}
/>
                  </div>

                  <div className="card-body text-center">
                    <h5>{prod.p_name}</h5>
                    <p><b>Price $</b> {prod.p_price}</p>
                    <p><b>Rating</b> ⭐{prod.p_rating}</p>

                    <p style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}>
                      <b>Description :</b> {prod.p_desc}
                    </p>

                  </div>

                  <div className="card-footer bg-white border-0 text-center">
                    <button
                      className="btn btn-outline-success m-3"
                      onClick={() => buyProd(prod)}
                    >
                      Buy Now
                    </button>

                    <button
                      className="btn btn-outline-danger"
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
  )
}