const express = require('express');
const dotenv=require('dotenv').config();
var session = require('express-session');

const passportSetup =require('./config/passport_config')
const passport = require('passport');

const app = express();
const port = 8000

const cors=require('cors')
app.use(cors({
  origin: true,
  credentials: true
}));


const studentRouter=require('./routes/studentsRoutes')
app.use(express.json())
app.use(studentRouter)

const admissionRouter=require('./routes/admissionRoutes')
app.use(admissionRouter)

const batchRouter=require('./routes/batchesRoutes')
app.use(batchRouter)


const mongo_connection=require('./src/base/mongo_connection');

mongo_connection()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to false for development
}));


//main.js
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.authenticate('session'));

//googleauth route
//auth.js
const oAuthRouter=require('./routes/oauth')
app.use(oAuthRouter)


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

// class mamagemnet syaytem
//students
// attendance
// admissions

// subjects
// standard
// fees
// courses


