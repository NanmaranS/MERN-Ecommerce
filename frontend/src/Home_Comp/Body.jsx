import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Body.css'

export default function Body() {
  const [products, setProducts] = useState([])
  const nav = useNavigate()
  const token = localStorage.getItem("token");

  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const buyProd = (prod) => {
    if (!token) {
      alert("Please login first");
      return;
    }

    axios.post(`${BASE_URL}/api/orders`, {
      p_name: prod.p_name,
      p_price: prod.p_price,
      p_rating: prod.p_rating,
      p_image: prod.p_image,
      p_desc: prod.p_desc
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        alert(`Processing ${prod.p_name}`)
        nav('/orders')
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  const cartProd = (prod) => {
    axios.post(`${BASE_URL}/api/cart`, {
      p_name: prod.p_name,
      p_price: prod.p_price,
      p_rating: prod.p_rating,
      p_image: prod.p_image,
      p_desc: prod.p_desc
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        nav('/cart')
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <div className='container mt-5'>
      <div className='row g-5'>
        {products.length > 0 && products.map((prod) => (
          <div className='col-12 col-md-6 col-lg-3' key={prod._id}>
            <div className="card p-2">
              <img src={prod.p_image} className="card-img-top" alt={prod.p_name} height="400px" style={{ objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">{prod.p_name}</h5>
                <p><b> Price $ </b>{prod.p_price}</p>
                <p><b>Rating  </b>⭐{prod.p_rating}</p>
                <p className="card-text" style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                  <b>Description :</b> {prod.p_desc}
                </p>
              </div>
              <div className="card-footer bg-white border-0 text-center">
                <button className="btn btn-outline-success m-3" onClick={() => { buyProd(prod) }}>Buy Now</button>
                <button className="btn btn-outline-danger" onClick={() => { cartProd(prod) }}>Add Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
