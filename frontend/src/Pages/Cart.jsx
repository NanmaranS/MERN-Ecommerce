import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Goback from './Goback'

export default function Cart() {

  const [cart, setCart] = useState([])
  const token = localStorage.getItem('token')
  const nav = useNavigate()

  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com";

  useEffect(() => {
    console.log(token);
    if (!token) {
      console.log("No token, redirect to login!");
    }

    axios.get(`${BASE_URL}/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err.message))

  }, [token])

  const orderCart = (cart) => {
    axios.post(`${BASE_URL}/api/orders`, {
      p_name: cart.p_name,
      p_image: cart.p_image,
      p_desc: cart.p_desc,
      p_price: cart.p_price,
      p_rating: cart.p_rating,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setCart(res.data)
        nav('/orders')
      })
      .catch((err) => console.log(err.message))
  }

  const cartCancel = (cart) => {
    axios.delete(`${BASE_URL}/api/cart/${cart._id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setCart(prev => prev.filter((del) => del._id !== cart._id))
        alert(`${cart.p_name} Cart Removed`)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <div className='container pt-5 mt-5'>
      <Goback />
      <div className="row g-5 mt-3 ">
        {cart.length > 0 && cart.map((cart) => (
          <div key={cart._id} className="col-12 col-md-6 col-lg-6">
            <div className="p-5 card text-center ">
              <div className='d-flex justify-content-center'>
                <img src={cart.p_image} className="card-img-top " alt="..." style={{ height: "400px", objectFit: "cover" }} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{cart.p_name}</h5>
                <p className="card-text"><b> Price $ </b>{cart.p_price}</p>
                <p className="card-text"><b>Rating  </b>⭐{cart.p_rating}</p>
                <p className="card-text" style={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis"
                }}>
                  <b>Description :</b>{cart.p_desc}
                </p>

                <button className='btn btn-success me-5' onClick={() => { orderCart(cart) }}>Order Now</button>
                <button className='btn btn-danger' onClick={() => { cartCancel(cart) }}>Remove Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
