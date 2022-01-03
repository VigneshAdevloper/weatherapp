const express = require('express');
const router = express.Router();
const axios = require('axios');



router.post('/currentday', (req,res) => {
    axios.post('https://api.openweathermap.org/data/2.5/weather?id='+req.body.city+'&appid='+process.env.API_key).then((result)=>{
        let resultdata = JSON.parse(JSON.stringify(result.data));
        res.send(resultdata);
    }).catch((err)=> {
        console.log(err);
    }) 
});


router.post('/week', (req,res) => {
    axios.post('http://api.openweathermap.org/data/2.5/forecast?id='+req.body.city+'&appid='+process.env.API_key).then((result)=>{
        let resultdata = JSON.parse(JSON.stringify(result.data));
        res.send(resultdata);
    }).catch((err)=> {
        console.log(err);
    }) 
});


module.exports = router;