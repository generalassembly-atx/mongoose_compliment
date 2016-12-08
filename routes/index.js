var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
    var colors = ["#FFBF00 ", "#0080FF ","#01DF3A ","#FF0080 "];
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

    var compliment = null;
    Compliment.find({}, '', function(err, results){
      if(err) console.log(err);
      console.log(results);
      var i=Math.floor(Math.random()*results.length);
    res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: results[i].compliment });
    });
});

router.post('/', function(req, res, next) {
    var newCompliment = req.body.compliment;
    res.redirect('/');
});

module.exports = router;
