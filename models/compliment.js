// How can we set up the Compliment model to talk to our database?
// Look at past examples
var mongoose = require('mongoose');

var complimentSchema = new mongoose.Schema({
  compliment: { type: String, required: true}
});


complimentSchema.statics.findRandom = function(callback) {
 this.count(function(err, count) {
   if (err) {
     return callback(err);
   }
   var rand = Math.floor(Math.random() * count);
   this.findOne().skip(rand).exec(callback);
 }.bind(this));
};

var Compliment = mongoose.model('emergency_compliment', complimentSchema);

module.exports = Compliment;
