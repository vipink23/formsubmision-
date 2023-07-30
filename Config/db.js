import mongoose from 'mongoose'

const connectDB=async()=>{
 try {
    const connect= await mongoose.connect("mongodb://127.0.0.1:27017/Address")
    console.log('db connected');
 } catch (error) {
    console.log('db not connected');
 }
}
export default connectDB