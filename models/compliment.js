// How can we set up the Compliment model to talk to our database?
// Look at past examples

var Compliment = require(Compliment);

// Make this available to our other files
module.exports = Compliment;




var schema = new compliment.Schema({
  compliment: { type: String, required: true },
});

var Emergency = mongoose.model('Emergency',schema);
