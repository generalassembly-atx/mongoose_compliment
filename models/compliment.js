// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');

var complimentSchema = new mongoose.Schema({
  compliment: { type: String, required: true}
});
var Compliment = mongoose.model('Compliment', complimentSchema);

module.exports = Compliment;
