import OrderModel from "../Model/Orders.js";

export  async function OrderPost(req,res){
    try {

      const body=req.body
      body.userId = req.user.id  

   const orderPost= await OrderModel.create(body)     
   res.status(201).json({msg:orderPost})
    } catch (error) {
      res.status(500).json(error.message)   
    }
 
}

export  async function getOrder(req,res){
    try {
      
    
   const orderGet= await OrderModel.find({userId:req.user.id})     
   res.status(200).json(orderGet)
    } catch (error) {
      res.status(500).json(error.message)  
    }
 
}


export async function deleteOrder(req,res){
 
  try {
    
     const id=req.params.id
  const deleteOrd=await OrderModel.findOneAndDelete({
      _id: id,
      userId: req.user.id 
  })
  if (!deleteOrd) {
      return res.status(404).json({ message: "Order not found" })
    }
  return res.status(200).json({Deleted:deleteOrd})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}