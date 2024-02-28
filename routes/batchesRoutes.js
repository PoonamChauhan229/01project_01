const express=require('express')
const router=express.Router()

// Insert Batch

router.post('/addbatch',(req,res)=>{
    const create_batch=require('../src/batches/create_batch')
    create_batch(req,res)

})


module.exports=router;