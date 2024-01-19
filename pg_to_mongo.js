const pg_connection=require('./src/base/pg_connection')
const mongo_connection=require('./src/base/mongo_connection')

const pg_to_mongo=async()=>{
    const result=await pg_connection('SELECT * FROM students')
    console.log(result)
    const db=await mongo_connection()
    // console.log(db)
    // db.collection('students').insertMany(result)
    // console.log(db.collection('students').find(element.student_id))
    for (const element of result) {
        const existingStudent = await db.collection('students').findOne({ student_id: element.student_id });
        // console.log(existingStudent)
        if(existingStudent){
            console.log("Student is Present",element.student_id)
        }
        else{
            await db.collection('students').insertOne(element)
            console.log("Students data inserted")
            
        }

}
}
module.exports=pg_to_mongo

