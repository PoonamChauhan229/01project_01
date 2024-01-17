const pgConnection=require('../base/pgconnection')

const create_admission=async(req,res)=>{
    const {admission_class,admission_date,admission_fees,student_id} =req.body
    const values=[admission_class,admission_date,admission_fees,student_id]

    const checkAdmission=await pgConnection('SELECT * from admission where student_id=$1',[student_id] )
    console.log(checkAdmission)

    const admission_class_array=checkAdmission.map((element)=>element.admission_class)
    console.log(admission_class_array)

    const checkOldAdmission=admission_class_array.filter((element)=>element===admission_class)
    console.log(checkOldAdmission)

    if(checkOldAdmission[0]!==admission_class){

    const result=await pgConnection('INSERT into admission (admission_class,admission_date,admission_fees,student_id) Values ($1,$2,$3,$4) returning *;',values)
    // console.log(result[0])
    res.send({
        "message":"Addmission Taken",
        data:result[0]
    })

    if(result){
        
    }
}
else{
    res.send({
        "message":"Addmission Already taken for this class, Cant be enrolled",
        "chances of Admission":"Take admission in other courses"
    })
}
}
module.exports=create_admission;