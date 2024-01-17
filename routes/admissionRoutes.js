const express=require('express')
const router=express.Router()
const createAdmissionTable =require('../src/admission/createAdmissionTable')

// createAdmissionTable()
let tableCreated=false;

const tablecreatedOnce=async()=>{
    try{
        if(!tableCreated){
            await createAdmissionTable();
            tableCreated=true
            console.log("Table Created")
        }else{
            console.log("Table has been created")
        }
    }catch(e){
        console.log("Admission TableCreated val",tableCreated+" So, no table should be created")
    }
}
tablecreatedOnce();

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

module.exports=router;