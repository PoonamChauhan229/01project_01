const pgConnection=require('../base/pgconnection')

const updateStudents=async(req,res)=>{
    try{
        const {id}=req.params
        // console.log(id)
    
        const selectQuery=await pgConnection('SELECT * from students WHERE student_id= $1',[id])
        // console.log(selectQuery[0])
    
        let tempvar=selectQuery[0]
        // console.log(tempvar.student_attendance)
    
        tempvar.student_name=req.body.hasOwnProperty("student_name") ? req.body.student_name : tempvar.student_name
        tempvar.student_email=req.body.hasOwnProperty("student_email") ? req.body.student_email : tempvar.student_email
        tempvar.student_contact=req.body.hasOwnProperty("student_contact") ? req.body.student_contact : tempvar.student_contact
        tempvar.student_class=req.body.hasOwnProperty("student_class") ? req.body.student_class : tempvar.student_class
        tempvar.student_attendance = req.body.hasOwnProperty("student_attendance") ?  req.body.student_attendance : tempvar.student_attendance;    
        tempvar.student_grade=req.body.hasOwnProperty("student_grade") ? req.body.student_grade : tempvar.student_grade
    
    
        
        await pgConnection(`UPDATE students SET student_name=$1,student_email=$2,student_contact=$3,student_class=$4,student_attendance=$5,student_grade=$6 WHERE student_id =$7`,[tempvar.student_name, tempvar.student_email,tempvar.student_contact,tempvar.student_class,tempvar.student_attendance,tempvar.student_grade,id])
        // console.log(result)
        res.send({"message":"Updated Successfully","data":tempvar})}
        catch(e){
            res.send("Couldnt find the data entered")
        }
}
module.exports=updateStudents
