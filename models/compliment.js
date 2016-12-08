// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  compliment: String
});

// Make this available to our other files

var Compliment = mongoose.model('Compliment', schema);

module.exports = Compliment;
