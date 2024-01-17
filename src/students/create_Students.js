const pgConnection=require('../base/pgconnection')

const createStudent=async(req,res)=>{
    const {student_name,student_email,student_contact,student_class,student_attendance,student_grade}=req.body

    const values=[student_name,student_email,student_contact,student_class,student_attendance,student_grade]

    const result= await pgConnection('INSERT into students (student_name,student_email,student_contact,student_class,student_attendance,student_grade) Values ($1,$2,$3,$4,$5,$6) returning  *;',values)
    // console.log(result[0])
    res.send({
        "message:":"data Inserted successfully",
        "data": result[0]
    })
}
module.exports=createStudent;