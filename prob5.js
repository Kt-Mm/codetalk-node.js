//Pulling from mysql module
var mySql = require("mySql");

//creating new data
var connection = mySql.createConnection({
    host: "localhost",
    user: "username",
    password:"your password"
    database: "your data name"
});

//connection connecting to function
connection.connect(function(error){
    // conditional if error happen
    if(!! error){
        //display error if this error happen
        console.log(error);
    // show it is connected
    }else{
        console.log("Connected!:)");
    }
});

// to run function
module.export = connection;