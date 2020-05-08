/*
A vanilla server code for
sending text based response
*/

var http = require ('http');
var fs = require ('fs');



http.createServer (function (req, res){
  //Setting up the header!
  res.writeHead(200, {'Content-type':'text/plain'});

  res.end('Hello World!');
  /*fs.readFile('myjson.json','utf8',function (err,content){
    if (err) return console.log(err);
    res.end(content);
  });*/


}).listen(8888);

console.log('Server spinned at 8888');
