//---> find out what router is.
const circuitController = require('../controllers/circuitController');

const router = require('express').Router();

// Render the home file when the user requests the home page
router.get('/', function(req, res) {

  res.render('home');
});
//Render the about file when aboute route is requested
router.get('/about', function(req, res) {

  res.render('about');
});

// Render the index page when user requests index route
router.get('/circuits', circuitController.indexRoute);

// NEW Route: This must appear
// above the show route, otherwise the show route
// will load with id = 'new'
router.get('/circuits/new', circuitController.newRoute);


// SHOW Route
router.get('/circuits/:id', circuitController.showRoute);

// UPDATE route
router.put('/circuit/:id',circuitController.updateRoute);


// EDIT route
router.get('/circuits/:id/edit', circuitController.editRoute);

// DELETE Route
router.delete('/circuits/:id', circuitController.deleteRoute);

module.exports = router;
