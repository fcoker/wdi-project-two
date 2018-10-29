//setting up port to be exported tp app.js to be listened to
//!!-->ask what dbUri does<--!!
const dbUri = 'mongodb://localhost/ciruit-review-site';
const port = 4000;

module.exports = {
  dbUri: dbUri,
  port: port
};
