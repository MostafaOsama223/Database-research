var mysql = require('mysql');

var conn = mysql.createConnection({ //set connection options
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'bank'
});

conn.connect(); //create the connection, ***can be omitted***.

module.exports = conn; //export conn variable so that it can be used when this file is included