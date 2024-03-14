const mongo_connection=require('../base/mongo_connection')
const fetch_user=async(req,res)=>{
    const db=await mongo_connection();
    const user=await db.collection('users').find({email:req.body.email,password:req.body.password})
    // console.log(user)
    if(user){
        req.session.user = { email:req.body.email  };
        // console.log(req.session.user)
        // res.send({message:"Logged In Successfully"});
        res.redirect('/dashboard');
    }else{
        res.send("Invalid Credentials")
    }
}

module.exports=fetch_user;