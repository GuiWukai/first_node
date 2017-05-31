var http = require('http'); //module to create server
var dt = require('./myfirstmodule');  //./ means current directory

http.createServer(function (req, res) {    //request and response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);