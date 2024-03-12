const express=require('express')
const router=express.Router()

// Insert user

router.post('/adduser',(req,res)=>{
    const register_user=require('../src/user/registerUser')
    register_user(req,res)
})

// router.delete('/deleteaddmission',(req,res)=>{
//     const delete_admission=require('../src/admission/delete_admission')

//     delete_admission(req,res)
// })

// router.get('/admissions',(req,res)=>{
//     const get_admission=require('../src/admission/get_admission')

//     get_admission(req,res)
// })

// router.put('/updateadmission/:id',(req,res)=>{
//     const updateAdmission=require('../src/admission/update_admission')
//     updateAdmission(req,res)
// })



module.exports=router;