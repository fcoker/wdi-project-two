//---> find out what router is.
const circuitController = require('../controllers/circuitController');

const router = require('express').Router();

// Render the home file when the user requests the home page
router.get('/', function(req, res) {

  res.render('home');
});

// Render the index page when user requests index route
router.get('/circuits', circuitController.indexRoute);

module.exports = router;
