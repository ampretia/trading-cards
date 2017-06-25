var express = require('express');
var router = express.Router();

var getImgs = require('./util.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = make rest call here;
  //getImgs();
  data.title ='Express';
  res.render('cards', data);
});




module.exports = router;
