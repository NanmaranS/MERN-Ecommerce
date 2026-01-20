import jwt from 'jsonwebtoken'

const authMiddleware=(req,res,next)=>{

  try {
    const authHeader =req.headers.authorization

   if(!authHeader || !authHeader.startsWith("Bearer ") ) return res.status(401).json("token not provided")

   const token=authHeader.split(" ")[1]
   
   const decode=jwt.verify(token,process.env.JWT_SECRET)
   req.user=decode
   next()
  } catch (error) {
    
    res.status(500).json(error.message)
  }  
}
export default authMiddleware