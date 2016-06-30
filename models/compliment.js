var mongoose = require('mongoose');

// How can we set up the Compliment model to talk to our database?

var complimentSchema = new mongoose.Schema ({
  compliment: { type: String, required: true }
});

complimentSchema.statics.classCompliment = function() {
  return "Compliment";
}
// Look at past examples
complimentSchema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {
      return callback(err);
    }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(callback);
  }.bind(this));
};

var Compliment = mongoose.model('compliments', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
