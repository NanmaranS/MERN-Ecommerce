import express from 'express'
import {OrderPost,getOrder,deleteOrder} from '../controller/orderController.js'
import authMiddleware from '../Middleware/authMiddleware.js'

const orderRouter=express.Router()

orderRouter.post('/',authMiddleware,OrderPost)
orderRouter.get('/',authMiddleware,getOrder)
 orderRouter.delete('/:id',authMiddleware,deleteOrder)

export default orderRouter