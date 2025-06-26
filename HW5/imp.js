const db = require("./db");

function insertData(name,price){
    const sql = "insert into product(name,price) values(?,?)";
    db.query(sql,[name,price],(err)=>{
        if (err) {
            console.log(err.message);
            
        } else {
            console.log("inserted!!!");
        }
    })
}

function DeleteData(name){
    const sql = "delete from product where name=?";
    db.query(sql,[name],(err)=>{
        if (err) {
            console.log(err.message);
            
        } else {
            console.log("deleted!!!");
        }
    })
}

function ShowData(){
    const sql = "SELECT * FROM product";
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Data:");
            console.table(results); 
        }
    });
}

function UpdateData(price){
    const sql = "Update product set price = ? where name = 'Laptop' ";
    db.query(sql,[price],(err)=>{
        if (err) {
            console.log(err);
            
        } else {
            console.log("Details Updated");
            
        }
    })
}

insertData("Laptop",123);
DeleteData("Laptop");
UpdateData(150);
ShowData();