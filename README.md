# 🛒 MERN E-Commerce Application

A full-stack e-commerce web application built using **React.js, Express.js, MongoDB, and Mongoose**.

The application provides user registration and login, product browsing, product search, user-specific cart and orders, and secure authentication using **JWT and HTTP-only cookies**.

---

## 🌐 Live Website

https://mern-ecommerce-frontend-0jer.onrender.com

---

## 🚀 Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 🍪 JWT stored in HTTP-only Cookies
- 🔒 Password Hashing using bcrypt
- 🏠 Product Listing on Home Page
- 🔍 Search Products by Name
- 🛒 User-Specific Cart
- 📦 User-Specific Orders
- ➕ Create Cart and Order Data
- ❌ Delete Cart Items
- ❌ Cancel Orders
- 📱 Responsive and Clean UI

---

## 🔄 API Operations

- **GET** – Fetch products, search products, cart, orders, and user data
- **POST** – Create users, cart items, and orders
- **DELETE** – Remove cart items and cancel orders

---

## 🧑‍💻 Technologies Used

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Bootstrap
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JWT (JSON Web Token)
- HTTP-only Cookies
- bcrypt Password Hashing

---

## 🔐 Authentication & Security

- User registration and login system
- Passwords are hashed using bcrypt
- JWT is used for user authentication
- JWT is stored in HTTP-only cookies
- Protected API routes verify authenticated users
- Each user can access only their own cart and orders

---

## 🛒 Cart & Order System

### Cart

- Add products to cart
- View user-specific cart
- Remove products from cart

### Orders

- Create orders
- View user-specific orders
- Cancel orders

---

## 🔍 Product Search

Users can search for products by name.

The application fetches product data through the backend API and displays the matching products.

---

## 📁 Project Structure

~~~~text
MERN-Ecommerce/
│
├── backend/
│   └── src/
│       ├── config/
│       │   └── db.js
│       │
│       ├── controller/
│       │   ├── cart_Controller.js
│       │   ├── login_Controller.js
│       │   ├── orderController.js
│       │   ├── productsController.js
│       │   └── register_Controller.js
│       │
│       ├── middleware/
│       │   └── authMiddleware.js
│       │
│       ├── Models/
│       │   ├── Cart.js
│       │   ├── Orders.js
│       │   ├── ProductsList.js
│       │   └── Register.js
│       │
│       ├── routers/
│       │   ├── cartRouter.js
│       │   ├── loginRouter.js
│       │   ├── orderRouter.js
│       │   ├── registerRouter.js
│       │   └── router.js
│       │
│       └── main.js
│
├── frontend/
│   └── src/
│       ├── Home_Comp/
│       │   ├── Header.jsx
│       │   ├── Header.css
│       │   ├── Footer.jsx
│       │   ├── Footer.css
│       │   ├── Body.jsx
│       │   └── Body.css
│       │
│       ├── pages/
│       │   ├── Cart/
│       │   │   ├── Cart.jsx
│       │   │   └── Cart.css
│       │   │
│       │   ├── Order/
│       │   │   ├── Order.jsx
│       │   │   └── Order.css
│       │   │
│       │   ├── Login/
│       │   │   ├── Login.jsx
│       │   │   └── Login.css
│       │   │
│       │   ├── Register/
│       │   │   ├── Register.jsx
│       │   │   └── Register.css
│       │   │
│       │   └── Goback_Button/
│       │       ├── Goback.css
│       │       └── Goback.jsx
│       │
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
~~~~

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

~~~~bash
git clone https://github.com/NanmaranS/MERN-Ecommerce.git
cd MERN-Ecommerce
~~~~

### 2. Setup Backend

~~~~bash
cd backend
npm install
~~~~

Create a `.env` file:

~~~~env
PORT=5001
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
~~~~

Start the backend:

~~~~bash
npm start
~~~~

### 3. Setup Frontend

Open another terminal:

~~~~bash
cd frontend
npm install
npm run dev
~~~~

---

## 🌐 Deployment

- Frontend deployed using Render
- Backend deployed using Render
- MongoDB used as the database
- Environment variables configured in the deployment platform
- `.env` files are not committed to the repository

---

## 🎥 Project Demo

https://github.com/user-attachments/assets/e4c60a2a-fbcd-4c0a-8c29-9dfebda2b28a

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](https://github.com/user-attachments/assets/7af3f3a6-82ee-4e62-a212-8a78b6606896)

### 📝 Register Page

![Register Page](https://github.com/user-attachments/assets/db38462d-f0c8-42e1-965d-cfa20bbc7046)

### 🔐 Login Page

![Login Page](https://github.com/user-attachments/assets/cf7a8605-ba22-4f8f-bf2a-603fc1b734f2)

### 🛒 Cart Page

![Cart Page](https://github.com/user-attachments/assets/a5ff94ed-7759-47e0-b9e9-f61641cdafe1)

### 📦 Orders Page

![Orders Page](https://github.com/user-attachments/assets/1b5fc495-d2d5-4319-9dd6-c2daac367e95)

---

## 🎯 Project Highlights

- Built a full-stack e-commerce application using the MERN stack
- Implemented user registration and login
- Connected React frontend with Express REST APIs
- Used MongoDB with Mongoose for database management
- Implemented JWT authentication with HTTP-only cookies
- Implemented user-specific cart and order management
- Added product search functionality
- Built a responsive UI using Bootstrap and CSS

---

## 🙌 Author

**Nanmaran S**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
