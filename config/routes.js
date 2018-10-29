//---> find out what router is.
const cocktailController = require('../controllers/cocktailController');

const router = require('express').Router();

// Render the home file when the user requests the home page
router.get('/', function(req, res) {

  res.render('home');
});


module.exports = router;
