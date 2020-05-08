var fs = require ('fs');

fs.readFile('myjson.json','utf8',function (err,content){
  if (err) return console.log(err);
  console.log(content);
})
