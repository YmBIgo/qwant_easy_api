var express = require('express');
var router  = express.Router();
var qwant   = require("qwant-api");
var url     = require("url");

// 
router.get('/', function(req, res, next){
    var qwant_result = {};
    var qwant_params = url.parse(req.url, true);
    var qwant_keyword = qwant_params.query.keyword;
    console.log(qwant_keyword);
    console.log(qwant.getLanguages());
    if (qwant_keyword != ""){
        qwant.search("web", { query: qwant_keyword, count: 10, offset: 1, language: "german" }, function(err, data){
            if (err) return console.log(err);
            qwant_result = data;
            // console.log(qwant_result);
            res.end(JSON.stringify(qwant_result));
        });
    }else{
        res.end("{}");
    }
  });
  
  module.exports = router;