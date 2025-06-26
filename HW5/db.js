const mysql = require("mysql");

const conn = mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"root",
    database:"product"
})

conn.connect((err)=>{
    if (err) {
        console.log(err);
        
    } else {
        console.log("Connected Successfully");
        
    }
})

module.exports = conn;