const pg_connection=require('../base/pg_connection')

const get_students=async(req,res)=>{
    try{
    const result=await pg_connection('SELECT * FROM students')
res.send(result)
}
catch(e){
  console.log("Some internal error")
}
}
module.exports=get_students