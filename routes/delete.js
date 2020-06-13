var express = require('express');
var router = express.Router();
var conn =require('../dbConn.js');


router.delete('/customer',function(req,res){
  var body=req.body;
  var baseQuery= 'DELETE FROM `customer` WHERE `customer id`='+ body.custId+ ';' ;

  if(body.custId != undefined){
    console.log(baseQuery);
    conn.query(baseQuery,function(err,result,fields){
    if(err) res.send(err);
    else res.send(result);
  
    });
  }
});

router.post('/loan', function(req ,res){
  var body = req.body;
  var pay_query = ' UPDATE `loan` SET `Paid`=1 WHERE `Loan_number`=' + body.Loan_number +";" ;

  conn.query(pay_query,function(err , result,fields){
    if (err) res.send(err);
    else res.send(body);

  });
});

router.delete('/employee', function(req, res){
  var body = req.body;
  var query = "DELETE FROM `employee` WHERE `employee`.`employee id` = " + body.employeeId + ';';

  conn.query(query, function(err, result, fields){
    if(err) res.send(err);
    else res.send(result);
  });
});

module.exports =router;
