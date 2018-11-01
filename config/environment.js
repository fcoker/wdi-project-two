//setting up port to be exported tp app.js to be listened to
//!!-->ask what dbUri does<--!!
const port = process.env.PORT || 4000;
const dbUri = process.env.MONGOD_URI ||
'mongodb://localhost/ciruit-review-site';

module.exports = {
  dbUri: dbUri,
  port: port
};
