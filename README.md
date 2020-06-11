EndPoint            |   Method  |   Body
--------------------|-----------|-------
_transaction_/deposit |   POST    |   {"to":int, "balance":int}
_transaction_/draw    |   POST    |   {"to":int, "balance":int}
_showById_/customer/:id   |   GET     |   _
_showById_/employee/:id |   GET     |   _
_add_/customer/       |   POST     |   {"fname":str, "lname":str, "add":str, "city":str, "custId":int, "empId":int}
_add_/employee/       |   POST     |   {"name":str, "id":int, "salary":int, "email":str, "branchId":int}
_delete_/customer/       |   DELETE     |   {"custId":int}
_list_/customer |   POST     |   {"page":int, "limit":int}
_list_/employee |   POST     |   {"page":int, "limit":int}