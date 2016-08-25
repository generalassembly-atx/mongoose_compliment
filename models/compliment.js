const mongoose = require('mongoose');

var complimentSchema = {
  quote: String,
}

var Compliment = mongoose.model('Compliment', complimentSchema);



module.exports = Compliment;
