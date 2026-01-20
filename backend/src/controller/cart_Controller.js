import cartModel from '../Model/Cart.js'

export async function postCart (req,res){
    try {
    const body=req.body
 body.userId=req.user.id
   const Postcart=await cartModel.create(body)
   res.status(201).json(Postcart)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export async function getCart (req,res){
    try {

   const Getcart= await cartModel.find({userId:req.user.id})
   res.status(201).json(Getcart)
    }
    catch (error) {
        res.status(500).json({error:error.message})
    }
}


export async function deleteCart(req,res){
    try {
        const id=req.params.id
    const cartRemove=await cartModel.findOneAndDelete({
        userId:id,
       _id: req.user.id
    })
    res.status(200).json(cartRemove)
    } catch (error) {
        res.status(500).json(error.message)
    }
}