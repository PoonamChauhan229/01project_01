const pg_connection=require('../base/pg_connection')

const delete_student=async(req,res)=>{
    try{
    const {student_id}=req.body
    await pg_connection('DELETE FROM STUDENTS WHERE student_id =$1',[student_id])
    res.send({
        message:"Data Removed Successfully"
    })
}
catch(e){
  console.log("Some internal error")
}

}
module.exports=delete_student;