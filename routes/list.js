var express = require('express');
var router = express.Router(); //i have no idea what this does, i'll leave it up to your curiosity
var conn = require('../dbConn.js'); //runs dbConn code which makes a connection with your DB & exports a variable to use here

router.head('/customer', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.end();
});

router.post('/customer', function(req, res){ //if a request is sent to /list/customer, this will run..
    var body = req.body.data; //body of request
    var from = body.from, to = body.to; //from & to parameters of the json body
    var baseQuery = "SELECT * FROM `customer` ORDER BY `customer id` ASC ";
    
    if(from && to)   baseQuery += "LIMIT " + (from-1) + "," + to + " "; //checks if both from & to have values

    conn.query(baseQuery, function(err, result, fields){ //execute baseQuery
        if(err) res.send('Error.'); //if there's an error, send it
        else    res.send(JSON.stringify(result)); //if not, send the results
    });
});

router.post('/employee', function(req, res){ 
    var body = req.body.data; 
    var from = body.from, to = body.to; 
    var baseQuery = "SELECT * FROM `employee` ";
    //console.log(body.salary.lower);
/*
    if(body.salary.upper != undefined && body.salary.lower != undefined)    baseQuery += "WHERE `employee salery` <= " + body.salary.upper + " AND `employee salery` >= " + body.salary.lower + " ";
    else if(body.salary.upper != undefined)    baseQuery += "WHERE `employee salery` <= " + body.salary.upper + " ";
    else if(body.salary.lower != undefined)    baseQuery += "WHERE `employee salery` >= " + body.salary.lower + " ";
*/
    baseQuery += "ORDER BY `employee id` ASC ";
    
    if(from && to)   baseQuery += "LIMIT " + (from-1) + "," + to + " "; 

    console.log(baseQuery);

    conn.query(baseQuery, function(err, result, fields){ 
        if(err) res.send('Error.');
        else    res.send(JSON.stringify(result));   
    });
});

router.post('/loan',function(req,res){
  var body = req.body.data; // this is the body of the request
  var loan_number=body.lnom , paid_status=body.p ,customer_id=body.cuID , amount=body.money;
  var  baseQuery="SELECT * FROM `loan`";
  if(body.from && body.to)   baseQuery += "LIMIT " + (body.from-1) + "," + body.to + " ";

  if((paid_status==0 ||paid_status==1) && amount) baseQuery += " WHERE `paid` = " + (paid_status) + " AND `amount`= " + amount + ";" ;
  else if(loan_number) baseQuery+=" WHERE `loan number` = "+(loan_number)+";" ;
  else if(customer_id) baseQuery+=" WHERE `customer id` = "+(customer_id)+";" ;

  conn.query(baseQuery ,function(err,result,fields){
    if(err) res.send(err);
    else res.send(JSON.stringify(result));

  });

});

router.post('/account', function (req, res) {
    var body = req.body.data;
    var query = "SELECT * FROM `account`ORDER BY `Balance` ASC";
    
    conn.query(query, function (err, result, fields) {
        if (err) res.send("Error");
        else res.send(JSON.stringify(result));
    });
});

module.exports = router;
