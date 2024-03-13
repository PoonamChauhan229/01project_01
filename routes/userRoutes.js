const express=require('express')
const router=express.Router()

// Insert user

router.post('/adduser',(req,res)=>{
    const register_user=require('../src/user/registerUser')
    register_user(req,res)
})

// Authenticate for login user
const authenticate = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    } else {
      res.redirect('/login'); 
    }
};

router.post('/login/user',(req,res)=>{
    const loginUser=require('../src/user/loginUser')
    loginUser(req,res)
})

router.get('/dashboard',authenticate,(req,res)=>{
    res.send('Welcome to the dashboard!');
   // res.redirect('http://localhost:3000/dashboard')
})

// router.get('/admissions',(req,res)=>{
//     const get_admission=require('../src/admission/get_admission')

//     get_admission(req,res)
// })

// router.put('/updateadmission/:id',(req,res)=>{
//     const updateAdmission=require('../src/admission/update_admission')
//     updateAdmission(req,res)
// })



module.exports=router;