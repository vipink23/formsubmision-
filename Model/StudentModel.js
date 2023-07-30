import mongoose from 'mongoose'


const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    standard:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    mark:{
        type:String,
        required:true
    },
   

},
{timestamps:true}
)

const studentModel =mongoose.model('student', studentSchema)
export default studentModel