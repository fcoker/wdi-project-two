//requiring necessary external packages to my app JS file
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
//requiring the enviroment file containing port and dbURI
const env = require('./config/environment');
//requiring the router links to the app.js
const router = require('./config/router');
const auth = require('./lib/auth');

mongoose.connect(env.dbUri);
//save the express app as the app variable
const app = express();
app.use(methodOverride('_method'));

app.use(session({ secret: 'cars', resave: false, saveUninitialized: false }));

// Tell Express to use EJS when doing res.render
app.set('view engine', 'ejs');
app.use(expressLayouts);
//test app is listening on port
// this is to get the form data into req.body
app.use(bodyParser.urlencoded({ extended: true }));
//activating the router in my app.js
app.use(router);

// Respond to all requests, any method, any url:
app.use('*', auth.checkAuthStatus);
app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
