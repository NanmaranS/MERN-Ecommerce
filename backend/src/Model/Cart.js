import mongoose from "mongoose";

const cartSchema=new mongoose.Schema(
    {

 userId:{
  type:mongoose.Schema.Types.ObjectId,
       required:true,},
       
p_name:{
      type:String,
      required:true,
},

p_price:{
      type:Number,
      required:true,
},

p_rating:{
      type:String,
      required:true,
},
p_image:{
      type:String,
},

p_desc:{
      type:String,
      required:true,
}

},{timestamps:true}
)


cartSchema.index({ userId: 1, p_name: 1 }, { unique: true });

const cartModel=mongoose.model("Cart",cartSchema)

export default cartModel

