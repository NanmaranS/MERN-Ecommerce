import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import router from './routers/router.js'
import connectDB from './config/db.js'
import cors from 'cors'
import orderRouter from './routers/order_router.js'
import cartRouter from './routers/cart_Router.js'
import registerRouter from './routers/register_router.js'
import LoginRouter from './routers/login_Router.js'

const PORT = process.env.PORT || 5000

 connectDB()

const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/products',router)

app.use('/api/orders',orderRouter)

app.use('/api/cart',cartRouter)

app.use('/api/register',registerRouter)

app.use('/api/login',LoginRouter)

app.listen(PORT,()=>{
    console.log("server Listening");
    
})