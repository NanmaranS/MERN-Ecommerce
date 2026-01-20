import bcrypt from 'bcrypt'
import registerModel from '../Model/Register.js'
export async function postregister(req,res){
    try {
const {username,password}=req.body


 if(!username || !password){
return res.status(400).json("username and password")
} 

const existingUser=await registerModel.findOne({username})

 if(existingUser){
    
return res.status(409).json("Username aldready taken")
}


const hash_pass=await bcrypt.hash(password,10)

const register=await registerModel.create({username,password:hash_pass})

res.status(201).json(register)

    } catch (error) {
        res.status(500).json(error.message)
    }
}