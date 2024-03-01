const express=require('express')
const router=express.Router()

// Insert Batch

router.post('/addbatch',(req,res)=>{
    const create_batch=require('../src/batches/create_batch')
    create_batch(req,res)

})

router.get('/viewbatches',(req,res)=>{
    const viewbatches=require('../src/batches/get_batches')
    viewbatches(req,res)
})


module.exports=router;