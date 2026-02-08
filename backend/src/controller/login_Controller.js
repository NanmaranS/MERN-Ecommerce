import jwt from 'jsonwebtoken'
import registerModel from '../Model/Register.js'
import bcrypt from 'bcrypt'

export async function postLogin(req,res){
  
  try {
    
const {username,password}=req.body

if(!username || !password) return res.status(400).json("username and password are requires")

const user=await registerModel.findOne({username})

if(!user) return res.status(401).json("username or password invalid")

 const checkPass= await bcrypt.compare(password,user.password)
 
 if(!checkPass) return res.status(401).json("username or password invalid")

  const token=jwt.sign(
    {id:user._id,username:user.username}, process.env.JWT_SECRET,
    {expiresIn:"10d"}
  )
  res.cookie("token", token, {
  httpOnly: true,
    secure: true,     
  sameSite: "none"
}).status(200).json({token})
  } catch (error) {
    res.status(500).json(error.message)
  }
}

