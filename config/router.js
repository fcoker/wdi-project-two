
//---> update button not working
//---> create button not working
//---> add login, register and log out features with session
//---> add comment section and rating for each circuit that shows username of who left it
//---> add delete button beside comment section to enable username to be able to delete it
//---> allow only admin log in have access to edit/create and delete
//---> allow only logged in customers to acces show pages
//---> find out what router is.

const router = require('express').Router();
//CONTOLLER BEING REQUIRED IN ROUTER FILE!!
const circuitController = require('../controllers/circuitController');
const authController = require('../controllers/authController');
const secureRoute = require('../lib/secureRoute');
const commentsController = require('../controllers/commentsController');


// get explanation as to why registeration route '.get' and '.post' are both using the
// same url while create route '.get' and '.put' use two different urls
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);
//routes for the delete and create comments
router.post('/circuits/:id/comments', commentsController.commentsCreate);
router.delete('/circuits/:circuitId/comments/:commentId', commentsController.commentsDelete);


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
router.get('/circuits/new', secureRoute, circuitController.newRoute);

//Create Route
router.post('/circuits', secureRoute, circuitController.createRoute);

// SHOW Route
router.get('/circuits/:id', circuitController.showRoute);

// UPDATE route
router.put('/circuits/:id', secureRoute,circuitController.updateRoute);


// EDIT route
router.get('/circuits/:id/edit', secureRoute, circuitController.editRoute);

// DELETE Route
router.delete('/circuits/:id', secureRoute, circuitController.deleteRoute);

module.exports = router;
