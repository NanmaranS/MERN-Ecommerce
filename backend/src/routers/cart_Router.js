import express from 'express'
import {postCart,getCart,deleteCart} from '../controller/cart_Controller.js'
import authMiddleware from '../Middleware/authMiddleware.js'

const cartRouter=express.Router()

cartRouter.post('/',authMiddleware,postCart)

cartRouter.get('/',authMiddleware,getCart)

 cartRouter.delete('/:id',authMiddleware,deleteCart)

export default cartRouter