const express=require('express')
const router=express.Router()

// Insert user

router.post('/adduser',(req,res)=>{
    const register_user=require('../src/user/registerUser')
    register_user(req,res)
})

// Authenticate for login user
const authenticate = (req, res, next) => {
    console.log("authenticate",req.session)
    console.log("userauthenticate",req.session.user)
    if (req.session && req.session.user) {
      return next();
    } else {
      res.redirect('/'); 
    }
};

router.post('/userlogin',(req,res)=>{
    const loginUser=require('../src/user/loginUser')
    loginUser(req,res)
})

router.get('/dashboard',authenticate,(req,res)=>{    
    console.log("24",req.session.user)
    // res.send('Welcome to the dashboard!');
    // Set CORS headers for the redirect response
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Credentials', 'true');
   res.redirect('http://localhost:3000/dashboard')
})


module.exports=router;