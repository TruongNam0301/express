const express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
    res.send('hello!!');
});

app.get('/id', function(req,res){
    res.send('{id:1}');
});

app.listen(port,function(){
    console.log('server listens on port '+ port);
});