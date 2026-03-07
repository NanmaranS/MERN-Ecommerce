import OrderModel from "../Models/Orders.js";
export async function OrderPost(req, res) {
  try {
    const body = req.body;
    body.userId = req.user.id;
    const orderPost = await OrderModel.create(body);
    res.status(201).json(orderPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function orderStatus(req, res) {
  try {
    const id = req.params.id;
    const order = await OrderModel.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { status: "confirmed" },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getOrder(req, res) {
  try {
    const orderGet = await OrderModel.find({ userId: req.user.id });
    res.status(200).json(orderGet);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function deleteOrder(req, res) {
  try {
    const id = req.params.id;
    const deleteOrd = await OrderModel.findOneAndDelete({ _id: id, userId: req.user.id });
    if (!deleteOrd) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ Deleted: deleteOrd });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}