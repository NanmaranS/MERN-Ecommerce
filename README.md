# MERN Ecommerce

[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-blue)](https://vitejs.dev/)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange)](https://jwt.io/)

## Description
A full-stack MERN Ecommerce application with JWT authentication (localStorage), cart and order management.

## Features
User Authentication (JWT stored in localStorage), Add to Cart, Get Cart Items, Delete Cart Items, Create Order, Get Orders, Delete Orders, Clean MVC architecture, MongoDB + Mongoose, React + Vite frontend.

## Tech Stack
Backend: Node.js, Express, MongoDB, Mongoose, JWT  
Frontend: React, Vite, Axios  
Authentication: JWT (localStorage)

## Project Structure
backend/
- src/
  - controllers/
    - register_controller.js
    - login_controller.js
    - cart_controller.js
    - order_controller.js
  - routes/
    - register_router.js
    - login_router.js
    - cart_router.js
    - order_router.js
    - router.js
  - models/
    - register.js
    - cart.js
    - orders.js
  - middleware/
    - authMiddleware.js
  - config/
    - db.js
  - main.js
  - .env
- package.json

frontend/
- src/
  - components/
    - body.jsx
    - header.jsx
    - footer.jsx
  - pages/
    - cart.jsx
    - order.jsx
    - login.jsx
    - register.jsx
    - goback.jsx
  - App.jsx
  - main.jsx
  - styles/
- package.json
- vite.config.js

## Setup
Clone repository → cd backend → npm install → create .env → npm run dev → cd frontend → npm install → npm run dev

## API Endpoints
Auth: POST /api/register, POST /api/login  
Cart: POST /api/cart, GET /api/cart, DELETE /api/cart/:id  
Orders: POST /api/order, GET /api/order, DELETE /api/order/:id

## Authentication
JWT token stored in localStorage, Axios sends token in headers, backend verifies token using middleware.

## Notes
Do not push node_modules or .env to GitHub. JWT in localStorage is for learning/testing only. Use secure cookies and HTTPS in production.
