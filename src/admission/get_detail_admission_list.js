const pg_connection=require('../base/pg_connection')


const get_detail_admission_list=async(req,res)=>{

    try{   
        const result=await pg_connection('SELECT * from students s, admission a where s.student_id=a.student_id')
        res.send(result)
    }
    catch(e){
        console.log("Some Internal Error")
    }
}
module.exports=get_detail_admission_list
