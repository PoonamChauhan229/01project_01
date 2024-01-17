const pgConnection=require('../base/pgconnection')

const get_admission=async(req,res)=>{
    const result=await pgConnection('SELECT * FROM admission')
    res.send(result)
}
module.exports=get_admission