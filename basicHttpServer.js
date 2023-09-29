var http = require('http');
http.createServer(function (req, res) {
    
   // console.log('hi! this is server !');
    res.write('Hello! Allizwell');
   res.end();
}).listen(8081);