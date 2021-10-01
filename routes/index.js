var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Portfolio | Home', active: 'home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Portfolio | About', active: 'about' });
});

module.exports = router;
