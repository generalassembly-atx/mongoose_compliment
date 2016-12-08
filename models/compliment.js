// How can we set up the Compliment model to talk to our database?
// Look at past examples

// /models/compliment.js
var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  color: String,
  name: String,
  compliment: String
});

var Compliment = mongoose.model('Compliment', Schema);

// Make this available to our other files
module.exports = Compliment;
