// How can we set up the Compliment model to talk to our database?
var mongoose = require('mongoose');


var Compliment = mongoose.model('Compliment', {text: String});

// Make this available to our other files
module.exports = Compliment;
