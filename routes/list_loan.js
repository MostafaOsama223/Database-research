var express =require('express');
var router = express.Router();
var conn = require('../dbConn.js')


router.post('/customer',function(req,res){
  var body = req.body; // this is the body of the request
  var loan_number=body.lnom , paid_status=body.p ,customer_id=body.cuID , amount=body.money;
  var  baseQuery="SELECT * FROM `loan`";

  if((paid_status==0 ||paid_status==1) && amount) baseQuery+=" WHERE `paid` = "+(paid_status)+" AND `amount`= " +amount +";" ;
  else if(loan_number) baseQuery+=" WHERE `loan number` = "+(loan_number)+";" ;
  else if(customer_id) baseQuery+=" WHERE `customer id` = "+(customer_id)+";" ;

  console.log(baseQuery);
  conn.query(baseQuery ,function(err,result,fields){
    if(err) res.send(err);
    else res.send(result);

  });

});

module.exports = router;
