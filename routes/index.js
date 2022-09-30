/*File name: Assignment1
Student’s Name: Alley Chaggar
StudentID: 301194572 
Date: 2022-09-29*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me'});
});


/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contact', { title: 'Contacting me' });
});


module.exports = router;
