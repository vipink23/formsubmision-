import express from 'express'
import connectDB from './Config/db.js'
import  StudentsRouter from './Routes/StudentsRoute.js'
import cors from 'cors'
const app=express()
connectDB()
const port=5001
app.use(cors())
app.use(express.json())

app.use('/student' ,StudentsRouter)
app.listen(port ,()=>console.log(`server running on  port ${port}`))
// console.log('hello vipin');