const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.all('*',function(req,res,next){
    //sconsole.log(req);
  
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

const weather = require('./weather/weather.js');

app.use('/weather', weather);


app.listen(810, ()=> {
    console.log("node started");
})