//Stream are for efficient IO they achieve it by reading and writing in chunks
const fs = require('fs');
const readStream = fs.createReadStream("../data/sample.txt","utf8");
readStream.on('data',(chunk) =>{
  console.log(chunk);
})
