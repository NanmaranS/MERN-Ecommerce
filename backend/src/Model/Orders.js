import mongoose from "mongoose";

const orderSchema=new mongoose.Schema(
    {

userId:{
 type:mongoose.Schema.Types.ObjectId,
      required:true,},
 
p_name:{
      type:String,
      required:true,},

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

const OrderModel=mongoose.model("Orders",orderSchema)

export default OrderModel

