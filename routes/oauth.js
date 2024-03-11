const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/dashboard',
  failureRedirect: 'http://localhost:3000'
}));


router.get("/login/success", (req, res) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
      // Send user data as JSON
      res.json(req.user);
    } else {
      // If user is not authenticated, return an error
      res.status(401).json({ error: "User not authenticated" });
    }
  });
  
router.post('/logout', function(req, res, next) {
req.logout(function(err) {
    if (err) { return next(err); }
    req.destroy()
    res.redirect(CLIENT_URL);
    // console.log("logout")
    
});
});

module.exports = router
