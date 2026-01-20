import express from 'express'
import {getProducts} from '../controller/productsController.js'
const router=express.Router()

router.get('/',getProducts)



export default router