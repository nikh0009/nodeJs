var http = require('http'),
    fs = require ('fs');

fs.readFile('/home/nikhil/Downloads/lion.jpg',function (err,data){
  if (err) console.log(err);

  //creating Server
  http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'image/jpg'});
    res.end(data);
    console.log('Data sent!')
  }).listen(8080);
});

console.log('Make a request 8080 to see lion!');
