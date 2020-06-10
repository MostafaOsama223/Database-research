var express = require('express');
var router = express.Router();
var conn = require('../dbConn.js');

router.post('/customer', function(req, res){
var body = req.body;
var query = ' INSERT INTO `employee` (`employee name`, `employee id`, `employee salery`,\
                                          `email`, `branch id`) VALUES ("'
                                    +body.Name+'","'
                                    +body.ID+'","'
                                    +body.salary+'","'
                                    +body.email+'","'
                                    +body.branchID
                                    +'")' ;

      console.log(query);
      conn.query(query,function(err,result,fields){
        if(err) res.send(err);
        else res.send(body);
    });
});
module.exports = router;
