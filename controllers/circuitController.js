// require circuit model containing the circuit schema
const Circuit = require('../models/circuit');

//INDEX Route call back function!!
function indexRoute(req, res) {
  // console.log('we made it to the indexRoute function');
  // Find all the circuits, then render an ejs file:
  // Find returns an array
  Circuit
    .find()
    .then(function(result) {
      // console.log('this is the result of all circuits found in my indexRoute function', result);
      const circuitObject = {
        circuits: result
      };
      res.render('circuits/index', circuitObject);
    });
}

//SHOW ROUTE FUNCTION!!
function showRoute(req, res) {
  // console.log('req.params is', req.params);
  // Get a circuit out of the database, using its ID
  // Get a particular circuit then render an ejs fileo
  Circuit.findById(req.params.id).then(result => {
    res.render('circuits/show', result);
  });
}
//NEW ROUTE FUNCTION!!
//this route renders the create form to the user
function newRoute(req, res) {
  console.log('we are in create Route');
  res.render('circuits/new');
}
//CREATE ROUTE FUNCTION!!
//this route does the actual creation of the circuit and redirects to the show page
function createRoute(req, res) {
  Circuit.create(req.body)
    .then(result => res.redirect(`/circuits/${result._id}`));
}

//UPDATE ROUTE FUNCTION!!
//This function/route works when the user has submitted his/her edit form
function updateRoute(req, res) {
  // req.params.id is the id of the circuit we are trying
  // to update
  console.log(`Updating circuit id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Circuit.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // Redirect to the index
      res.redirect('/circuits');
    });
}
//EDIT ROUTE FUNCTION!!
//this route is the form that is shown to the user to be filled in
function editRoute(req, res) {
  // First get the circuit from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  console.log('we are in editRoute');
  Circuit.findById(req.params.id)
    .then(result => {
      res.render('circuits/edit', result);
    });
}
//DELETE ROUTE FUNCTION
function deleteRoute(req, res){
  console.log('we are in the delete route');
  Circuit.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/circuits'));
}


module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  updateRoute: updateRoute,
  editRoute: editRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
