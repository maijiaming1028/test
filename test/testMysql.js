let mysql = require("mysql");
let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    port:"3306",
    database:"test"
});

connection.connect();

let sql = "select * from websites";

connection.query(sql,function(error,result,fields){
    if(error) {
        console.log("select error---",error);
        console.log("select error---",error.message);
        return
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
})

connection.end();