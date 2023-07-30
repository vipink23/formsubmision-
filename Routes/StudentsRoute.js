import express from 'express'
const router=express.Router()
import StudentsController from '../Controller/StudentsController.js'

router.post('/', StudentsController.addStudent)
router.get('/',StudentsController.getStudent)
router.get('/:id', StudentsController.getStudentById)
router.patch('/:id',StudentsController.updateStudent)
router.delete('/:id' ,StudentsController.deleteStudent)

export default router