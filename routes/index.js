var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
  var colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080", "#34edc", "#dcf098"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
  var color = randomColor();
  res.render('compliment_form', {
    title: 'WDI Emergency Compliment',
    color: color
  });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
  name = req.params.name || "Mate";
  var color = randomColor();

  // USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW
  Compliment.find({}, function(err, compliments) {
		var compliment = compliments[Math.floor(Math.random() * compliments.length)]
      res.render('index', {
        title: 'WDI Kickass Compliments',
        color: color,
        name: name,
        compliment: compliment.text
      });
  })
    // var compliment = null; // this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.

});

/* POST compliment. */
// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL

router.post('/', function(req, res, next) {
  var newCompliment = req.body.compliment;

  //CREATE
  var compliment = new Compliment({
    text: newCompliment
  });
  compliment.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});


module.exports = router;
