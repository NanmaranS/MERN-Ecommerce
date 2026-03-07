import { useEffect, useState } from 'react'
import axios from 'axios'
import Goback from './Goback.jsx'

export default function Order() {

  const [order, setOrder] = useState([])

  //  const BASE_URL = 'http://localhost:5001'//localhost
  
 const BASE_URL = "https://mern-ecommerce-back-j8ux.onrender.com"; 

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
      {order.length ===0 ?(<h2 className='text-center '>No Orders Found🤭</h2>):  
      (<div className="row g-5">
        { order.map((ord) => (
          <div
            className="col-12 col-md-6 col-lg-6 d-flex justify-content-center"
            key={ord._id}
          >
            <div className="card h-100" style={{ width: "70%" }}>
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

{ord.status === "confirmed" && (
  <div className="my-3 fade-in">
    <span className="badge bg-primary">
      🚚 Delivery in 3–5 business days
    </span>
  </div>
)}
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
      </div>)}
      

     
    </div>
  )
}
