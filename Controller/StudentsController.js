import studentModel from "../Model/StudentModel.js"


const addStudent= async (req,res)=>{
    try {
        const {name,standard,subject,mark}=req.body
        if(!name || !standard || !subject || !mark){
            res.json('all field is required')
        }else{
            const newStudent= await studentModel.create({
                name,
                standard,
                subject,
                mark,
            })
            res.json( {success:true,newStudent})
        }
    } catch (error) {
        res.json('failed')
    }
}  
const getStudent= async (req,res)=>{
    try {
        const student= await studentModel.find()
        res.json(student)
    } catch (error) {
        res.json('failed to get')
    }
}

const getStudentById= async (req,res)=>{
    try {
        const id=req.params.id
        const student= await studentModel.findById(id)
        if(!student){
            res.json('student not found')
            return
        }
            res.json(student)
        
    } catch (error) {
        res.json('no address')
    }
}

const updateStudent=async (req,res)=>{
    try {
        const id=req.params.id
        console.log(id);
        const student=await studentModel.findByIdAndUpdate(id, req.body)
        console.log(id);
        res.json(student)
        
    } catch (error) {
       res.json('api error') 
    }
}

const deleteStudent= async (req,res)=>{
    try {
        const id=req.params.id
        const student= await studentModel.findByIdAndRemove(id)
        res.json(student)
    } catch (error) {
        res.json('api failed delete')
    }
}

export default {addStudent,getStudent,updateStudent,deleteStudent,getStudentById}