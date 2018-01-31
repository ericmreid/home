const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('embarrassment/index', {title: 'Days Since National Embarrassment'});
});

module.exports = router;