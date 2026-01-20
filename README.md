# MERN Ecommerce

[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-blue)](https://vitejs.dev/)
[![JWT](https://img.shields.io/badge/JWT-Auth-orange)](https://jwt.io/)

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
Backend: Node.js, Express, MongoDB, Mongoose, JWT  
Frontend: React, Vite, Axios  
Authentication: JWT stored in localStorage

## Project Structure
backend/
  ├─ src/
  │  ├─ controllers/ (register_controller.js, login_controller.js, cart_controller.js, order_controller.js)
  │  ├─ routes/ (register_router.js, login_router.js, cart_router.js, order_router.js, router.js)
  │  ├─ models/ (register.js, cart.js, orders.js)
  │  ├─ middleware/ (authMiddleware.js)
  │  ├─ config/ (db.js)
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
  │  ├─ pages/ (cart.jsx, order.jsx, login.jsx, register.jsx, goback.jsx)
  │  ├─ App.jsx
  │  ├─ app.css
  │  ├─ index.css
  │  └─ main.jsx
  ├─ package.json
  └─ vite.config.js

## Setup & Run
1. Clone repository  
2. Backend: install dependencies, create .env, run dev server  
3. Frontend: install dependencies, run dev server  

## API Endpoints
- Auth: register, login  
- Cart: add item, get items, delete item  
- Orders: create order, get orders, delete order  

## Authentication
- JWT token stored in localStorage  
- Axios configured to send token in headers  
- Backend verifies token using middleware  

## Notes
- Do not push `node_modules` and `.env` to GitHub  
- JWT in localStorage is for learning/testing only  
- For production, use secure cookies and HTTPS
