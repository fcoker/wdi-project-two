// require circuit model containing the circuit schema
const Circuit = require('../models/circuit');

//INDEX Route call back function defined for use in router
function indexRoute(req, res) {
  console.log('we made it to the controller');
  // Find all the circuits, then render an ejs file:
  // Find returns an array
  Circuit.find().then(function(result) {
    console.log('this is the result', result);
    const circuitObject = {
      circuits: result
    };
    res.render('circuits/index', circuitObject);
  });

}


module.exports = {
  indexRoute: indexRoute
};
