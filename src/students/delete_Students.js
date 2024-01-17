const pgConnection=require('../base/pgconnection')

const deleteStudents=async(req,res)=>{
    const {student_id}=req.body
    await pgConnection('DELETE FROM STUDENTS WHERE student_id =$1',[student_id])
    res.send({
        message:"Data Removed Successfully"
    })

}
module.exports=deleteStudents;