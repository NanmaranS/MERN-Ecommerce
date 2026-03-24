import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routers/router.js";
import orderRouter from "./routers/orderRouter.js";
import cartRouter from "./routers/cartRouter.js";
import registerRouter from "./routers/registerRouter.js";
import LoginRouter from "./routers/loginRouter.js";

const PORT = process.env.PORT || 5001;
connectDB();

const app = express();

app.use(cors({
  origin: "https://mern-ecommerce-frontend-0jer.onrender.com",
  //  origin: "http://localhost:5173"
   credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Backend is running"));

app.use("/api/products", router);
app.use("/api/orders", orderRouter);
app.use("/api/cart", cartRouter);
app.use("/api/register", registerRouter);
app.use("/api/login", LoginRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));