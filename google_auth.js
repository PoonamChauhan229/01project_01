

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to false for development
}));


//config/passport_config.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;


//config/passport_config.js
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

//main.js
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
//auth.js
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/dashboard',
  failureRedirect: 'http://localhost:3000'
}));


//auth.js
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

//auth.js
app.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.destroy()
    res.redirect('http://localhost:3000/');
    // console.log("logout")
   
  });
});