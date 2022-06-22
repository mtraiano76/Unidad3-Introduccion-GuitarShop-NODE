var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('galeria', { title: 'Guitar Shop Express' }); // va a galeria.hbs
});

module.exports = router;
