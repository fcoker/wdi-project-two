function secureRoute(req, res, next) {
  if (req.session.userId) {
    console.log('user is authorised');
    next();
  } else {
    // User is not authorised to access this route
    console.log('User was unauthorised');
    // No need to call next here because res.anything ends express's current run.
    res.redirect('/login');
  }
}

// Can just module.exports the function itself!
module.exports = secureRoute;
