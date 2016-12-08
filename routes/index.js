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
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color, title: 'testing' });
});

// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW

router.get('/', function(req, res, next) {

	var color = randomColor();
	var compliment = null;
	Compliment.find(compliment, '', function(err, results){
			var i = [Math.floor(Math.random()*results.length)];
		if (err) console.log(err);

		console.log(results);

		res.render('index', {
			compliment: results[i].compliment,
			title: 'Confidence Drain',
			color: color,
			name: 'Earthling'
		});
	});
});


/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();
	res.send(color);
});






  //res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });









/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = req.body.compliment;

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	res.redirect('/');
});

module.exports = router;
