import Products from "../Models/ProductsList.js";
export async function getProducts(req, res) {
  try {
    const getsProducts = await Products.find();
    res.status(200).json(getsProducts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

// export async function postProducts(req,res){ insert products
//     try{
//   const products=req.body 

//     const postData=await Products.insertMany(products)

//     return res.json({data:postData,count:postData.length})
//     }catch(err){
// res.json({msg:err.message})
//     }}