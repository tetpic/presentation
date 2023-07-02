const express = require( "express" );
// import express from "express"
const app = express();
const port = 8080; // default port to listen

const mysql = require("mysql");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tetpic",
  password: "password"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });

// define a route handler for the default home page
app.get( "/api", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/api/blog", ( req, res ) => {
    connection.query("SELECT * FROM blog",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    // console.log(fields); // мета-данные полей 
});
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

