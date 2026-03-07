import express from "express";
import { OrderPost, getOrder, deleteOrder, orderStatus } from "../controller/orderController.js";
// after (correct)
import authMiddleware from "../middleware/authMiddleware.js";
const orderRouter = express.Router();
orderRouter.post("/", authMiddleware, OrderPost);
orderRouter.patch("/:id", authMiddleware, orderStatus);
orderRouter.get("/", authMiddleware, getOrder);
orderRouter.delete("/:id", authMiddleware, deleteOrder);
export default orderRouter;