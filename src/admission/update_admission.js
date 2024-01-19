const pg_connection=require('../base/pg_connection')

const update_admission=async(req,res)=>{
    try{
        const {id}=req.params
        // console.log(id)
    
        const selectQuery=await pg_connection('SELECT * from admission WHERE admission_id= $1',[id])
        //console.log(selectQuery[0])
    
        let tempvar=selectQuery[0]
        console.log(tempvar.admission_class)
    
        tempvar.admission_class=req.body.hasOwnProperty("admission_class") ? req.body.admission_class : tempvar.admission_class
        tempvar.admission_date=req.body.hasOwnProperty("admission_date") ? req.body.admission_date : tempvar.admission_date
        tempvar.admission_fees=req.body.hasOwnProperty("admission_fees") ? req.body.admission_fees : tempvar.admission_fees
       
        
        await pg_connection(`UPDATE admission SET admission_class=$1,admission_date=$2,admission_fees=$3 WHERE admission_id =$4`,[tempvar.admission_class, tempvar.admission_date,tempvar.admission_fees,id])
        // console.log(result)
        res.send({"message":"Updated Successfully","data":tempvar})
    }
    catch(e){
      console.log("Some internal error")
    }
}
module.exports=update_admission
