var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.params);

  let cards = { "cards": [
     { "cardId" :"12", "cardName":"windmill","qtyAvailable":"4"},
     { "cardId" :"2", "cardName":"truck","qtyAvailable":"2"},
     { "cardId" :"122", "cardName":"wizard","qtyAvailable":"1"}

 ]

 };

  res.send(cards);
});

module.exports = router;
