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
	Compliment.find(req.params.name, function(err, result){
	var compliment = result[Math.floor(Math.random()*result.length)].compliment;
	res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
	})
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var color = randomColor();
	var name = req.body.name || "Mr. Turtle";
	var compliment = req.body.compliment;

	var newCompliment = Compliment({
		color: color,
		name: name,
		compliment: compliment
	});

	newCompliment.save(function(err, result){
		if (err) console.log(err);
		res.redirect('/');
	})
});

module.exports = router;
