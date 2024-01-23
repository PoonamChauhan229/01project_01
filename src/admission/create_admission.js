const pg_connection=require('../base/pg_connection')

const create_admission=async(req,res)=>{
    try{
    const {admission_class,admission_fees,student_id} =req.body
    const values=[admission_class,admission_fees,student_id]

    const checkAdmission=await pg_connection('SELECT * from admission where student_id=$1 and admission_class= $2',[student_id,admission_class] )
    console.log(checkAdmission)

   if(checkAdmission.length==0){

    const result=await pg_connection('INSERT into admission (admission_class,admission_fees,student_id) Values ($1,$2,$3) returning *;',values)
    // console.log(result[0])
    res.send({
        "message":"Addmission Taken",
        data:result[0]
    })    
}
else{
    res.send({
        "message":"Addmission Already taken for this class, Cant be enrolled",
        "chances of Admission":"Take admission in other courses"
    })
}
}
catch(e){
  console.log("Some internal error")
}
}
module.exports=create_admission;