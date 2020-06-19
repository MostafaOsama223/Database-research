var express = require('express');
var router = express.Router();
var conn = require('../dbConn.js');

router.post('/customer', function(req, res){
    var body = req.body.data;
    var query = 'INSERT INTO `customer` (`first name`, `last name`, `Address`,\
                                         `city`, `customer id`, `employee id`) VALUES ("'+
                                        body.fname + '","' +
                                        body.lname + '","' +
                                        body.add + '","' +
                                        body.city + '","' +
                                        body.custId + '","' +
                                        body.empId + '")';
                                        
    conn.query(query, function(err, result, fields){
        if(err) res.send(err);
        else res.send(JSON.stringify(body));
    });   
});

router.post('/employee', function(req, res){
var body = req.body.data;
var query = ' INSERT INTO `employee` (`employee name`, `employee id`, `employee salery`,\
                                          `email`, `branch id`) VALUES ("'
                                    +body.name+'","'
                                    +body.id+'","'
                                    +body.salary+'","'
                                    +body.email+'","'
                                    +body.branchId
                                    +'")' ;

      console.log(query);
      conn.query(query,function(err,result,fields){
        if(err) res.send(body);
        else res.send(JSON.stringify(body));
    });
});

router.post('/loan', function (req, res) {
    var body = req.body.data;
    var take_query = ' INSERT INTO `loan` (`loan number`, `amount`, `paid`,\
                                              `customer id`) VALUES ("' +
                                                body.loanNum + '","' +
                                                body.amount + '","' +
                                                body.paid + '","' +
                                                body.custId +
                                                '")';

    conn.query(take_query, function (err, result, fields) {
        if (err) res.send(err);
        else res.send(JSON.stringify(body));

    });
});

module.exports = router;
