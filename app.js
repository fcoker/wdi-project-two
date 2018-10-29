
//requiring necessary external packages to my app JS file
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//save the express app as the app variable
const app = express();
//requiring the enviroment file containing port and dbURI
const env = require('./config/enviroment');


// Tell Express to use EJS when doing res.render
app.set('view engine', 'ejs');
app.use(expressLayouts);
//test app is listening on port
app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
// this is to get the form data into req.body
app.use(bodyParser.urlencoded({ extended: true }));
