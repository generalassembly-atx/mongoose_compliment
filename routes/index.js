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
  Compliment.findRandom(function(err, compliment){
    res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
  });
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = new Compliment(req.body);
	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
  newCompliment.save(function(err, newCompliment){
        if (err) console.log(err);
        res.redirect('/');
    });
});
// router.post('/', function(req, res, next){
//   var user = new User(req.body);

//   user.save(function(err, user){
//     if (err) console.log(err);
//     res.redirect('/users');
//   });
// });
module.exports = router;
