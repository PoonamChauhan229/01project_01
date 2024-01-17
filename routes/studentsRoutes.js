const express=require('express')
const router=express.Router()

router.get('/students',(req,res)=>{
    const get_Students = require('../src/students/get_Students');
    get_Students(req,res)
})

// insert students Data
router.post('/addStudent',(req,res)=>{
    // res.send("PostgresSQL Started")
    const createStudent = require('../src/students/create_Students');
     createStudent(req,res)    
})

//delete the students data

router.delete('/removestudent',(req,res)=>{
    const deleteStudents=require('../src/students/delete_Students');
     deleteStudents(req,res);
})

//update
router.put('/updatestudent/:id',(req,res)=>{    
const updateStudents = require('../src/students/update_Students')
    updateStudents(req,res)
})



module.exports=router;
