var express = require('express');
var router = express.Router();
var conn =require('../dbConn.js');


router.post('/customer',function(req,res){
  var body=req.body.data;
  var baseQuery= 'DELETE FROM `customer` WHERE `customer id`='+ body.custId+ ';' ;

  if(body.custId != undefined){
    console.log(baseQuery);
    conn.query(baseQuery,function(err,result,fields){
    if(err){
      if(err.code === 'ER_ROW_IS_REFERENCED_2') res.send(JSON.parse('{ "Error":"Please delete loans taken by this customer first." }'));
      else  res.send(err);
    } 
    else res.send(JSON.stringify(body));
  
    });
  }
});

router.post('/loan', function(req ,res){
  var body = req.body.data;
  var pay_query = ' DELETE FROM `loan` WHERE `loan number`=' + body.loanNum +";" ;

  conn.query(pay_query,function(err , result,fields){
    if (err) res.send(err);
    else res.send(JSON.stringify(body));

  });
});

router.post('/employee', function(req, res){
  var body = req.body.data;
  var query = "DELETE FROM `employee` WHERE `employee id` = " + body.empId + ';';

  conn.query(query, function(err, result, fields){
    if(err) res.send(err);
    else res.send(JSON.stringify(body));
  });
});


module.exports =router;
