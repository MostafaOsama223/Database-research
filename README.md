EndPoint            |   Method  |   Body
--------------------|-----------|-------
transaction/deposit |   POST    |   {"to":int, "balance":int}
transaction/draw    |   POST    |   {"to":int, "balance":int}
--------------------|-----------|-------
showById/customer/:id   |   GET     |   _
showById/employee/:id |   GET     |   _
add/customer/       |   POST     |   {"fname":str, "lname":str, "add":str, "city":str, "custId":int, "empId":int}
list/customer |   POST     |   {"page":int, "limit":int}
list/employee |   POST     |   {"page":int, "limit":int}