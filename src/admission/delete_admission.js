const pgConnection=require('../base/pgconnection')

const delete_admission=async(req,res)=>{
    const {admission_id}=req.body
    await pgConnection('DELETE FROM ADMISSION WHERE admission_id=$1',[admission_id])
    res.send({
        message:"Admission Removed Successfully"
    })
}
module.exports=delete_admission;