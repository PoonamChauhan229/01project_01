const express=require('express')
const router=express.Router()
const pgConnection=require('../src/base/pgconnection')

router.get('/students',async(req,res)=>{
const result=await pgConnection('SELECT * FROM students')
res.send(result)
})

// insert students Data
router.post('/addStudent', async(req,res)=>{
    // res.send("PostgresSQL Started")
    const {student_name,student_email,student_contact,student_class,student_attendance,student_grade}=req.body

    const values=[student_name,student_email,student_contact,student_class,student_attendance,student_grade]

    const result= await pgConnection('INSERT into students (student_name,student_email,student_contact,student_class,student_attendance,student_grade) Values ($1,$2,$3,$4,$5,$6) returning  *;',values)
    // console.log(result[0])
    res.send({
        "message:":"data Inserted successfully",
        "data": result[0]
    })
})

//delete the students data

router.delete('/removestudent',async(req,res)=>{
    const {student_id}=req.body
    const result= await pgConnection('DELETE FROM STUDENTS WHERE student_id =$1',[student_id])
    res.send({
        message:"Data Removed Successfully"
    })

})

//update
router.patch('/updatestudent/:id',async(req,res)=>{
    const {id}=req.params
    console.log(id)

    const {updateFeild,updateValue}=req.body
    const result=await pgConnection(`UPDATE students SET ${updateFeild}=$1 WHERE student_id =$2`,[updateValue,id])
    res.send("Updated Successfully")
})



module.exports=router;
