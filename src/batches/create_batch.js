const pg_connection=require('../base/pg_connection')

const create_batch=async(req,res)=>{
    try{
    const {assessment_applicable, batch_actual_size, batch_end_date, batch_location, batch_session, batch_start_date, batch_target_size, batch_type, classroom_end_time, classroom_start_time, coordinator_name, course_name, installments_applicable, placement_applicable, status, student_enrollment_fee, trainer_name,course_type}=req.body

    const values=[assessment_applicable, batch_actual_size, batch_end_date, batch_location, batch_session, batch_start_date, batch_target_size, batch_type, classroom_end_time, classroom_start_time, coordinator_name, course_name, installments_applicable, placement_applicable, status, student_enrollment_fee, trainer_name,course_type]

    const result= await pg_connection('INSERT into batches (assessment_applicable, batch_actual_size, batch_end_date, batch_location, batch_session, batch_start_date, batch_target_size, batch_type, classroom_end_time, classroom_start_time, coordinator_name, course_name, installments_applicable, placement_applicable, status, student_enrollment_fee, trainer_name,course_type) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) returning  *;',values)
    console.log(result[0])
    console.log(result.length )
    if (result?.length > 0) {
        const insertedBatch = result[0];
        console.log(insertedBatch)
        // Generate the batch_code using the inserted batch_id and the current year
        const batchnumber = `${new Date().getFullYear()}-${insertedBatch.batch_id}`;
        console.log(batchnumber)
        // Update the batch with the generated batch_code
        const newbatch_code=insertedBatch.batch_code=batchnumber

       await pg_connection('UPDATE batches SET batch_code = $1 WHERE batch_id = $2', [batchnumber, insertedBatch.batch_id]);
      
        res.send({
            message: "Batch Created",
            data: {
                ...insertedBatch,
                batch_code:newbatch_code
            }
        })
    }
    }

catch(e){
  console.log("Some internal error",e)
}
}
module.exports=create_batch;
