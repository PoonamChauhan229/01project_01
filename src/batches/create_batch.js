const pg_connection = require('../base/pg_connection');

const create_batch = async (req, res) => {
    try {
        const { start_date, end_date, student_count, trainer_name, student_fee } = req.body;

        // Insert the batch without specifying batch_code
        const result = await pg_connection('INSERT INTO batches (start_date, end_date, student_count, trainer_name, student_fee) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [start_date, end_date, student_count, trainer_name, student_fee]);

        if (result.length > 0) {
            const insertedBatch = result[0];
            
            // Generate the batch_code using the inserted batch_id and the current year
            const batch_code = `${new Date().getFullYear()}-${insertedBatch.batch_id}`;

            // Update the batch with the generated batch_code
            await pg_connection('UPDATE batches SET batch_code = $1 WHERE batch_id = $2', [batch_code, insertedBatch.batch_id]);

            // Return the response with the inserted batch information
            res.status(201).json({
                message: "Batch Created",
                data: {
                    ...insertedBatch,
                    batch_code: batch_code
                }
            });
        } else {
            throw new Error("Failed to insert batch");
        }
    } catch (error) {
        console.error("Error creating batch:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = create_batch;
