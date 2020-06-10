var express = require('express');
var router = express.Router();
var conn =require('../dbConn.js');


router.post('/delCustomer',function(req,res){
  var body=req.body;
  var baseQuery= ' DELETE FROM `customer` WHERE `customer id`='+ body.customerID+ ';' ;

  if(body.customerID != undefined)
  console.log(baseQuery);
  conn.query(baseQuery,function(err,result,fields){
    if(err) res.send(err);
    else res.send(result);

  });

});

module.exports =router;
