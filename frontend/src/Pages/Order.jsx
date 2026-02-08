import { useEffect, useState } from 'react'
import axios from 'axios'
import Goback from './Goback.jsx'

export default function Order() {

  const [order, setOrder] = useState([])

  const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com"

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
        {
          withCredentials: true 
        }
      )

      setOrder(prev => prev.filter((del) => del._id !== prod._id))
      alert(`${prod.p_name} Order Cancelled`)
    } catch (error) {
      console.log(error.message)
      alert("Please login first")
    }
  }

  return (
    <div className='container mt-5 pt-5'>
      <Goback />

      <div className="row g-5">
        {order.length > 0 && order.map((ord) => (
          <div
            className="col-12 col-md-6 col-lg-12 d-flex justify-content-center"
            key={ord._id}
          >
            <div className="card h-100" style={{ width: "60%" }}>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <img
                  src={ord.p_image}
                  className="pt-5 card-img-top"
                  alt={ord.p_name}
                  style={{ height: "500px", width: "400px" }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{ord.p_name}</h5>
                  <p><b>Price $</b> {ord.p_price}</p>
                  <p><b>Rating</b> ⭐{ord.p_rating}</p>
                  <p><b>Description :</b> {ord.p_desc}</p>

                  <div className='text-center p-4'>
                    <button className='btn btn-outline-success me-5'>
                      Confirm Order
                    </button>
                    <button
                      onClick={() => cancelOrd(ord)}
                      className='btn btn-outline-danger'
                    >
                      Cancel Order
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
