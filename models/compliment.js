// How can we set up the Compliment model to talk to our database?
const mongoose = require('mongoose');
// Look at past examples



var Compliment = mongoose.model('Compliment', {
  title: String,
  completed: Boolean
});

// Make this available to our other files
module.exports = Compliment;
