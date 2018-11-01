//requiring my mongoose package in order to make the model schemas
const mongoose = require('mongoose');


const circuitSchema = mongoose.Schema({
  name: { type: String },
  lapLength: String,
  fastestLap: Number,
  numberOfCorners: Number,
  image: String,
  video: String,
  comments: [{
    username: String,
    content: String
  }]
});
// saving the circuitSchema as a model called 'Circuit' into a variable named circuitModel
const circuitModel = mongoose.model('Circuit', circuitSchema);

//exporting circuitModel
module.exports = circuitModel;
