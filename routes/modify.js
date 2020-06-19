var express = require('express');
var router = express.Router();
var conn = require('../dbConn.js');

router.post('/customer', function(res, req){
  var body = req.body;
  //var customer_id = body.to;
  var query = 'UPDATE `customer` SET `first name`= ' + body.firsName + ',`last name`=' + body.lastName + ',`Address`='+ body.address +' WHERE customer id=' + body.customer_id;
  console.log(query);
  conn.query(query, function(err, result, fields){
    if(err) res.send(err);
    else    res.send(body);
  });
});
