/*File name: Assignment1
Student’s Name: Alley Chaggar
StudentID: 301194572 
Date: 2022-09-29*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
