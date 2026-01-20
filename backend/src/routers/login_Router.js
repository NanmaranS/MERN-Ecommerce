import express from 'express'
import { postLogin } from '../controller/login_Controller.js'
const LoginRouter=express.Router()

LoginRouter.post('/',postLogin)


export default LoginRouter