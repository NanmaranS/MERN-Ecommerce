# MERN Ecommerce

[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT) [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/) [![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green)](https://www.mongodb.com/) [![Vite](https://img.shields.io/badge/Vite-5.x-blue)](https://vitejs.dev/) [![JWT](https://img.shields.io/badge/JWT-Auth-orange)](https://jwt.io/)

A full-stack MERN Ecommerce application with JWT authentication (localStorage), cart and order management.

## Features
- User Authentication (JWT stored in localStorage)
- Add to Cart
- Get Cart Items
- Delete Cart Items
- Create Order
- Get Orders
- Delete Orders
- Clean project structure with routes, controllers, models, middleware
- MongoDB + Mongoose
- React + Vite frontend

## Tech Stack
**Backend:** Node.js, Express, MongoDB, Mongoose, JWT  
**Frontend:** React, Vite, Axios  
**Authentication:** JWT stored in localStorage

## Project Structure
```txt
backend/
├─ src/
│  ├─ controllers/
│  │  ├─ register_controller.js
│  │  ├─ login_controller.js
│  │  ├─ cart_controller.js
│  │  └─ order_controller.js
│  ├─ routes/
│  │  ├─ register_router.js
│  │  ├─ login_router.js
│  │  ├─ cart_router.js
│  │  ├─ order_router.js
│  │  └─ router.js
│  ├─ models/
│  │  ├─ register.js
│  │  ├─ cart.js
│  │  └─ orders.js
│  ├─ middleware/
│  │  └─ authMiddleware.js
│  ├─ config/
│  │  └─ db.js
│  ├─ main.js
│  └─ .env
├─ package.json

frontend/
├─ src/
│  ├─ components/
│  │  ├─ body.jsx
│  │  ├─ body.css
│  │  ├─ header.jsx
│  │  ├─ header.css
│  │  ├─ footer.jsx
│  │  └─ footer.css
│  ├─ pages/
│  │  ├─ cart.jsx
│  │  ├─ order.jsx
│  │  ├─ login.jsx
│  │  ├─ register.jsx
│  │  └─ goback.jsx
│  ├─ App.jsx
│  ├─ app.css
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```
Setup (All in one)

Clone repository → Backend: cd backend → npm install → create .env → npm run dev → Frontend: cd frontend → npm install → npm run dev

API Endpoints
Auth
Route	Method	Description
/api/register	POST	Register new user
/api/login	POST	Login user & get JWT token
Cart
Route	Method	Description
/api/cart	POST	Add item to cart
/api/cart	GET	Get all cart items
/api/cart/:id	DELETE	Delete cart item
Orders
Route	Method	Description
/api/order	POST	Create order
/api/order	GET	Get all orders
/api/order/:id	DELETE	Delete order
Authentication

JWT token stored in localStorage

Axios configured to send token in headers

Backend verifies token using middleware

Notes

Do not push node_modules and .env to GitHub

JWT in localStorage is for learning/testing only

For production, use secure cookies and HTTPS


✅ This is **neat, professional, and one block**.  
Copy once and paste once.

If you want the **same but with fewer lines (more compact)** or **more professional style**, tell me.
