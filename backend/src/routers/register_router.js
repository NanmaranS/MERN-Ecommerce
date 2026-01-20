import express from 'express'
import { postregister } from '../controller/register_Controller.js'
const registerRouter=express.Router()

registerRouter.post('/',postregister)

export default registerRouter