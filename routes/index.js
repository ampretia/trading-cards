var express = require('express');
var router = express.Router();
var RequestClient = require("reqclient").RequestClient;

var client = new RequestClient("http://localhost:3000/api/");
var getImgs = require('./util.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = client.get({"uri": "available"});
  //getImgs();
  console.log(data);
  data.title ='Express';
  res.render('cards', data);
});




module.exports = router;
