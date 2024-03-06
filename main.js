const express = require('express');
const dotenv=require('dotenv').config();
var session = require('express-session');
const passport=require('passport')
let get_access_token="";

const app = express();
const port = 8000

const cors=require('cors')
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const studentRouter=require('./routes/studentsRoutes')
app.use(express.json())
app.use(studentRouter)

const admissionRouter=require('./routes/admissionRoutes')
app.use(admissionRouter)

const batchRouter=require('./routes/batchesRoutes')
app.use(batchRouter)


const mongo_connection=require('./src/base/mongo_connection');
const show_dashboard = require('./src/test');
mongo_connection()



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to false for development
}));

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/auth/google/callback"
}, function(accessToken, refreshToken, profile, cb) {   
  console.log("profile",profile);
  console.log("Accesstoken",accessToken);
  console.log("refreshtoken",refreshToken);
  // return cb(JSON.stringify(profile));

  const show_dashboard=require('./src/test')
  show_dashboard(null,profile)
  return cb(null, profile); 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});

// Test the authentication with Google
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/dashboard',
  failureRedirect: 'http://localhost:3000/login'
}));



app.get("/login/success", (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Send user data as JSON
    res.json(req.user);
  } else {
    // If user is not authenticated, return an error
    res.status(401).json({ error: "User not authenticated" });
  }
});



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


