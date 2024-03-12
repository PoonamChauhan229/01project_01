const pg_connection=require('../base/pg_connection')
const bcrypt=require('bcrypt')

const register_user=async(req,res)=>{
    try{
    const {first_name,last_name,email,password,role}=req.body

    const salt=await bcrypt.genSalt(10)
    let hashedPassword=await bcrypt.hash(password,salt)
    console.log(hashedPassword)
    const values=[first_name,last_name,email,hashedPassword,role]

    const result= await pg_connection('INSERT into users (first_name,last_name,email,password,role) Values ($1,$2,$3,$4,$5) returning  *;',values)
    // console.log(result[0])
    res.send({
        "message":"data Inserted successfully",
        "data": result[0]
    })
}
catch(e){
  console.log("Some internal error",e)
}
}
module.exports=register_user;