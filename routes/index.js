var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();


// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW
Compliment.find({}, function (err, compliments) {
  console.log(compliments);
	var compliment = compliments[Math.floor(Math.random()*compliments.length)];
//RENDER...
	res.render('index', {
		title: 'Emergency Compliment',
		color: color,
		name: name,
		compliment: compliment.text
	});
})
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = req.body.compliment;

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	var compliment = new Compliment({ text: newCompliment});
	compliment.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
			res.redirect('/');
	  }
	});
});

module.exports = router;
