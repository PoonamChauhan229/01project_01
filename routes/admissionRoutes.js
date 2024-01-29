const express=require('express')
const router=express.Router()




// Insert admission

router.post('/addaddmission',(req,res)=>{
    const create_admission=require('../src/admission/create_admission')
   create_admission(req,res)
})

router.delete('/deleteaddmission',(req,res)=>{
    const delete_admission=require('../src/admission/delete_admission')

    delete_admission(req,res)
})

router.get('/admissions',(req,res)=>{
    const get_admission=require('../src/admission/get_admission')

    get_admission(req,res)
})

router.put('/updateadmission/:id',(req,res)=>{
    const updateAdmission=require('../src/admission/update_admission')
    updateAdmission(req,res)
})

// getdetailed admission list

router.get('/getdetailedadmissionlist',(req,res)=>{
    const get_detail_admission_list=require('../src/admission/get_detail_admission_list')
    get_detail_admission_list(req,res)
})

router.get('/getchartdata',(req,res)=>{
    const get_monthly_earning=require('../src/admission/get_monthly_earning')
    get_monthly_earning(req,res)
})

module.exports=router;