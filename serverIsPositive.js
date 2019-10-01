var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    let answer = Boolean(Math.round(Math.random()));
    res.end(JSON.stringify({ isPositive: answer }));
});
app.listen(3000);