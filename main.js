const express = require('express')
const app = express()
const port = 3000

const studentRouter=require('./routes/studentsRoutes')
app.use(express.json())
app.use(studentRouter)

const admissionRouter=require('./routes/admissionRoutes')
app.use(admissionRouter)
// const pgConnection=require('./src/base/pgconnection')

// pgConnection('Select * from students where student_grade =$1',['B'])



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


// unwind
//group
//match
//sort
//project


//pg
//postgress

//mongo db 

// class ,amagemnet syaytem
//students
// attendance
// admissions

// subjects
// standard
// fees
// courses


