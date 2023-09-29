var http = require("http");
var url = require("url");

const dt = require('./myDateTime.js');

 http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
   res.write(dt());
    
      // res.write(req.url);
      
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
    res.write(txt);
  })
  .listen(8081);
