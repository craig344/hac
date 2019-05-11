const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');
const cors = require('cors');




var app = express();

app.use(cors());

//app.use(bodyParser.json());
app.use(express.json());
//initialize routes
app.use('/api',require('./routes/api'));

//listen for requests
app.listen(process.env.port || 4000,function(){
    console.log("now listening for requests");
    
});

