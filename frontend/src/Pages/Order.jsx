import { useEffect, useState } from 'react'
import axios from 'axios'
import Goback from './Goback.jsx'

export default function Order() {

  const [order, setOrder] = useState([])

  // const BASE_URL = 'http://localhost:5001'
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
   
    <div className='container mt-5 pt-5'>

      <Goback />

      {order.length ===0 ?

      (<h2 className='text-center'>No Orders Found 🤭</h2>)

      :

      (<div className="row g-4 mt-3">

        {order.map((ord) => (

          <div
            className="col-12 col-md-6 col-lg-4"
            key={ord._id}
          >

            <div className="card h-100 shadow-sm">

              <div
                style={{
                  height: "250px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={ord.p_image}
                  alt={ord.p_name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              <div className="card-body text-center">

                <h5>{ord.p_name}</h5>

                <p><b>Price $</b> {ord.p_price}</p>

                <p><b>Rating</b> ⭐{ord.p_rating}</p>

                <p><b>Description :</b> {ord.p_desc}</p>

              </div>

              <div className='card-footer text-center bg-white border-0'>

                <button
                  className={`btn ${
                    ord.status === "confirmed"
                      ? "btn-success"
                      : "btn-outline-success"
                  } me-3`}
                  disabled={ord.status === "confirmed"}
                  onClick={() => confrimOrd(ord)}
                >
                  {ord.status === "confirmed"
                    ? "Order Confirmed ✅"
                    : "Confirm Order"}
                </button>

                <button
                  onClick={() => cancelOrd(ord)}
                  className='btn btn-outline-danger'
                >
                  Cancel Order
                </button>

                {ord.status === "confirmed" && (
                  <div className="mt-3">
                    <span className="badge bg-primary">
                      🚚 Delivery in 3–5 business days
                    </span>
                  </div>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>)}

    </div>
  )
}