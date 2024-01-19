const pg_connection=require('../base/pg_connection')

const get_admission=async(req,res)=>{
    try{
    const result=await pg_connection('SELECT * FROM admission')
    res.send(result)
}
catch(e){
  console.log("Some internal error")
}
}
module.exports=get_admission