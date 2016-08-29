// How can we set up the Compliment model to talk to our database?
const mongoose = require('mongoose');
// Look at past examples

//Compliment model
var Compliment = mongoose.model('Compliment', {
  text: String
});

// Make this available to our other files
module.exports = Compliment;
