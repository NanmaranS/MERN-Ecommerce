import mongoose from "mongoose";

const productsSchema=new mongoose.Schema(
    {

 
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

const Products=mongoose.model("Products",productsSchema)

export default Products