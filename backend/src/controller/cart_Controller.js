import cartModel from "../Models/Cart.js";
export async function postCart(req, res) {
  try {
    const body = req.body;
    body.userId = req.user.id;

    const existCart=await cartModel.findOne({
      userId:req.user.id,
      p_name:req.body.p_name
    })

    if(existCart){
       return res.status(409).json({
        message: "Product already in cart"
      })
    }
    const Postcart = await cartModel.create(body);
    res.status(201).json(Postcart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCart(req, res) {
  try {
    const Getcart = await cartModel.find({ userId: req.user.id });
    res.status(200).json(Getcart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCart(req, res) {
  try {
    const id = req.params.id;
    const cartRemove = await cartModel.findOneAndDelete({ _id: id, userId: req.user.id });
    res.status(200).json(cartRemove);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}