var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sunny/sunnyifier', { title: "It's Always Sunny-ifier" });
  // res.json({thing: 'hey'});
});

module.exports = router;
