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
		var compliment = compliments[Math.floor(Math.random() * compliments.length)]
		res.render('index', {
			title: 'Odd Compliments',
			color: color,
			name: name,
			compliment: compliment.quote });

	})


// ; // this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.

});
//
// /* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = new Compliment(req.body);
	newCompliment.save((err, newCompliment) => {
		if(err) console.log(err); 
				res.redirect('/');


	})

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL

 });

module.exports = router;
