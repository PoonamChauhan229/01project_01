const pg_connection=require('../base/pg_connection')

const delete_admission=async(req,res)=>{
    try{
    const {admission_id}=req.body
    await pg_connection('DELETE FROM ADMISSION WHERE admission_id=$1',[admission_id])
    res.send({
        message:"Admission Removed Successfully"
    })
}
catch(e){
  console.log("Some internal error")
}
}
module.exports=delete_admission;