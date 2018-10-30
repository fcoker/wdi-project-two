const mongoose = require('mongoose');
//making my user Model schema
const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String
});
//Saving my userSchema model as 'User' in the userModel variable
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
