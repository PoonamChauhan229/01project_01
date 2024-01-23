const pg_connection=require('./src/base/pg_connection')
const mongo_connection=require('./src/base/mongo_connection')
const Joi=require('joi')

const process_data=async(callback)=>{
    console.log("process data")
    const result=await pg_connection('SELECT * FROM students')
    // console.log(result)
    const db=await mongo_connection()
    // console.log(db)
    // db.collection('students').insertMany(result)
    // console.log(db.collection('students').find(element.student_id))
    for (const element of result) {
        const existingStudent = await db.collection('students').findOne({ student_id: element.student_id });
        // console.log(existingStudent)
        if(existingStudent){
            console.log("Student is Present",element.student_id)
            callback();

        }
        else{
            const schema=Joi.object({
                student_id:Joi.number().required(),
                student_name:Joi.string().required(),
                student_email:Joi.string().email().required(),
                student_contact:Joi.number().required(),
                student_class:Joi.string().required(),
                student_attendance:Joi.number().required(),
                student_grade:Joi.string().required(),
            })
           // console.log(schema.validate(element))
            if(schema.validate(element).error){
                console.log("Schema Validation Failed")
                callback()
            }else{
                 await db.collection('students').insertOne(element)
                console.log("Students data inserted")
                callback()
            }

           
            
        }

}
}
module.exports=process_data

