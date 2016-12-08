// How can we set up the Compliment model to talk to our database?
// Look at past examples

// /models/user.js
var mongoose = require('mongoose');

var complimentSchema = new mongoose.Schema({
  compliment: String
});

var Compliment = mongoose.model('Compliment', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
