EndPoint                |   Method  |   Body
------------------------|-----------|-------
_transaction_/deposit   |   POST    |   {"to":int, "balance":int}
_transaction_/draw      |   POST    |   {"to":int, "balance":int}
------------------------|-----------|-------
_showById_/customer/:id |   GET     |   {...}
_showById_/employee/:id |   GET     |   {...}
------------------------|-----------|-------
_add_/customer          |   POST    |   {"fname":str, "lname":str, "add":str, "city":str, "custId":int, "empId":int}
_add_/employee          |   POST    |   {"name":str, "id":int, "salary":int, "email":str, "branchId":int}
_add_/loan              |   POST    |   {"Loan_number":int, "Amount":int, "Paid":bool, "customer_id":int}
------------------------|-----------|-------
_delete_/customer       |   DELETE  |   {"custId":int}
_delete_/loan           |   DELETE  |   {"Loan_number":int}
------------------------|-----------|-------
_list_/customer         |   POST    |   {"page":int, "limit":int}
_list_/employee         |   POST    |   {"page":int, "limit":int}
_list_/account          |   POST    |   {...}
