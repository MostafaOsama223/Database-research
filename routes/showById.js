var express = require('express');
var router = express.Router();
var conn = require('../dbConn');

router.get('/customer/:id', function(req, res){
    var query = 'SELECT * FROM `customer` WHERE `customer id` = ' + req.params.id;
    console.log(id);
});

module.exports = router;