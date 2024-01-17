const pgConnection = require('../base/pgConnection')

const createAdmissionTable=async()=>{
    const result=await pgConnection('CREATE TABLE admission (admission_id SERIAL PRIMARY KEY,   admission_class VARCHAR(100),admission_date DATE,admission_fees INT,   student_id INT REFERENCES students(student_id))')
    console.log(result)
}
module.exports=createAdmissionTable
