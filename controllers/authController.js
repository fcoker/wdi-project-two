const User = require('../models/user');
//REGISTRATION CONTROLLERS!!
//Registration Function that takes user to the registration form page when user goes to /register
function registerFormRoute(req, res) {
  console.log('we are in the registration form route');
  // Send the user a registration form
  res.render('auth/register');
}
//Registration function that actually creates and saves a user based on User schema
function registerRoute(req, res) {
  // Create a new user
  // req.body contains the data from the registration form
  User.create(req.body)
    .then(() => {
      // console.log('User created', result);
      // Redirect to the home page
      res.redirect('/');
    });
}

//LOGIN CONTROLLERS!!
//Login Function that takes user to the login form page when user goes to /login
function loginFormRoute(req, res) {
  res.render('auth/login');
}
//Login function that actually logs user into web app and then redirects them to homepage
function loginRoute(req, res) {
  // req.body has the data from the login form
  // console.log('User is logging in', req.body);
  // Process the login.
  // Check for an existing user
  User.findOne({ email: req.body.email })
    .then(result => {
      // Result should contain a user
      if (!result) {
        // If there is no user
        res.redirect('/login');
      } else {
        // user has been found in the database! Write the user's
        // ID into their locker (session).
        // (req.session is the locker)
        req.session.userId = result._id;
        res.redirect('/');
      }
    });
}

function logoutRoute(req, res) {
  // Clear the data in the current session
  req.session.regenerate(function() {
    console.log('--->user is logged out!!<----');
    res.redirect('/');
  });
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
