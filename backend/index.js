const express = require( "express" );
// import express from "express"
const app = express();
const port = 8080; // default port to listen
const urlencodedParser = express.urlencoded({extended: false});

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


// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );


app.get( "/api/blogs", ( req, res ) => {
  connection.query("SELECT * FROM tetpic.blog;", (err, data)=>{
    res.send( JSON.stringify(data) );
  })
} );

app.post("/api/blogs", urlencodedParser, (req, res)=> {
  if(!req.body) return res.sendStatus(400);
  let {title, body} = req.body
  let created = new Date()
  connection.query("INSERT INTO tetpic.blog (title, body, created) VALUES (?, ?, ?);", [title, body, created], (err, data)=> {
    if(err) {
      res.send(err)
      return
    }
    res.send(JSON.stringify({status: "ok"}))
  })
})

app.patch("/api/blogs", urlencodedParser, (req, res)=> {
  if(!req.body) return res.sendStatus(400)
  console.log(req.body)
  let {title, body, id} = req.body
  connection.query(`UPDATE tetpic.blog SET title = '${title}', body = '${body}' WHERE id = ${id};`, (err)=> {
    if (err) {res.send(err); return}
    res.send(JSON.stringify({status: "updated"}))
  })
})

app.delete("/api/blogs", urlencodedParser, (req, res)=> {
  if(!req.body) return res.sendStatus(400)
  let {id} = req.body
  connection.query(`DELETE FROM tetpic.blog WHERE (id = ${id});`, (err)=> {
    if(err) {res.send(err); return}
    res.send(JSON.stringify({status: "deleted"}))
  })
})







