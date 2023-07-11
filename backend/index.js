// const bodyParser = require('body-parser');
// import express from "express"
const express = require( "express" );
const mysql = require("mysql");
const cors = require('cors')
const app = express();
const port = 8080; // default port to listen
const corsOptions = {
  origin: 'http://localhost:3000/', // домен сервиса, с которого будут приниматься запросы
  optionsSuccessStatus: 200 // для старых браузеров
}
app.use(cors());

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// app.use(bodyParser.json())

  
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "tetpic",
  password: ""
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});



// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );


app.get( "/api/blogs", ( req, res ) => {
  connection.query("SELECT * FROM tetpic.blog;", (err, data)=>{  
    res.type('application/json')    
    res.json(data);
  })
} );

app.post("/api/blogs", (req, res)=> {
  if(!req.body) return res.sendStatus(400);
  let body = ""
  req.on("data", (chunk)=> {
    body += chunk
  })
  req.on("end", ()=> {
    console.log(body);
  })
  res.send("lol kek")
 
})



app.patch("/api/blogs", (req, res)=> {
  if(!req.body) return res.sendStatus(400)
  console.log(req.body)
  let {title, body, id} = req.body
  connection.query(`UPDATE tetpic.blog SET title = '${title}', body = '${body}' WHERE id = ${id};`, (err)=> {
    if (err) {res.send(err); return}
    res.send(JSON.stringify({status: "updated"}))
  })
})

app.delete("/api/blogs", (req, res)=> {
  if(!req.body) return res.sendStatus(400)
  let {id} = req.body
  connection.query(`DELETE FROM tetpic.blog WHERE (id = ${id});`, (err)=> {
    if(err) {res.send(err); return}
    res.send(JSON.stringify({status: "deleted"}))
  })
})







