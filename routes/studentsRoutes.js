const express=require('express')
const router=express.Router()

router.get('/students',(req,res)=>{
    const get_students = require('../src/students/get_students');
    get_students(req,res)
})

// insert students Data
router.post('/addStudent',(req,res)=>{
    // res.send("PostgresSQL Started")
    const create_student = require('../src/students/create_student');
     create_student(req,res)    
})

//delete the students data

router.delete('/removestudent',(req,res)=>{
    const delete_student=require('../src/students/delete_student');
     delete_student(req,res);
})

//update
router.put('/updatestudent/:id',(req,res)=>{    
const update_student = require('../src/students/update_student')
    update_student(req,res)
})



module.exports=router;
