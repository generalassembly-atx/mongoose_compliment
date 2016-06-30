var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var complimentSchema = new Schema({
  compliment: { type: String, required: true }
});

complimentSchema.statics.random = function(cb) {
  this.count(function(err, count) {
    if (err) { return cb(err) }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(cb);
  }.bind(this));
}
var Compliment = mongoose.model('Compliment', complimentSchema);

// Make this available to our other files
module.exports = Compliment;
