const pgConnection=require('../base/pgconnection')

const get_Students=async(req,res)=>{
    const result=await pgConnection('SELECT * FROM students')
res.send(result)
}
module.exports=get_Students