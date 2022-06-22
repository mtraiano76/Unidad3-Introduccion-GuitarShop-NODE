var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Guitar Shop Express' });
});

module.exports = router;
