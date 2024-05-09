const mysql = require("mysql");
 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gdcj',
    database: 'login'
 });

 connection.connect(function(error){
    if(error) throw error;
    else
    console.log("Connected to database")
 })