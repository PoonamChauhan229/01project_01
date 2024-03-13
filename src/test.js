app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: false,
  }));
  
  
  function authenticate(req, res, next) {
    
    if (req.session && req.session.user) {
      return next();
    } else {
      res.redirect('/login'); 
    }
  }
  
  
  app.get('/dashboard', authenticate, (req, res) => {
      res.send('Welcome to the dashboard!');
  });
  
  
  app.get('/login', (req, res) => {
    res.send('Login page');
  });
  
  
  app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
  
    if (success) { // from db
  
      req.session.user = { username: "abc" };
      res.redirect('/dashboard');
    } else {
      res.send('Invalid credentials');
    }
  });
  
  
  app.get('/logout', (req, res) => {
  
      req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
      res.redirect('/login');
    });
  });