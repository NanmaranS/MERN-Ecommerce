import  { useEffect, useState } from 'react'
import axios from 'axios'
import Goback from './Goback.jsx'
export default function Order() {

  const [order,setOrder]=useState([])
const token=localStorage.getItem('token')

   useEffect(()=>{

if (!token) {
    console.log("No token, redirect to login!");
  }
    axios.get('http://localhost:5001/api/orders',{

       headers: { 
      Authorization: `Bearer ${token}`   
    }
    })
    .then((res)=>{
  console.log(res.data);
  setOrder(res.data)
  
    })
    .catch((err)=>{
      console.log(err.message);
      
    })
   },[])

  const cancelOrd= async (prod)=>{
try {
  const canncelOrder=await axios.delete(`http://localhost:5001/api/orders/${prod._id}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  setOrder(prev=>prev.filter((del)=> del._id !== prod._id ))
  alert(`${prod.p_name} Order Cancel`)
} catch (error) {
  console.log(error.message);
  
}
  }

  return (
    <div className='container mt-5 pt-5 '>
      <Goback/>
      <div className="row g-5 ">

{order.length>0 && order.map((ord)=>(

   <div className="col-12 col-md-6 col-lg-12 d-flex justify-content-center" key={ord._id} >
    <div  className=" card h-100" style={{width:"60%"}}>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <img src={ord.p_image} className="pt-5 card-img-top" alt={ord.p_name}   style={{height:"500px", width:"400px"}}/>
      <div className="card-body text-center">
        <h5 className="card-title ">{ord.p_name}</h5>
        <p className="card-text mt-3"> <b> Price $ </b> {ord.p_price} </p>
     <p className="card-text"><b>Rating  </b>{ord.p_rating}</p>
        <p className="card-text"><b>Description :</b>  {ord.p_desc}</p>
        <div className='text-center p-4'>
      <button className='btn btn-outline-success me-5'>Confrim Order</button>
      <button onClick={()=>{cancelOrd(ord)}} className='btn btn-outline-danger'>Cancel Order</button>
      
       </div>
   </div>
         </div> 
    </div>
  </div>
))}
 
  </div>
  </div>)
}


