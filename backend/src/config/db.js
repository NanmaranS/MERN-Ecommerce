import mongoose from 'mongoose'

const connectDB= async ()=>{
    try{
await mongoose.connect(process.env.MONGODB_URL)
console.log("Mongodb Connectred");

    }catch(er){
console.log(`Error${er.message}`);

    }
}
export default connectDB