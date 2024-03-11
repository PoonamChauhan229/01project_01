const passport = require("passport");
 
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
  
    // const show_dashboard=require('./src/test')
    // show_dashboard(null,profile)
    return cb(null, profile); 
  }));
  
    
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(user, cb) {
    cb(null, user);
  });
