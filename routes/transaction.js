var express = require('express');
var router = express.Router();
var conn = require('../dbConn.js');

router.post('/draw', function(req, res){
    var body = req.body.data;
    var accNo = body.accNo;
    var balance = body.balance;
    var error = false;

    var query = 'SELECT balance FROM `account` WHERE number = ' + accNo;
    conn.query(query, function(err, results, fields){
        if(err) res.send(err);
        else if(balance > results[0].balance){
            res.send('Not enough balance.');
            error = true
        }else{
            var query = 'UPDATE `account` SET balance = balance - ' + balance + ' WHERE number = ' + accNo;
            conn.query(query, function(err, results, fields){
                if(err) res.send(err);
                else    res.send(JSON.stringify(body));
            });
        }
    });
});

router.post('/deposit', function(req, res){
    var body = req.body.data;
    var accNo = body.accNo;
    var balance = body.balance;
    var query = 'UPDATE `account` SET balance = balance + ' + balance + ' WHERE number = ' + accNo;
    console.log(query);
    conn.query(query, function(err, results, fields){
        if(err) res.send(err);
        else    res.send(JSON.stringify(body));
    });
});

router.post('/transferMoney', function(req, res){
  var body = req.body;
  var account_number_sender = body.to;
  var account_number_reciever = body.to;
  var balance = body.balance;
  var query = 'SELECT balance` FROM `account` WHERE number = ' + body.account_number_sender;
  console.log(query);

  conn.query(query, function(err, results, fields){
    if(err) res.send(err);
    else if(balance > results[0].balance){
        res.send('Not enough balance.');
        error = true
    }
    else{
      var query = 'UPDATE `account` SET balance = balance - ' + body.balance + ' WHERE number = ' + body.account_number_sender;
      console.log(query);
      conn.query(query, function(err, results, fields){
          if(err) res.send(err);
          else{
            var query = 'UPDATE `account` SET balance = balance + ' + body.balance + ' WHERE number = ' + body.account_number_reciever;
            console.log(query);
            conn.query(query, function(err, results, fields){
              if (err) res.send(err);
              else     res.send(body);
            });
          };
        });
    };
  });


});

module.exports = router;
