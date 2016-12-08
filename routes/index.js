var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');
console.log('stephen8')
function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
	console.log('stephen1')
});


/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();
	console.log('stephen2')
	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW

	var compliment = null; // this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.
	res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
	console.log('stephen3')
});

/* POST compliment. */
console.log('stephen4')
router.post('/', function(req, res, next) {
	var newCompliment = req.body.compliment;

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	res.redirect('/');
});
console.log('stephen5')
module.exports = router;
console.log('stephen6')
