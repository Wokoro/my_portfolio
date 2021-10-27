var express = require('express');

var authController = require('../contollers/auth');
var contactController = require('../contollers/contact');
var { authenticator } = require('../middleware');

var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  const username = req.cookies.username;

  res.render('home', { title: 'Portfolio | Home', active: 'home', username });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  const username = req.cookies.username;

  res.render('about', { title: 'Portfolio | About', active: 'about', username });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  const username = req.cookies.username;

  res.render('projects', { title: 'Portfolio | Projects', active: 'projects', username });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  const username = req.cookies.username;

  res.render('services', { title: 'Portfolio | Services', active: 'services', username });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  const username = req.cookies.username;
  res.render('contact', { title: 'Portfolio | Contact', active: 'contact', username });
});

/* GET login page. */
router.get('/login', function (req, res, next) {
  const username = req.cookies.username;
  res.render('login', { title: 'Portfolio | login', active: 'login', error: null, username });
});

/* POST login management route */
router.post('/auth/login', authController.login);

/* POST logout management route */
router.get('/logout', authController.logout);

/* GET protected contact list view */
router.get('/contact-list', [authenticator, contactController.list]);

module.exports = router;
