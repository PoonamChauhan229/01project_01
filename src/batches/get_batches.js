const mongo_connection=require('../base/mongo_connection')
const get_batches=async(req,res)=>{
    const db=await mongo_connection();
    const batches_data= await db.collection('batches').find().toArray()
    console.log(batches_data)
    res.send(batches_data)
}

module.exports=get_batches