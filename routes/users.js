var express = require('express');
var router  = express.Router();
var qwant   = require("qwant-api");

// 
router.get('/qwant', function(req, res, next){
  res.render('users/cool', { testtitle: 'Test' });
});

module.exports = router;
