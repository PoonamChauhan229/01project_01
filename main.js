const express = require('express');
const dotenv=require('dotenv').config();
var session = require('express-session');
const passport=require('passport')

const app = express();
const port = 8000

const studentRouter=require('./routes/studentsRoutes')
app.use(express.json())
app.use(studentRouter)

const admissionRouter=require('./routes/admissionRoutes')
app.use(admissionRouter)

// const pg_to_mongo_scheduler=require('./pg_to_mongo_scheduler')
// pg_to_mongo_scheduler()
// const pg_connection=require('./src/base/pg_connection')

// pg_connection('Select * from students where student_grade =$1',['B'])



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const mongo_connection=require('./src/base/mongo_connection')
//mongo_connection()

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));

// var GoogleStrategy = require('passport-google-oauth20').Strategy;
 
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:8000/auth/google/callback"
//   },
//  function(accessToken, refreshToken, profile, cb) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       // return('http://localhost:3001/index.html');
//   console.log("profile",profile)
//       return cb(JSON.stringify(profile));
//     // });
//   }
// ));
// app.use(passport.authenticate('session'));

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() { 
//     return cb(null, {
//       id: user.id,
//       username: user.username,
//       picture: user.picture
//     });
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));
 
// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     console.log("res",res)
//     res.redirect('http://localhost:3001/index.html');
//   });

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


