var express = require('express');
var router = express.Router();
var conn = require('../dbConn');

router.get('/customer/:id', function(req, res){
    var query = 'SELECT * FROM `customer` WHERE `customer id` = ' + req.params.id;
    conn.query(query, function(err, results, fields){
        if(err) res.send(err);
        else    res.send(results[0]);
    });
});

router.get('/employee/:id', function(req, res){
    var query = 'SELECT * FROM `employee` WHERE `employee id` = ' + req.params.id;
    conn.query(query, function(err, results, fields){
        if(err) res.send(err);
        else    res.send(results[0]);
    });
});

module.exports = router;