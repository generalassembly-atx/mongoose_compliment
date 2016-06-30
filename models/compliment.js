var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var complimentSchema = new Schema({
  compliment: { type: String, required: true }
});

complimentSchema.statics.random = function(callback) {
  this.count(function(err, count) {
    if (err) {
      return callback(err);
    }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(callback);
  }.bind(this));
};

var Compliment = mongoose.model('Compliment', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
