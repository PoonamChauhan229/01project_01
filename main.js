const express = require('express');
const dotenv=require('dotenv').config();
var session = require('express-session');

const passportSetup =require('./config/passport_config')
const passport = require('passport');

const app = express();
const port = 8000

const cors=require('cors')
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

//app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
// }));

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specified HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specified request headers
};

app.use(cors(corsOptions));

// app.use(cors({
//   origin: '*',
//   credentials: true,
// }));




app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to false for development
}));


const studentRouter=require('./routes/studentsRoutes')
app.use(express.json())
app.use(studentRouter)

const admissionRouter=require('./routes/admissionRoutes')
app.use(admissionRouter)

const batchRouter=require('./routes/batchesRoutes')
app.use(batchRouter)

const userRouter=require('./routes/userRoutes')
app.use(userRouter)

const mongo_connection=require('./src/base/mongo_connection');

mongo_connection()




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


